import { atom } from 'jotai';

import { getCurrentYear } from '~/lib/getCurrentYear';
import { packData } from '~/lib/packData';
import { unpackData } from '~/lib/unpackData';
import { updateUrl } from '~/lib/updateURL';

import { answersAtom } from './answers.atom';

export const reviewYearAtom = atom(getCurrentYear(), (get, set, year: string) => {
  const answers = get(answersAtom);


  const packedData = packData(year, answers[year] ?? []);
  updateUrl(packedData);

  set(reviewYearAtom, year);
});

reviewYearAtom.onMount = (setReviewYear) => {
  const url = new URLSearchParams(window.location.search);
  const dataParam = url.get('data');

  if (dataParam) {
    const unpackedData = unpackData(dataParam);
    const unpackedYear = Object.keys(unpackedData)[0];
    setReviewYear(unpackedYear);
  }
};
