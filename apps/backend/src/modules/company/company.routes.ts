import type { FastifyInstance } from 'fastify';
import { env } from '../../config/env.js';
import { company } from '../../db/seed.js';
import { ok } from '../../lib/http.js';

export async function companyRoutes(app: FastifyInstance) {
  app.get('/company/contact', async (_, reply) => {
    return ok(reply, {
      ...company,
      telegram: env.TELEGRAM_HANDLE,
    });
  });

  app.get('/market/activity', async (_, reply) => {
    return ok(reply, {
      volumeUsd24h: 1240000,
      dealsCount: 18,
      activeBuyers: 41,
      escrowProtectedEur: 3800000,
    });
  });
}
