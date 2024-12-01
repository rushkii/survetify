import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { sessions, account, jwt } from '$auth';

export const actions = {
  default: async ({ cookies }) => {
    const guest = account.create();
    const token = jwt.createToken(guest);

    sessions.set(token, cookies);

    redirect(302, '/');
  }
} satisfies Actions;
