import toast from 'svelte-5-french-toast';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async ({ data }) => {
  if (data.errorMessage) toast(data.errorMessage, { icon: 'ℹ️' });
  return { data };
};
