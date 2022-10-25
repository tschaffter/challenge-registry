import { Context } from 'probot';
import pino from 'pino';
import { version } from '../package.json';
import { Server } from './server/server';
import { Configuration, getConfiguration } from './config';
import { Command } from 'commander';
import stringArgv from 'string-argv';

export const logger = pino();

export class ChallengeApp {
  private context: Context<'issue_comment'>;
  private logger: pino.Logger;
  public server: Server;
  private config?: Configuration;
  private program = new Command();
  private description = 'Awesome bot';

  constructor(context: Context<'issue_comment'>) {
    this.context = context;
    this.logger = logger.child({
      version,
      // repo: this.repo,
      // owner: this.owner,
      // pull_number: this.pullNumber,
      // sha: this.headSha,
    });
    this.server = new Server();

    this.program.name('challenge-bot').description(this.description);
    this.program.exitOverride();
    this.program.configureOutput({
      // Visibly override write routines as example!
      writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
      writeErr: (str) => process.stdout.write(`[ERR] ${str}`),
      // Highlight errors in color.
      // outputError: (str, write) => write(errorColor(str))
    });
    // .usage('[global options] command')
    // .version(Pkg.version, '-v, --version', 'output the current version')
    // .description(Pkg.description);

    this.program
      .command('ping')
      .description('ping the bot')
      .action(() => this.ping());

    this.program
      .command('version')
      .description('output the version number')
      .action(() => console.log(version));

    this.program
      .command('description')
      .description('output the description')
      .action(() => console.log(this.description));
  }

  private async ping(): Promise<void> {
    const issueComment = this.context.issue({
      body: 'pong',
    });
    await this.context.octokit.issues.createComment(issueComment);
  }

  async run(): Promise<void> {
    try {
      this.config = await getConfiguration(this.context);
      this.logger.info({ config: this.config }, 'Loaded config');
    } catch (err) {
      this.logger.error(
        'An error occured while loading the configuration',
        err
      );
    }

    // const { comment, issue, pull_request: pr } = this.context.payload;
    // const command = (comment || issue || pr).body;

    const body = this.context.payload.comment.body;
    this.logger.info({ body }, 'body');
    if (!!body && body.startsWith('challenge-bot')) {
      this.logger.info({ body }, 'Received bot command');
      const argv = stringArgv(body);
      this.logger.info({ argv }, 'argv');
      try {
        await this.program.parseAsync(argv.slice(1), {
          from: 'user',
        });
      } catch (err) {
        this.logger.info({ err }, 'CLI error');
      }
    }

    // const issueComment = this.context.issue({
    //   body: 'Thanks for opening this issue! ' + this.config?.message,
    // });
    // await this.context.octokit.issues.createComment(issueComment);
  }

  // get repo(): string {
  //   return this.context.payload.repository.name;
  // }

  // get owner(): string {
  //   return this.context.payload.repository.owner.login;
  // }
}

// import { ApplicationFunctionOptions, Probot, run } from 'probot';
// import * as express from 'express';

// export const challengeBot = async (
//   app: Probot,
//   { getRouter }: ApplicationFunctionOptions
// ): Promise<void> => {
//   // if (!getRouter) {
//   //   throw new Error('getRouter is undefined');
//   //   // console.log('getRouter is undefined');
//   // }

//   // // if (getRouter) {
//   // const router = getRouter('/api');

//   // router.use(express.json());

//   // router.get('/hello-world', (req, res) => {
//   //   res.json({ a: 1 });
//   // });
//   // }

//   // if (!getRouter) {
//   //   throw new Error('getRouter is undefined');
//   // }

//   app.on('issues.opened', async (context) => {
//     const issueComment = context.issue({
//       body: 'Thanks for opening this issue!',
//     });
//     await context.octokit.issues.createComment(issueComment);
//   });
//   // For more information on building apps:
//   // https://probot.github.io/docs/

//   // To get your app running against GitHub, see:
//   // https://probot.github.io/docs/development/
// };

// run(challengeBot);
