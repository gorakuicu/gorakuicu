/** @type {import('@remix-pwa/dev').WorkerConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/__tests__/**", "**/*.{test,spec,e2e,snapshot}.*", "**/*.stories.*"],
  serverModuleFormat: "cjs",
  tailwind: true,
  postcss: true,
  serverMinify: true,
  watchPaths: ["app", "package.json", "tailwind.config.js", "postcss.config.js", "remix.config.js", "tsconfig.json"],
  serverDependenciesToBundle: ["@remix-pwa/sw", "@remix-pwa/push"]
};
