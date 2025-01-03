import { useAtomValue } from 'jotai';

import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { groups } from '~/data/questionGroups.json';
import { cn } from '~/lib/utils';

const Categories = () => {
  const questionId = useAtomValue(currentQuestionAtom);

  return (
    <ul className="flex gap-4 text-xl origin-top-left transform rotate-90 translate-x-full select-none font-doto whitespace-nowrap text-slate-300 dark:text-slate-600">
      {groups.map((group: { name: string; questions: number[] }) => (
        <li
          key={group.name}
          className={cn({
            'text-slate-200': !group.questions.includes(questionId),
            'dark:text-slate-800': !group.questions.includes(questionId),
          })}
        >
          {group.name}
        </li>
      ))}
    </ul>
  );
};

Categories.displayName = 'Categories';
export { Categories };
