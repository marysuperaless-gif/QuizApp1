interface Props {
  total: number;
  current: number; 
  results: boolean[]; 
}

export default function ProgressBar({ total, current, results }: Props) {
  return (
    <div className="flex items-center gap-1.5" aria-label="Quiz progress">
      {Array.from({ length: total }, (_, i) => {
        const answered = i < results.length;
        const color = answered
          ? results[i]
            ? "bg-emerald-500 text-white"
            : "bg-rose-500 text-white"
          : i === current
          ? "bg-violet-500/40 text-violet-200 ring-2 ring-violet-400"
          : "bg-slate-700 text-slate-500";
        return (
          <span
            key={i}
            className={`flex h-7 flex-1 items-center justify-center rounded text-xs font-semibold ${color}`}
          >
            {answered ? (results[i] ? "✓" : "✗") : ""}
          </span>
        );
      })}
    </div>
  );
}
