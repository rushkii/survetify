import type { PageServerLoad } from './$types';
import * as db from '$lib/database';

export const load = (async () => {
  const survey = await db.getSurveyList();
  return { survey };
}) satisfies PageServerLoad;
