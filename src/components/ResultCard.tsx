interface Props {
  total: number;
  correct: number;
  onRetake: () => void;
  onHome: () => void;
}

export default function ResultCard({ total, correct, onRetake, onHome }: Props) {
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  const stats = [
    { label: "Total questions", value: total },
    { label: "Correct", value: correct },
    { label: "Incorrect", value: incorrect },
    { label: "Percentage", value: `${percentage}%` },
  ];

  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-800/60 p-8 text-center shadow-xl">
      <p className="text-slate-300">Quiz completed</p>
      <h1 className="mt-1 text-3xl font-bold">Congratulations!</h1>
      <p className="mt-4 text-slate-300">Your score</p>
      <p className="mx-auto mt-2 w-fit rounded-lg bg-slate-700 px-10 py-4 text-4xl font-bold">
        {correct} / {total}
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-slate-900/60 p-3">
            <dt className="text-xs text-slate-400">{s.label}</dt>
            <dd className="text-xl font-semibold">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          onClick={onRetake}
          className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-2.5 font-semibold text-white transition hover:brightness-110"
        >
          Retake Quiz
        </button>
        <button
          onClick={onHome}
          className="rounded-lg border border-slate-500 px-6 py-2.5 font-semibold transition hover:bg-slate-700"
        >
          Return Home
        </button>
      </div>
    </section>
  );
}
