import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ locals }) => {
  return json({ data: locals.user });
}) satisfies RequestHandler;
