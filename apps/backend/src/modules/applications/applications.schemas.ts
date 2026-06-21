import { z } from 'zod';

export const createApplicationSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(5),
  brief: z.string().min(10),
});
