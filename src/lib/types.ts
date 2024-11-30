export interface User {
  username: string;
  fullname: string;
}

export interface Survey {
  id: string;
  name: string;
  description: string;
}

export interface Answer {
  id: number;
  answer: string;
}

export interface QuestionRaw {
  question: string;
  answers: string[];
}

export interface Question {
  question: string;
  answers: Answer[];
}
