import { useAtomValue } from 'jotai';

import { reviewYearAtom } from '~/atoms/reviewYear.atom';
import { ActionButtons, Categories, Field, Question, Sidebar, ToolButtons } from '~/components';
import { useReadUrl } from '~/lib/useReadUrl';
import { useTheme } from '~/lib/useTheme';

function App() {
  const reviewYear = useAtomValue(reviewYearAtom);

  useTheme();
  useReadUrl();

  return (
    <div className="container flex flex-col h-full min-h-full gap-4 px-2 py-4 mx-auto md:px-4">
      <div
        tabIndex={-1}
        className="flex items-center gap-4"
      >
        <Sidebar />
        <Question className="mr-auto" />
        <ActionButtons />
        <Sidebar />
      </div>
      <div className="container flex items-start justify-start h-full gap-4 ">
        <Sidebar>
          <h1 className="absolute inline-flex text-4xl font-bold origin-right transform -rotate-90 -translate-x-full -translate-y-1/2 select-none text-slate-300 dark:text-slate-600 left-1/2 whitespace-nowrap">
            Annual Review: {reviewYear}
          </h1>
        </Sidebar>

        <div className="flex flex-col flex-grow w-full h-full min-h-full gap-2">
          <Field />
        </div>

        <Sidebar>
          <Categories />
        </Sidebar>
      </div>

      <footer className="flex gap-4">
        <Sidebar />
        <ToolButtons />
        <Sidebar />
      </footer>
    </div>
  );
}

export default App;
