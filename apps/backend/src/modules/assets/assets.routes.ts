import type { FastifyInstance } from 'fastify';
import { ok } from '../../lib/http.js';
import { assetFilterSchema, assetSlugSchema } from './assets.schemas.js';
import { AssetsService } from './assets.service.js';

const service = new AssetsService();

export async function assetRoutes(app: FastifyInstance) {
  app.get('/assets', async (request, reply) => {
    const filters = assetFilterSchema.parse(request.query);
    return ok(reply, service.list(filters));
  });

  app.get('/assets/:slug', async (request, reply) => {
    const { slug } = assetSlugSchema.parse(request.params);
    const asset = service.getBySlug(slug);

    if (!asset) {
      return reply.notFound('Asset not found');
    }

    return ok(reply, asset);
  });
}
