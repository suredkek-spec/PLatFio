import { motion } from 'framer-motion';
import { assets } from '../../data/content';
import { useAppRouter } from '../../store/appRouter';

export function AssetDetail() {
  const slug = useAppRouter((state) => state.selectedAssetSlug);
  const navigateWithinTab = useAppRouter((state) => state.navigateWithinTab);
  const asset = assets.find((item) => item.slug === slug) ?? assets[0];

  return (
    <motion.section
      className="glass-panel asset-detail"
      layoutId={`asset-card-${asset.slug}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 140, damping: 20 }}
    >
      <div className="asset-detail-grid">
        <div className="stack-24">
          <span className="pill">{asset.niche}</span>
          <div>
            <h1 className="section-title small">{asset.title}</h1>
            <p className="section-copy">{asset.description}</p>
          </div>

          <div className="detail-highlights">
            {asset.highlights.map((highlight) => (
              <div key={highlight} className="highlight-row">{highlight}</div>
            ))}
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="metric-card large">
            <span>Asking price</span>
            <strong>€{asset.priceEur.toLocaleString('en-US')}</strong>
          </div>
          <div className="metric-card large">
            <span>Monthly revenue</span>
            <strong>€{asset.monthlyRevenueEur.toLocaleString('en-US')}</strong>
          </div>
          <div className="metric-card large">
            <span>Traffic / month</span>
            <strong>{asset.monthlyTraffic.toLocaleString('en-US')}</strong>
          </div>

          <div className="button-row">
            <button className="gold-button" type="button" onClick={() => navigateWithinTab('/checkout')}>
              Перейти к Escrow Checkout
            </button>
            <button className="ghost-button" type="button" onClick={() => navigateWithinTab('/analytics')}>
              Смотреть аналитику
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
