import type { PageLoad } from './$types';
import type { Survey } from '$types';

export const load = (async ({ fetch }) => {
  const res = await fetch('/api/survey');
  const { data: survey }: { data: Survey[] } = await res.json();

  return { survey };
}) satisfies PageLoad;
