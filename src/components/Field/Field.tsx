import { useAtom, useAtomValue } from 'jotai';

import { currentAnswerAtom } from '~/atoms/currentAnswer.atom';
import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { Textarea } from '~/components/ui/textarea';
import { useSaveData } from '~/lib/useSaveData';

const Field = () => {
  const [currentAnswer, setCurrentAnswer] = useAtom(currentAnswerAtom);
  const questionId = useAtomValue(currentQuestionAtom).toString();
  const saveData = useSaveData();

  const handleOnBlur = () => {
    saveData();
  };

  return (
    <Textarea
      className="h-full p-0 font-light border-none shadow-none resize-none md:text-2xl focus:border-none focus:outline-none focus:ring-transparent focus-visible:ring-transparent"
      autoFocus
      tabIndex={0}
      value={currentAnswer}
      onChange={(e) => {
        setCurrentAnswer(e.target.value);
      }}
      onBlur={handleOnBlur}
      id={questionId}
      name={questionId}
    />
  );
};

Field.displayName = 'Field';
export { Field };
