import { useAtomValue } from 'jotai';

import { answersAtom } from '~/atoms/answers.atom';

export const useHasAnswers = () => {
  const answers = useAtomValue(answersAtom);
  const reviewYear = Object.keys(answers)[0];
  return answers[reviewYear].filter((answer) => answer !== '').length > 0;
};
