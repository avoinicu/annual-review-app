import { useAtomValue } from 'jotai';

import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { Label } from '~/components/ui/label';
import { getQuestionsMap } from '~/lib/getQuestionsMap';
import { cn } from '~/lib/utils';

const Question = ({ className }: { className?: string }) => {
  const currentQuestion = useAtomValue(currentQuestionAtom);
  const questions = getQuestionsMap();
  const question = questions.get(currentQuestion);

  return (
    <Label
      className={cn('md:text-3xl font-semibold font-lora', className)}
      htmlFor={currentQuestion.toString()}
    >
      {question?.question}
    </Label>
  );
};

Question.displayName = 'Question';
export { Question };
