import { getDefaultSeoData } from '@sagebionetworks/openchallenges/util';
import { SeoData } from '@sagebionetworks/shared/util';

export const getSeoData = (): SeoData => {
  // shallow merge
  return Object.assign(getDefaultSeoData(), {
    title: 'Explore Challenges | OpenChallenges',
  } as SeoData);
};
