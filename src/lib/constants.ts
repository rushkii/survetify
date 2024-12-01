import { dev } from '$app/environment';

export const SESSION_COOKIE_NAME = 'survetify-session';

export const COOKIE_OPTIONS = {
  path: '/',
  httpOnly: true,
  secure: !dev,
  sameSite: 'lax'
} satisfies import('cookie').CookieSerializeOptions & { path: string };
