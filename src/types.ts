export interface Question {
  id: number;
  question: string;
  choices: string[];
  answer: number; 
}

export interface QuizResultState {
  total: number;
  correct: number;
}
