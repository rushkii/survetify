import type { Answer, Question, QuestionRaw } from '$types';
import { pool } from './connection';

export const getQuestions = async (surveyId: string): Promise<Question[] | null> => {
  try {
    const { rows: questions }: { rows: QuestionRaw[] } = await pool.query(
      `
      SELECT
          sq.question,
          ARRAY_AGG(
              '{ "id": ' || sa.id || ', "answer": "' || sa.answer || '" }'
          ORDER BY sa.id) AS answers
      FROM
          t_survey_questions sq
      LEFT JOIN
          t_survey_answers sa ON sa.question_id = sq.id
      WHERE
          sq.survey_id = $1
      GROUP BY
          sq.id
      ORDER BY
          sq.id;
    `,
      [surveyId]
    );

    if (!questions) return null;

    return questions.map((e) => ({
      ...e,
      answers: e.answers.map<Answer>((e) => JSON.parse(e))
    }));
  } catch {
    return null;
  }
};
