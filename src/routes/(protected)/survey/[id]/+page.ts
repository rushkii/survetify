import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { toast } from 'svelte-5-french-toast';

export const load = (async ({ data }) => {
  const { questions } = data;

  if (!questions) {
    toast.error('Survey is not exist');
    redirect(302, '/');
  }

  return { questions };
}) satisfies PageLoad;
