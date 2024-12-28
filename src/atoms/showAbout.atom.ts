import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const showAboutAtom = atomWithStorage(
  'showAbout',
  true,
  createJSONStorage(() => localStorage),
  {
    getOnInit: true,
  }
);
