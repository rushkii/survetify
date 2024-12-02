import { db } from '$server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async () => {
  const survey = await db.getSurveyList();

  return json({ data: survey });
}) satisfies RequestHandler;
