import { env } from '../../config/env.js';
import type { z } from 'zod';
import type { createEscrowIntentSchema } from './checkout.schemas.js';

export class CheckoutService {
  createIntent(payload: z.infer<typeof createEscrowIntentSchema>) {
    const settlementAddress = payload.currency === 'USDT' ? env.ESCROW_WALLET_USDT : env.ESCROW_WALLET_USDC;

    return {
      id: crypto.randomUUID(),
      status: 'held',
      assetSlug: payload.assetSlug,
      currency: payload.currency,
      amount: payload.amount,
      buyerEmail: payload.buyerEmail,
      settlementAddress: payload.currency === 'EUR' ? 'Bank wire instructions issued separately' : settlementAddress,
      nextStep: 'Transfer domain, repository and analytics access before release.',
    };
  }
}
