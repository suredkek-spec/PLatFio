import Fastify from 'fastify';
import { env } from './config/env.js';
import { analyticsRoutes } from './modules/analytics/analytics.routes.js';
import { applicationRoutes } from './modules/applications/applications.routes.js';
import { assetRoutes } from './modules/assets/assets.routes.js';
import { checkoutRoutes } from './modules/checkout/checkout.routes.js';
import { companyRoutes } from './modules/company/company.routes.js';
import { registerCore } from './plugins/registerCore.js';
import { registerSwagger } from './plugins/swagger.js';

export async function buildApp() {
  const app = Fastify({
    logger: env.NODE_ENV === 'development'
      ? {
          transport: {
            target: 'pino-pretty',
          },
        }
      : true,
  });

  app.get('/health', async () => ({ success: true, status: 'ok' }));

  await registerCore(app);
  await registerSwagger(app);

  await app.register(assetRoutes, { prefix: '/api' });
  await app.register(analyticsRoutes, { prefix: '/api' });
  await app.register(applicationRoutes, { prefix: '/api' });
  await app.register(checkoutRoutes, { prefix: '/api' });
  await app.register(companyRoutes, { prefix: '/api' });

  return app;
}
