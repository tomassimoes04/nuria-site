export { renderers } from '../../renderers.mjs';

const CLIENT_ID = "Ov23lirKAq2T1w8kgZho";
const CLIENT_SECRET = "8d757355858c4d33ed3985b1ad28385e86213866";
const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response("Missing code parameter", { status: 400 });
  }
  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code
      })
    });
    const tokenData = await tokenResponse.json();
    if (tokenData.error) {
      return new Response(`OAuth error: ${tokenData.error_description}`, { status: 400 });
    }
    const content = {
      token: tokenData.access_token,
      provider: "github"
    };
    const script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify(content)}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      <\/script>
    `;
    return new Response(script, {
      headers: { "Content-Type": "text/html" }
    });
  } catch (error) {
    console.error("OAuth callback error:", error);
    return new Response("Authentication failed", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
