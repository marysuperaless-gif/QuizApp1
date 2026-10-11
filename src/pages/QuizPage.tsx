import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuestionCard from "../components/QuestionCard";
import { questions } from "../data/questions";
import type { QuizResultState } from "../types";

export default function QuizPage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);

  const isLast = current === questions.length - 1;

  const handleNext = () => {
    if (selected === null) return;
    const isCorrect = selected === questions[current].answer;
    const updated = [...results, isCorrect];
    setResults(updated);

    if (isLast) {
      const state: QuizResultState = {
        total: questions.length,
        correct: updated.filter(Boolean).length,
      };
      navigate("/result", { state });
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-4 py-8">
      <QuizHeader total={questions.length} current={current} results={results} />
      <QuestionCard
        question={questions[current]}
        number={current + 1}
        selected={selected}
        isLast={isLast}
        onSelect={setSelected}
        onNext={handleNext}
      />
    </main>
  );
}
