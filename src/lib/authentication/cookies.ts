import { dev } from '$app/environment';
import { SESSION_COOKIE_NAME } from '$lib/constants';
import type { Cookies } from '@sveltejs/kit';

type CookieOptionType = import('cookie').CookieSerializeOptions & { path: string };

const COOKIE_OPTIONS = {
  path: '/',
  httpOnly: true,
  secure: !dev,
  sameSite: 'lax'
} satisfies CookieOptionType;

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
