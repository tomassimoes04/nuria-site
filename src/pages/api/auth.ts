import type { APIRoute } from 'astro';

const CLIENT_ID = 'Ov23lirKAq2T1w8kgZho';
const REDIRECT_URI = 'https://nuria-site.vercel.app/api/callback';

export const prerender = false;

export const GET: APIRoute = async () => {
  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', CLIENT_ID);
  authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.set('scope', 'repo user');
  authUrl.searchParams.set('state', crypto.randomUUID());

  return Response.redirect(authUrl.toString(), 302);
};
