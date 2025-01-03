import { useAtomValue } from 'jotai';

import { answersAtom } from '~/atoms/answers.atom';
import { reviewYearAtom } from '~/atoms/reviewYear.atom';

export const useHasAnswers = () => {
  const answers = useAtomValue(answersAtom);
  const reviewYear = useAtomValue(reviewYearAtom);
  return !!answers[reviewYear]?.filter((answer) => answer !== '').length;
};
