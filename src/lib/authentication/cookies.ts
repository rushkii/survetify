import type { Cookies } from '@sveltejs/kit';

export const setCookie = (name: string, value: string, cookies: Cookies) => {
  cookies.set(name, value, { path: '/', httpOnly: true, secure: true, sameSite: 'lax' });
  return true;
};
