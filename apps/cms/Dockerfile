FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat git python3 && apk update
# RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN npm install -g pnpm@8.5.1
RUN --mount=type=cache,id=pnpm,target=/root/.pnpm-store
RUN [ -d /root/.pnpm-store ] || mkdir -p /root/.pnpm-store
ENV PNPM_HOME=/root/.pnpm-store PATH=${PATH}:/root/.pnpm-store:/root/.pnpm-store/bin CI=1
RUN chmod -R 777 /root/.pnpm-store
RUN pnpm config set store-dir /root/.pnpm-store

FROM base AS builder
WORKDIR /app
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=cms --docker

FROM base AS installer
WORKDIR /app
COPY .gitignore tsconfig.json turbo.json .env.local package.json pnpm-lock.yaml ecosystem.config.js ./
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/scripts/ci/is.js ./scripts/ci/is.js
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY --from=builder /app/out/full/ .
ENV NODE_ENV=production
RUN pnpm build --filter=cms...

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
COPY --from=installer --chown=nodejs:nodejs /app .
ENV PATH=/app/node_modules/.bin:$PATH
USER nodejs

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
