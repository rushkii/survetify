import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { cookie, account, jwt } from '$auth';

export const actions = {
  default: async ({ cookies }) => {
    const guest = account.create();
    const token = jwt.createToken(guest);

    cookie.set(token, cookies);

    redirect(302, '/');
  }
} satisfies Actions;
