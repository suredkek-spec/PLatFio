import type { FastifyReply } from 'fastify';

export const ok = <T>(reply: FastifyReply, data: T, meta?: Record<string, unknown>) => {
  return reply.send({
    success: true,
    data,
    meta: meta ?? null,
  });
};
