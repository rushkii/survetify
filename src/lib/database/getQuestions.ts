import { pool } from './connection';

export const getQuestions = async (surveyId: string): Promise<unknown[]> => {
  const { rows: questions } = await pool.query(
    `
    SELECT
        sq.question,
        ARRAY_AGG(sa.answer ORDER BY sa.id) AS answers
    FROM
        t_survey_questions sq
    LEFT JOIN
        t_survey_answers sa ON sq.id = sa.question_id
    WHERE
        sq.survey_id = $1
    GROUP BY
        sq.id
    ORDER BY
        sq.id;
  `,
    [surveyId]
  );
  return questions;
};
