import { assets } from '../../db/seed.js';
import type { z } from 'zod';
import type { assetFilterSchema } from './assets.schemas.js';

export class AssetsService {
  list(filters: z.infer<typeof assetFilterSchema>) {
    return assets.filter((asset) => {
      const nichePass = !filters.niche || filters.niche === 'All' || asset.niche === filters.niche;
      const pricePass = filters.maxPrice === undefined || asset.priceEur <= filters.maxPrice;
      const trafficPass = filters.minTraffic === undefined || asset.monthlyTraffic >= filters.minTraffic;
      const roiPass = filters.maxRoi === undefined || asset.roiMonths <= filters.maxRoi;
      return nichePass && pricePass && trafficPass && roiPass;
    });
  }

  getBySlug(slug: string) {
    return assets.find((asset) => asset.slug === slug) ?? null;
  }
}
