import type { APIRoute } from 'astro';

const CLIENT_ID = 'Ov23lirKAq2T1w8kgZho';
const REDIRECT_URI = 'https://nuria-site.vercel.app/api/callback';

export const prerender = false;

export const GET: APIRoute = async () => {
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=repo,user`;

  return new Response(null, {
    status: 302,
    headers: {
      'Location': authUrl
    }
  });
};
