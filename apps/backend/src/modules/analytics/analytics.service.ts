import { env } from '../../config/env.js';
import { assets } from '../../db/seed.js';

export class AnalyticsService {
  list() {
    return assets.map((asset) => ({
      slug: asset.slug,
      ga4PropertyId: env.GA4_PROPERTY_ID,
      ga4Sessions: asset.ga4Sessions,
      stripeGrossRevenueEur: asset.stripeGrossRevenueEur,
      monthlyRevenueEur: asset.monthlyRevenueEur,
      roiMonths: asset.roiMonths,
    }));
  }

  getBySlug(slug: string) {
    return this.list().find((asset) => asset.slug === slug) ?? null;
  }
}
