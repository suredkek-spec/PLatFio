import { z } from 'zod';

export const createEscrowIntentSchema = z.object({
  assetSlug: z.string().min(1),
  currency: z.enum(['EUR', 'USDC', 'USDT']),
  buyerEmail: z.string().email(),
  amount: z.coerce.number().positive(),
});
