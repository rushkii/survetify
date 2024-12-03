import type { Question } from '$types';
import { compile } from 'mdsvex';

export const transformQuestion = (questions: Question[]) => {
  return questions.map(async (q) => ({
    question: (await compile(q.question))!.code,
    answers: await Promise.all(
      q.answers.map(async (a) => ({ id: a.id, answer: (await compile(a.answer))!.code }))
    )
  }));
};
