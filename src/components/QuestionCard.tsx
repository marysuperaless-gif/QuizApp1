import AnswerOption from "./AnswerOption";
import type { Question } from "../types";

interface Props {
  question: Question;
  number: number;
  selected: number | null;
  isLast: boolean;
  onSelect: (index: number) => void;
  onNext: () => void;
}

export default function QuestionCard({
  question,
  number,
  selected,
  isLast,
  onSelect,
  onNext,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 shadow-xl">
      <p className="text-sm text-violet-300">Q# {number}</p>
      <h2 className="mt-1 mb-5 text-xl font-semibold sm:text-2xl">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.choices.map((choice, i) => (
          <AnswerOption
            key={i}
            text={choice}
            selected={selected === i}
            onSelect={() => onSelect(i)}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={onNext}
          disabled={selected === null}
          className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-2.5 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLast ? "Finish ❤" : "Next ❤"}
        </button>
      </div>
    </section>
  );
}
