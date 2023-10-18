import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const url = 'https://diseno-de-software.pockethost.io/'
// const client = new PocketBase(url)

// export default client;
export const handle: Handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(url);
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get("cookie") || ""
  )

  if (event.locals.pb.authStore.isValid) {
    event.locals.user = event.locals.pb.authStore.model;
  }

  const response = await resolve(event);

  response.headers.set(
    "set-cookie",
    event.locals.pb.authStore.exportToCookie({
      // httpOnly: true
      secure: false
    })
  )

  return response;
}