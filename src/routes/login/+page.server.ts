import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { sessions, account } from '$auth';
import { jwt } from '$server';

export const actions = {
  default: async ({ cookies }) => {
    const guest = account.create();
    const token = jwt.createToken(guest);

    sessions.set(token, cookies);

    redirect(302, '/');
  }
} satisfies Actions;
