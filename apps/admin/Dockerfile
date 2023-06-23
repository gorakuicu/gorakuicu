FROM node:18.16.0-alpine3.17 AS base
ARG PNPM_VERSION
WORKDIR /app
ENV PNPM_HOME=/.pnpm-store PATH=:/.pnpm-store:/.pnpm-store/bin:/.pnpm-store/global/5:$PATH NODE_ENV=production FORCE_COLOR=1 CI=1
RUN npm config set cache /usr/src/app/.npm && \
  npm --global cache verify && \
  npm install -g npm && \
  npm cache clean --force
RUN npm install --global pnpm@${PNPM_VERSION} && pnpm config set store-dir /.pnpm-store

FROM base AS builder
WORKDIR /app
COPY . .
RUN pnpm add -g turbo@1.10.5
RUN --mount=type=cache,id=turbo_prune_cms,target=/app/.turbo \
  turbo prune --scope=admin --docker --no-update-notifier

FROM base AS installer
WORKDIR /app
COPY tsconfig.json turbo.json .env package.json pnpm-lock.yaml ./
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/scripts/ci/is.js ./scripts/ci/is.js
RUN --mount=type=cache,id=pnpm_deps,target=/.pnpm-store \
  pnpm install --frozen-lockfile --prod
COPY --from=builder /app/out/full/ .
RUN --mount=type=cache,id=turbo_build,target=/app/.turbo \
  pnpm build --filter=admin... --no-update-notifier
COPY --from=builder /app/scripts/ci/node_prune.sh ./scripts/ci/node_prune.sh
RUN chmod +x /app/scripts/ci/node_prune.sh && \
  /app/scripts/ci/node_prune.sh && node-prune && \
  rm -rf /.pnpm-store || true

FROM node:18.16.0-alpine3.17 as production_runner
ARG PNPM_VERSION
WORKDIR /app
ENV PNPM_HOME=/.pnpm-store PATH=:/.pnpm-store:/.pnpm-store/bin:/.pnpm-store/global/5:$PATH NODE_ENV=production FORCE_COLOR=1 CI=1
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nodejs && \
  npm install --global pnpm@${PNPM_VERSION} && npm cache clean --force
COPY --from=installer /app .
RUN chown -R nodejs:nodejs /app && chmod -R 700 /app/node_modules
ENV PATH=/app/node_modules/.bin:$PATH
USER nodejs

CMD ["pm2-runtime", "start", "--", "pnpm", "start", "--filter=admin..."]
