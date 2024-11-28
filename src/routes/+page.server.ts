import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { jwt, setCookie } from '$lib/authentication';
import type { JwtPayload } from 'jsonwebtoken';
import { db } from '$lib';

export const load = (async ({ cookies }) => {
  const token = cookies.get('survetify-session');
  if (!token) redirect(302, '/login');

  const user = jwt.verify(token) as JwtPayload;
  if (!user) return redirect(302, '/login');

  const expiresIn = 15 * 60 * 1000; // 15min
  const now = Math.floor(Date.now() / 1000);

  if (user.exp && user.exp - now < expiresIn / 1000) {
    const refreshedToken = jwt.sign(user);
    setCookie('survetify-session', refreshedToken, cookies);
  }

  const survey = await db.getSurveyList();

  return { survey };
}) satisfies PageServerLoad;
