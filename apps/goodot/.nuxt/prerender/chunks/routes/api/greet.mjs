import { defineEventHandler, getQuery } from 'file:///home/debian/goodot/nuxt/goodot/node_modules/h3/dist/index.mjs';

const greet = defineEventHandler((event) => {
  const q = getQuery(event);
  const projectName = q.name || "World";
  return {
    message: `Hello ${projectName}`
  };
});

export { greet as default };
//# sourceMappingURL=greet.mjs.map
