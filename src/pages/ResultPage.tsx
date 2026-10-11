import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import type { QuizResultState } from "../types";

export default function ResultPage() {
  const navigate = useNavigate();
  const state = useLocation().state as QuizResultState | null;

  // Opened /result directly without finishing a quiz
  if (!state) return <Navigate to="/" replace />;

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-4 py-8">
      <div className="w-full">
        <ResultCard
          total={state.total}
          correct={state.correct}
          onRetake={() => navigate("/quiz")}
          onHome={() => navigate("/")}
        />
      </div>
    </main>
  );
}
