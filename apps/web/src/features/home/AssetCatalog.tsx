import { LayoutGroup, motion } from 'framer-motion';
import { assets } from '../../data/content';
import { useAppRouter } from '../../store/appRouter';

const niches = ['All', 'E-commerce', 'SaaS', 'Luxury Services', 'Fintech'];

export function AssetCatalog() {
  const { filters, updateFilters, selectAsset, selectedAssetSlug } = useAppRouter();

  const filteredAssets = assets.filter((asset) => {
    const matchesNiche = filters.niche === 'All' || asset.niche === filters.niche;
    const matchesPrice = asset.priceEur <= filters.maxPrice;
    const matchesTraffic = asset.monthlyTraffic >= filters.minTraffic;
    const matchesRoi = asset.roiMonths <= filters.maxRoi;
    return matchesNiche && matchesPrice && matchesTraffic && matchesRoi;
  });

  return (
    <div className="stack-32">
      <section className="glass-panel stack-24">
        <div>
          <p className="eyebrow">Asset Catalog</p>
          <h1 className="section-title small">Кураторская библиотека сайтов и SaaS-платформ.</h1>
          <p className="section-copy">
            Фильтрация по нишам, цене, трафику и ROI. Карточка плавно раскрывается в detail-view через shared layout transition.
          </p>
        </div>

        <div className="filters-grid">
          <label>
            <span>Ниша</span>
            <select value={filters.niche} onChange={(event) => updateFilters({ niche: event.target.value })}>
              {niches.map((niche) => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Макс. цена (€)</span>
            <input type="range" min="100000" max="350000" step="5000" value={filters.maxPrice} onChange={(event) => updateFilters({ maxPrice: Number(event.target.value) })} />
            <strong>€{filters.maxPrice.toLocaleString('en-US')}</strong>
          </label>
          <label>
            <span>Мин. трафик / мес</span>
            <input type="range" min="0" max="100000" step="1000" value={filters.minTraffic} onChange={(event) => updateFilters({ minTraffic: Number(event.target.value) })} />
            <strong>{filters.minTraffic.toLocaleString('en-US')}</strong>
          </label>
          <label>
            <span>Макс. ROI (мес.)</span>
            <input type="range" min="6" max="18" step="1" value={filters.maxRoi} onChange={(event) => updateFilters({ maxRoi: Number(event.target.value) })} />
            <strong>{filters.maxRoi}</strong>
          </label>
        </div>
      </section>

      <LayoutGroup>
        <section className="catalog-grid">
          {filteredAssets.map((asset, index) => (
            <motion.article
              key={asset.id}
              layoutId={`asset-card-${asset.slug}`}
              className={`catalog-card glass-panel ${selectedAssetSlug === asset.slug ? 'selected' : ''}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, type: 'spring', stiffness: 120, damping: 18 }}
              onClick={() => selectAsset(asset.slug)}
            >
              <div className="catalog-head">
                <span className="pill">{asset.niche}</span>
                <span className="muted">{asset.growth}</span>
              </div>
              <h3>{asset.title}</h3>
              <p>{asset.description}</p>
              <div className="catalog-metrics">
                <div><span>Price</span><strong>€{asset.priceEur.toLocaleString('en-US')}</strong></div>
                <div><span>Traffic</span><strong>{asset.monthlyTraffic.toLocaleString('en-US')}</strong></div>
                <div><span>ROI</span><strong>{asset.roiMonths} мес.</strong></div>
              </div>
            </motion.article>
          ))}
        </section>
      </LayoutGroup>
    </div>
  );
}
