import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
// import { KAuthGuard } from '@sagebionetworks/openchallenges/auth';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/home').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/about').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'challenge',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/challenge-search').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'org',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/org-search').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/login').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/signup').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/team').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/not-found').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'org/:orgLogin',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/org-profile').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'challenge/:challengeId',
    loadChildren: () =>
      import('@sagebionetworks/openchallenges/challenge').then(
        (routes) => routes.routes
      ),
  },
  // {
  //   path: 'user/:userLogin',
  //   loadChildren: () =>
  //     import('@sagebionetworks/openchallenges/user-profile').then(
  //       (m) => m.UserProfileModule
  //     ),
  // },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      // this is important to use "data:title" from any level
      // paramsInheritanceStrategy: 'always',
    }),
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
