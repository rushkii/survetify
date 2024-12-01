import { COOKIE_OPTIONS, SESSION_COOKIE_NAME } from '$lib/constants';
import type { Cookies } from '@sveltejs/kit';

export const get = (cookies: Cookies) => {
  const cookie = cookies.get(SESSION_COOKIE_NAME);
  if (!cookie) return null;
  return cookie;
};

export const set = (value: string, cookies: Cookies) => {
  cookies.set(SESSION_COOKIE_NAME, value, COOKIE_OPTIONS);
};

export const del = (cookies: Cookies) => {
  cookies.delete(SESSION_COOKIE_NAME, COOKIE_OPTIONS);
};
