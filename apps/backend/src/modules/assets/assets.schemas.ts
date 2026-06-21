import { z } from 'zod';

export const assetFilterSchema = z.object({
  niche: z.string().optional(),
  maxPrice: z.coerce.number().optional(),
  minTraffic: z.coerce.number().optional(),
  maxRoi: z.coerce.number().optional(),
});

export const assetSlugSchema = z.object({
  slug: z.string().min(1),
});
