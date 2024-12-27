import { useAtomValue } from 'jotai';

import { reviewYearAtom } from '~/atoms/reviewYear.atom';
import { About, ThemeSwitch, YearReviewForm } from '~/components';
import { useTheme } from '~/lib/useTheme';

function App() {
  const reviewYear = useAtomValue(reviewYearAtom);

  useTheme();

  return (
    <div className="container flex flex-col gap-8 px-4 py-8 mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">{reviewYear} Review</h1>
        <div className="flex gap-4">
          <About />
          <ThemeSwitch />
        </div>
      </header>
      <YearReviewForm />
    </div>
  );
}

export default App;
