import { useAtom, useAtomValue } from 'jotai';

import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { statusAtom } from '~/atoms/status.atom';
import { Question } from '~/components';
import { Button } from '~/components/ui/button';
import { getQuestionsMap } from '~/lib/getQuestionsMap';

export const YearReviewForm = () => {
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionAtom);
  const status = useAtomValue(statusAtom);

  const questions = getQuestionsMap();
  const question = questions.get(currentQuestion);

  const handleButtonClick = (direction: 'prev' | 'next') => () => {
    setCurrentQuestion((prev) => {
      if (direction === 'prev') {
        return prev - 1;
      }
      return prev + 1;
    });
  };

  const shouldShowButton = (direction: 'prev' | 'next') => {
    return questions.has(currentQuestion + (direction === 'prev' ? -1 : 1));
  };

  return (
    <div className="flex flex-col flex-shrink-0 gap-8">
      {!!question && <Question {...question} />}
      <div className="flex justify-end gap-4">
      <p className="mr-auto text-sm text-muted-foreground">{status}</p>
        {shouldShowButton('prev') && (
          <Button
            tabIndex={0}
            type="button"
            onClick={handleButtonClick('prev')}
            variant="outline"
            size="sm"
            className="ml-auto"
          >
            Previous
          </Button>
        )}
        {shouldShowButton('next') && (
          <Button
            tabIndex={0}
            type="button"
            onClick={handleButtonClick('next')}
            variant="outline"
            size="sm"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};
