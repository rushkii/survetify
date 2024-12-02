import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
import { sequence } from '@sveltejs/kit/hooks';
import { sessions } from '$auth';
import { errorMessage } from '$stores';
import { jwt } from '$server';

type EventType = RequestEvent<Partial<Record<string, string>>, string | null>;

const setUserLocals = (token: string, event: EventType) => {
  const user = jwt.verifyToken(token);
  event.locals.user = user;
};

const auth = (async ({ event, resolve }) => {
  const token = sessions.get(event.cookies);

  if (event.route.id?.startsWith('/(protected)')) {
    errorMessage.set(null);
    if (!token) {
      redirect(302, '/login');
    }
    if (!jwt.verifyToken(token)) {
      errorMessage.set('You need to login again.');
      redirect(302, '/login');
    }
    setUserLocals(token, event);
  } else if (event.url.pathname === '/login') {
    if (!token) {
      errorMessage.set(null);
      return await resolve(event);
    }
    if (jwt.verifyToken(token)) {
      errorMessage.set(null);
      setUserLocals(token, event);
      redirect(302, '/');
    }
  }

  return await resolve(event);
}) satisfies Handle;

export const handle = sequence(i18n.handle(), auth) satisfies Handle;
