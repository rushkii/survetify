import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '$env/static/private';
import { generateAccount } from '$lib/authentication/account';
import { setCookie } from '$lib/authentication/cookies';

export const load: PageServerLoad = ({ cookies }) => {
  const token = cookies.get('survetify-session');

  if (token) throw redirect(302, '/');
};

export const actions = {
  default: async ({ cookies }) => {
    const guest = generateAccount();
    const token = jwt.sign(guest, JWT_SECRET_KEY, { expiresIn: '1h' });

    setCookie('survetify-session', token, cookies);

    throw redirect(302, '/');
  }
} satisfies Actions;
