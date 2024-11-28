import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { jwt, setCookie } from '$lib/authentication';
import { generateAccount } from '$lib/authentication/account';

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get('survetify-session');
  if (!token) return {};

  const user = jwt.verify(token);
  if (!user) return;

  redirect(302, '/');
};

export const actions = {
  default: async ({ cookies }) => {
    const guest = generateAccount();
    const token = jwt.sign(guest);

    setCookie('survetify-session', token, cookies);

    redirect(302, '/');
  }
} satisfies Actions;
