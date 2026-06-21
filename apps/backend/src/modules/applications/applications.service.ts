import type { z } from 'zod';
import type { createApplicationSchema } from './applications.schemas.js';

export class ApplicationsService {
  private readonly records: Array<z.infer<typeof createApplicationSchema> & { id: string; createdAt: string }> = [];

  create(payload: z.infer<typeof createApplicationSchema>) {
    const record = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload,
    };

    this.records.push(record);
    return record;
  }

  list() {
    return this.records;
  }
}
