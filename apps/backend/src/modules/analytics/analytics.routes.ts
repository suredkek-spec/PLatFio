import type { FastifyInstance } from 'fastify';
import { ok } from '../../lib/http.js';
import { assetSlugSchema } from '../assets/assets.schemas.js';
import { AnalyticsService } from './analytics.service.js';

const service = new AnalyticsService();

export async function analyticsRoutes(app: FastifyInstance) {
  app.get('/analytics/assets', async (_, reply) => ok(reply, service.list()));

  app.get('/analytics/assets/:slug', async (request, reply) => {
    const { slug } = assetSlugSchema.parse(request.params);
    const analytics = service.getBySlug(slug);

    if (!analytics) {
      return reply.notFound('Analytics not found');
    }

    return ok(reply, analytics);
  });
}
