import type { FastifyInstance } from 'fastify';
import { ok } from '../../lib/http.js';
import { createApplicationSchema } from './applications.schemas.js';
import { ApplicationsService } from './applications.service.js';

const service = new ApplicationsService();

export async function applicationRoutes(app: FastifyInstance) {
  app.get('/applications', async (_, reply) => ok(reply, service.list()));

  app.post('/applications', async (request, reply) => {
    const payload = createApplicationSchema.parse(request.body);
    return ok(reply, service.create(payload));
  });
}
