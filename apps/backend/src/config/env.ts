import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(8080),
  HOST: z.string().default('0.0.0.0'),
  APP_ORIGIN: z.string().url().default('http://localhost:5173'),
  TELEGRAM_HANDLE: z.string().default('@platfio'),
  ESCROW_WALLET_USDC: z.string().default('0xPLATFIOUSDC'),
  ESCROW_WALLET_USDT: z.string().default('0xPLATFIOUSDT'),
  DATABASE_URL: z.string().default('postgresql://platfio:platfio@localhost:5432/platfio'),
  REDIS_URL: z.string().default('redis://localhost:6379'),
  STRIPE_SECRET_KEY: z.string().default('sk_test_placeholder'),
  GA4_PROPERTY_ID: z.string().default('123456789'),
});

export const env = envSchema.parse(process.env);
