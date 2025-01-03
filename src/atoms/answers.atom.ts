import { atomWithStorage } from 'jotai/utils';

import { getCurrentYear } from '~/lib/getCurrentYear';
import { unpackData } from '~/lib/unpackData';

export const answersAtom = atomWithStorage<{ [key: string]: string[] }>(
  'answers',
  {
    [getCurrentYear()]: [],
  },
  {
    getItem: (key, initialValue) => {
      const storedValue = localStorage.getItem(key);
      let oldAnswers = {};

      if (storedValue) {
        const parsedValue = JSON.parse(storedValue);
        if (typeof parsedValue === 'string') {
          const splitValue = parsedValue.split(':');
          oldAnswers = {
            [splitValue[0]]: splitValue.slice(1),
          };
        } else {
          oldAnswers = parsedValue;
        }
      }

      const url = new URLSearchParams(window.location.search);
      const dataParam = url.get('data');
      let unpackedData = {};

      if (dataParam) {
        unpackedData = unpackData(dataParam);
      }

      return { ...initialValue, ...oldAnswers, ...unpackedData };
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

answersAtom.onMount = (setAnswers) => {
  const oldAnswers = localStorage.getItem('answers') ? JSON.parse(localStorage.getItem('answers') as string) : {};
  const url = new URLSearchParams(window.location.search);
  const dataParam = url.get('data');
  if (dataParam) {
    const unpackedData = unpackData(dataParam);
    setAnswers({ ...oldAnswers, ...unpackedData });
  }
};
