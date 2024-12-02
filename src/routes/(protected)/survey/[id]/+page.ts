import type { Question } from '$types';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { toast } from 'svelte-5-french-toast';

export const load = (async ({ params, fetch }) => {
  const res = await fetch('/api/survey/' + params.id);
  const { data: questions }: { data: Question[] } = await res.json();

  console.log(!questions, questions);

  if (!questions) {
    toast.error('Survey is not exist');
    redirect(302, '/');
  }

  return { questions };
}) satisfies PageLoad;
