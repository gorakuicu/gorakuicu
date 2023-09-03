/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/__tests__/**", "**/*.{test,spec,e2e,snapshot}.*", "**/*.stories.*"],
  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  tailwind: true,
  postcss: true,
  serverMinify: true,
  watchPaths: ["app", "package.json", "tailwind.config.js", "postcss.config.js", "remix.config.js", "tsconfig.json"],
};
