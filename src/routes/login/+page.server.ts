import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { generateAccount, jwt, setCookie } from '$lib/authentication';

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get('survetify-session');
  const guest = cookies.get('survetify-usr');
  const expired = cookies.get('survetify-expired');

  if (!token || !guest) {
    if (expired === 'true') {
      return { message: 'Please Login Again!' };
    }
    redirect(302, '/login');
  }

  if (!token || !guest) return {};

  redirect(302, '/');
};

export const actions = {
  default: async ({ cookies }) => {
    const guest = generateAccount();
    const token = jwt.sign(guest);

    setCookie('survetify-usr', JSON.stringify(guest), cookies);
    setCookie('survetify-session', token, cookies);

    redirect(302, '/');
  }
} satisfies Actions;
