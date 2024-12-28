import { useAtomValue } from 'jotai';

import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { groups } from '~/data/questionGroups.json';
import { cn } from '~/lib/utils';

const Categories = () => {
  const questionId = useAtomValue(currentQuestionAtom);

  return (
    <ul className="flex gap-1 origin-top-left transform rotate-90 translate-x-1/2 whitespace-nowrap text-slate-400 dark:text-slate-500">
      {groups.map((group: { name: string; questions: number[] }) => (
        <li
          key={group.name}
          className={cn(
            'px-2 border-t-2 border-l-2 border-r-2 rounded-t-md border-slate-200 dark:border-slate-800 ',
            {
              'bg-slate-200': !group.questions.includes(questionId),
              'dark:bg-transparent': !group.questions.includes(questionId),
              'dark:bg-slate-800': group.questions.includes(questionId),
            }
          )}
        >
          {group.name}
        </li>
      ))}
    </ul>
  );
};

Categories.displayName = 'Categories';
export { Categories };
