import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const themeAtom = atomWithStorage(
  'theme',
  'system',
  createJSONStorage(() => localStorage),
  {
    getOnInit: true,
  }
);
