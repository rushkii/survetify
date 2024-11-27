import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '$env/static/private';
import type { User } from '$types';
import { setCookie } from '$lib/authentication/cookies';

export const load = (async ({ cookies }) => {
  const token = cookies.get('survetify-session');

  if (!token) throw redirect(302, '/login');

  const user = jwt.verify(token, JWT_SECRET_KEY) as User;

  const expiresIn = 15 * 60 * 1000;
  const now = Math.floor(Date.now() / 1000);

  console.log(user);

  if (user.exp && user.exp - now < expiresIn / 1000) {
    const refreshedToken = jwt.sign(user, JWT_SECRET_KEY, {
      expiresIn: '1h'
    });

    setCookie('survetify-session', refreshedToken, cookies);
  }

  return { user };
}) satisfies LayoutServerLoad;
