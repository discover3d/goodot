import { mergeProps, useSSRContext } from 'file:///home/debian/goodot/nuxt/goodot/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///home/debian/goodot/nuxt/goodot/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/h3/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/devalue/index.js';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/ufo/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/destr/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/hookable/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/klona/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/scule/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/defu/dist/defu.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/ohash/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/unstorage/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/pathe/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/unhead/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/unctx/dist/index.mjs';
import 'file:///home/debian/goodot/nuxt/goodot/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))}><h1>This is an about page.</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-ZxZgZibE.mjs.map
