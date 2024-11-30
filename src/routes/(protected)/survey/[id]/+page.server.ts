import * as db from '$lib/database';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const questions = await db.getQuestions(params.id);
  return { questions };
}) satisfies PageServerLoad;
