import { atomWithStorage } from 'jotai/utils';

import { getCurrentYear } from '~/lib/getCurrentYear';

export const answersAtom = atomWithStorage<{ [key: string]: string[] }>(
  'answers',
  {
    [getCurrentYear().toString()]: [],
  },
  {
    getItem: (key, initialValue) => {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        const parsedValue = JSON.parse(storedValue);
        if (typeof parsedValue === 'string') {
          const splitValue = parsedValue.split(':');
          return {
            [splitValue[0]]: splitValue.slice(1),
          };
        }
        return JSON.parse(storedValue);
      }
      return initialValue;
    },
    setItem: (key, newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
  },
  {
    getOnInit: true,
  }
);
