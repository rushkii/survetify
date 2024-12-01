import * as db from '$lib/database';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ params }) => {
  const questions = await db.getQuestions(params.id);

  if (!questions) redirect(302, '/');

  return { questions };
}) satisfies PageServerLoad;
