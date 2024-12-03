import { transform } from '$lib/utils';
import type { Question } from '$types';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const res = await fetch('/api/survey/' + params.id);
  const { data: questions }: { data: Question[] | null } = await res.json();

  if (!questions) return { questions };

  const transformed = await transform.question(questions);

  return { questions: transformed };
}) satisfies PageServerLoad;
