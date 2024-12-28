import { useAtom } from 'jotai';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { Button } from '~/components/ui/button';
import { getQuestionsMap } from '~/lib/getQuestionsMap';

const ActionButtons = () => {
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionAtom);
  const questions = getQuestionsMap();

  const shouldShowButton = (direction: 'prev' | 'next') => {
    return questions.has(currentQuestion + (direction === 'prev' ? -1 : 1));
  };

  const handleButtonClick = (direction: 'prev' | 'next') => () => {
    setCurrentQuestion((prev) => {
      if (direction === 'prev') {
        return prev - 1;
      }
      return prev + 1;
    });
  };

  return (
    <div className="flex gap-4">
      {shouldShowButton('prev') && (
        <Button
          tabIndex={1}
          type="button"
          onClick={handleButtonClick('prev')}
          variant="outline"
          size="icon"
        >
          <ArrowLeft />
        </Button>
      )}
      {shouldShowButton('next') && (
        <Button
          tabIndex={0}
          type="button"
          onClick={handleButtonClick('next')}
          variant="outline"
          size="icon"
        >
          <ArrowRight />
        </Button>
      )}
    </div>
  );
};

ActionButtons.displayName = 'ActionButtons';
export { ActionButtons };
