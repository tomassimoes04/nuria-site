export { renderers } from '../../renderers.mjs';

const CLIENT_ID = "Ov23lirKAq2T1w8kgZho";
const REDIRECT_URI = "https://nuria-site.vercel.app/api/callback";
const prerender = false;
const GET = async () => {
  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  authUrl.searchParams.set("scope", "repo user");
  authUrl.searchParams.set("state", crypto.randomUUID());
  return Response.redirect(authUrl.toString(), 302);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
