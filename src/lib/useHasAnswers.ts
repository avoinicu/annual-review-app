import { useAtomValue } from 'jotai';

import { answersAtom } from '~/atoms/answers.atom';

export const useHasAnswers = () => {
  const answers = useAtomValue(answersAtom);
  const splitAnswers = answers.split(':');
  return splitAnswers.filter((answer) => answer !== '').length > 1;
};
