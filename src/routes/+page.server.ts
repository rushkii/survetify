import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { delCookie, jwt, setCookie } from '$lib/authentication';
import type { JwtPayload } from 'jsonwebtoken';
import * as db from '$lib/database';

export const load = (async ({ cookies }) => {
  const token = cookies.get('survetify-session');
  const guest = cookies.get('survetify-usr');

  if (!token || !guest) redirect(302, '/login');

  try {
    jwt.verify(token) as JwtPayload;

    const survey = await db.getSurveyList();

    return { survey };
  } catch {
    delCookie('survetify-session', cookies);
    setCookie('survetify-expired', 'true', cookies);
    redirect(302, '/login');
  }
}) satisfies PageServerLoad;
