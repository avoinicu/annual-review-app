import { atom } from 'jotai';

import { answersAtom } from './answers.atom';

export const reviewYearAtom = atom((get) => {
  return get(answersAtom).split(':')[0];
});
