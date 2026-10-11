import ProgressBar from "./ProgressBar";

interface Props {
  total: number;
  current: number;
  results: boolean[];
}

export default function QuizHeader({ total, current, results }: Props) {
  const score = results.filter(Boolean).length;
  return (
    <header className="mb-6 space-y-3">
      <ProgressBar total={total} current={current} results={results} />
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>
          Question {current + 1} of {total}
        </span>
        <span className="font-semibold text-white">
          Score {score}/{total}
        </span>
      </div>
    </header>
  );
}
