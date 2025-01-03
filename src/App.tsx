import { Analytics } from '@vercel/analytics/react';

import { ActionButtons, Categories, ChangeYear, Field, Question, Sidebar, ToolButtons } from '~/components';
import { useTheme } from '~/lib/useTheme';

function App() {
  useTheme();

  return (
    <div className="container flex flex-col h-full min-h-full gap-4 px-2 py-4 mx-auto md:px-4">
      <div className="flex items-center gap-4">
        <Sidebar />
        <Question className="mr-auto" />
        <ActionButtons />
        <Sidebar />
      </div>
      <div className="container flex items-start justify-start h-full gap-4 ">
        <Sidebar>
          <div className="absolute inline-flex gap-4 origin-right transform -rotate-90 -translate-x-full -translate-y-1/2 select-none font-doto left-1/2 text-slate-300 dark:text-slate-600">
            <h1 className="text-4xl whitespace-nowrap">Annual Review</h1>
            <ChangeYear />
          </div>
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
      <Analytics />
    </div>
  );
}

export default App;
