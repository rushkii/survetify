import type { PageServerLoad } from './$types';
import { db } from '$server';

export const load = (async () => {
  const survey = await db.getSurveyList();
  return { survey };
}) satisfies PageServerLoad;
