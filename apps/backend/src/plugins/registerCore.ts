import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import type { FastifyInstance } from 'fastify';
import { env } from '../config/env.js';

export async function registerCore(app: FastifyInstance) {
  await app.register(sensible);
  await app.register(cors, {
    origin: [env.APP_ORIGIN],
    credentials: true,
  });
}
