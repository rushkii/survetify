import { get } from 'svelte/store';
import type { LayoutServerLoad } from './$types';
import { errorMessage } from '$stores';

export const load = (async ({ locals }) => {
  return {
    user: locals.user,
    errorMessage: get(errorMessage)
  };
}) satisfies LayoutServerLoad;
