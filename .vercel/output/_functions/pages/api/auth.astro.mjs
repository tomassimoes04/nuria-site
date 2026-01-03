export { renderers } from '../../renderers.mjs';

const CLIENT_ID = "Ov23lirKAq2T1w8kgZho";
const REDIRECT_URI = "https://nuria-site.vercel.app/api/callback";
const prerender = false;
const GET = async () => {
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=repo,user`;
  return new Response(null, {
    status: 302,
    headers: {
      "Location": authUrl
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
