import { db } from '$server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params }) => {
  const questions = await db.getQuestions(params.id);

  if (!questions || questions.length < 1) {
    return json({ data: null });
  }

  return json({ data: questions });
}) satisfies RequestHandler;
