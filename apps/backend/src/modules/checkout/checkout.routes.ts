import type { FastifyInstance } from 'fastify';
import { ok } from '../../lib/http.js';
import { createEscrowIntentSchema } from './checkout.schemas.js';
import { CheckoutService } from './checkout.service.js';

const service = new CheckoutService();

export async function checkoutRoutes(app: FastifyInstance) {
  app.post('/checkout/escrow-intents', async (request, reply) => {
    const payload = createEscrowIntentSchema.parse(request.body);
    return ok(reply, service.createIntent(payload));
  });
}
