import { atomWithStorage } from 'jotai/utils';

import { getCurrentYear } from '~/lib/getCurrentYear';

export const answersAtom = atomWithStorage('answers', `${getCurrentYear()}:`);
