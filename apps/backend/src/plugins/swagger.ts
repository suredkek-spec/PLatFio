import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import type { FastifyInstance } from 'fastify';

export async function registerSwagger(app: FastifyInstance) {
  await app.register(swagger, {
    openapi: {
      info: {
        title: 'PLatFio API',
        version: '1.0.0',
        description: 'Premium marketplace API for digital assets, analytics, applications and escrow.',
      },
    },
  });

  await app.register(swaggerUi, {
    routePrefix: '/docs',
  });
}
