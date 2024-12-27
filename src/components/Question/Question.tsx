import { useAtom } from 'jotai';

import { currentAnswerAtom } from '~/atoms/currentAnswer.atom';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { useSaveData } from '~/lib/saveData';
import type { TQuestion } from '~/types';

export const Question = ({ id, question }: TQuestion) => {
  const [currentAnswer, setCurrentAnswer] = useAtom(currentAnswerAtom);
  const saveData = useSaveData();

  const questionId = id.toString();

  const handleOnBlur = () => {
    console.log('Saving data...');
    saveData();
  };

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor={questionId}>{question}</Label>
      <Textarea
        autoFocus
        value={currentAnswer}
        onChange={(e) => {
          setCurrentAnswer(e.target.value);
        }}
        onBlur={handleOnBlur}
        id={questionId}
        name={questionId}
        rows={5}
      />
    </div>
  );
};
