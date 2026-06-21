FROM node:20-alpine AS base
WORKDIR /app
COPY package.json tsconfig.base.json ./
COPY apps/backend/package.json ./apps/backend/package.json
RUN npm install
COPY apps/backend ./apps/backend
WORKDIR /app/apps/backend
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/apps/backend/package.json ./apps/backend/package.json
COPY --from=base /app/apps/backend/dist ./apps/backend/dist
COPY apps/backend/.env.example ./apps/backend/.env
WORKDIR /app/apps/backend
EXPOSE 8080
CMD ["node", "dist/server.js"]
