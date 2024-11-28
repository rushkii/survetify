import * as db from '$lib/database';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const { id } = params;

  const questions = await db.getQuestions(id);

  return { questions };
}) satisfies PageServerLoad;
