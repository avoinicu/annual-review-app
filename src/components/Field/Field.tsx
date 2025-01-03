import { useAtomValue } from 'jotai';

import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { Textarea } from '~/components/ui/textarea';
import { useCurrentAnswer } from '~/lib/useCurrentAnswer';
import { useSaveData } from '~/lib/useSaveData';

const Field = () => {
  const { answer, setAnswer } = useCurrentAnswer();
  const questionId = (useAtomValue(currentQuestionAtom) - 1).toString();
  const saveData = useSaveData();

  const handleOnBlur = () => {
    saveData();
  };

  return (
    <Textarea
      className="h-full p-0 font-light border-none shadow-none resize-none md:text-2xl focus:border-none focus:outline-none focus:ring-transparent focus-visible:ring-transparent"
      autoFocus
      tabIndex={0}
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      onBlur={handleOnBlur}
      id={questionId}
      name={questionId}
    />
  );
};

Field.displayName = 'Field';
export { Field };
