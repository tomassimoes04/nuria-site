import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_Djsg9o2e.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_COB1XA9u.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/tomassimoes/nuria-site/","cacheDir":"file:///Users/tomassimoes/nuria-site/node_modules/.astro/","outDir":"file:///Users/tomassimoes/nuria-site/dist/","srcDir":"file:///Users/tomassimoes/nuria-site/src/","publicDir":"file:///Users/tomassimoes/nuria-site/public/","buildClientDir":"file:///Users/tomassimoes/nuria-site/dist/client/","buildServerDir":"file:///Users/tomassimoes/nuria-site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth.ts","pathname":"/api/auth","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/callback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/callback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/callback.ts","pathname":"/api/callback","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/tomassimoes/nuria-site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/auth@_@ts":"pages/api/auth.astro.mjs","\u0000@astro-page:src/pages/api/callback@_@ts":"pages/api/callback.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DpXpUwSR.mjs","/Users/tomassimoes/nuria-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CIB8TUhT.mjs","/Users/tomassimoes/nuria-site/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CxUY4l0h.js","/Users/tomassimoes/nuria-site/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.CGWF6fpY.js","/Users/tomassimoes/nuria-site/src/components/CouponCard.astro?astro&type=script&index=0&lang.ts":"_astro/CouponCard.astro_astro_type_script_index_0_lang.CK5MPMlW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/tomassimoes/nuria-site/src/pages/index.astro?astro&type=script&index=0&lang.ts","const a=document.querySelectorAll(\".pokemon-filter\"),c=document.querySelectorAll(\".pokemon-item\");a.forEach(e=>{e.addEventListener(\"click\",()=>{const s=e.getAttribute(\"data-filter\");a.forEach(t=>{t.classList.remove(\"bg-gray-900\",\"text-white\",\"active\"),t.classList.add(\"bg-gray-100\",\"text-gray-600\")}),e.classList.remove(\"bg-gray-100\",\"text-gray-600\"),e.classList.add(\"bg-gray-900\",\"text-white\",\"active\"),c.forEach(t=>{const r=t.getAttribute(\"data-status\");s===\"all\"||r===s?t.classList.remove(\"hidden\"):t.classList.add(\"hidden\")})})});"],["/Users/tomassimoes/nuria-site/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","const i=document.querySelectorAll(\".tab-btn\"),o=document.querySelectorAll(\".tab-section\");function a(e){i.forEach(t=>{const s=t.getAttribute(\"data-tab\")===e;t.classList.toggle(\"bg-gray-900\",s),t.classList.toggle(\"text-white\",s),t.classList.toggle(\"shadow-lg\",s),t.classList.toggle(\"text-gray-600\",!s),t.classList.toggle(\"hover:bg-gray-100\",!s)}),o.forEach(t=>{t.getAttribute(\"data-section\")===e?(t.classList.remove(\"hidden\"),t.classList.add(\"animate-fadeIn\")):(t.classList.add(\"hidden\"),t.classList.remove(\"animate-fadeIn\"))}),history.replaceState(null,\"\",`#${e}`)}i.forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.getAttribute(\"data-tab\");t&&a(t)})});const c=window.location.hash.slice(1)||\"sobre\";a(c);window.addEventListener(\"hashchange\",()=>{const e=window.location.hash.slice(1)||\"sobre\";a(e)});"],["/Users/tomassimoes/nuria-site/src/components/CouponCard.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".coupon-copy-btn\").forEach(e=>{e.addEventListener(\"click\",async()=>{const c=e.getAttribute(\"data-code\");if(c)try{await navigator.clipboard.writeText(c);const o=e.querySelector(\".copy-icon\"),t=e.querySelector(\".check-icon\"),r=e.querySelector(\".coupon-code\");o&&t&&r&&(o.classList.add(\"hidden\"),t.classList.remove(\"hidden\"),r.textContent=\"Copiado!\",setTimeout(()=>{o.classList.remove(\"hidden\"),t.classList.add(\"hidden\"),r.textContent=c},2e3))}catch(o){console.error(\"Erro ao copiar:\",o)}})});"]],"assets":["/_astro/index.Csuwyeie.css","/favicon.svg","/admin/config.yml","/admin/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"GtskZVdquAQNDj++oMfvvehhUpxDIAcQVAfSd0Eo1oc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
