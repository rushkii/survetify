import type { Survey } from '$types';
import { pool } from './connection';

export const getSurveyList = async (): Promise<Survey[]> => {
  const { rows: survey } = await pool.query('SELECT id,name,description FROM t_survey;');
  return survey;
};
