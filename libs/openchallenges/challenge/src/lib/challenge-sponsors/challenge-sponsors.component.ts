import { Component, Input } from '@angular/core';
import { Challenge } from '@sagebionetworks/openchallenges/api-client-angular-deprecated';
import {
  MOCK_CHALLENGE_SPONSORS,
  MOCK_ORGANIZATIONS,
} from '@sagebionetworks/openchallenges/ui';

@Component({
  selector: 'openchallenges-challenge-sponsors',
  templateUrl: './challenge-sponsors.component.html',
  styleUrls: ['./challenge-sponsors.component.scss'],
})
export class ChallengeSponsorsComponent {
  @Input() challenge!: Challenge;
  sponsors = MOCK_CHALLENGE_SPONSORS;
  organization = MOCK_ORGANIZATIONS[0];
}