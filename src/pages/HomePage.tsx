import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen flex-col items-start justify-center px-8 sm:px-24">
      <p className="text-3xl font-light sm:text-4xl">Welcome to the</p>
      <h1 className="text-5xl font-bold sm:text-6xl">Frontend Quiz!</h1>
      <p className="mt-4 max-w-md text-slate-300">
        How much do you know about love? Answer 10 multiple-choice questions to find out.
      </p>
      <button
        onClick={() => navigate("/quiz")}
        className="mt-8 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:brightness-110"
      >
        Start the love quiz 
      </button>
    </main>
  );
}
