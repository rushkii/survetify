import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async ({ data }) => {
  return { data };
};
