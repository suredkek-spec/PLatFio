import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { ArrowRight, BadgeEuro, ChartNoAxesCombined, ShieldCheck } from 'lucide-react';
import { assets, differentiators, marketActivity, phonePreviews, services } from '../../data/content';
import { fadeUp, staggerParent } from '../../components/MotionPrimitives';
import { useAppRouter } from '../../store/appRouter';

export function HomeDashboard() {
  const navigateWithinTab = useAppRouter((state) => state.navigateWithinTab);
  const selectedAssetSlug = useAppRouter((state) => state.selectedAssetSlug);
  const selectedAsset = assets.find((asset) => asset.slug === selectedAssetSlug) ?? assets[0];

  return (
    <div className="stack-32">
      <div className="mobile-brand-plaque glass-panel">
        <div className="mobile-brand-lockup">
          <div className="mobile-brand-mark">PL</div>
          <div>
            <p className="eyebrow">PlatFio</p>
            <h3>Премиальный сайт для продажи веб-сайтов и безопасных digital asset.</h3>
          </div>
        </div>
      </div>

      <motion.section className="hero-grid glass-panel" variants={staggerParent} initial="initial" animate="animate">
        <motion.div variants={fadeUp}>
          <p className="eyebrow">Главная</p>
          <h1 className="section-title">Продажа веб-сайтов, web design и digital assets с уровнем quiet luxury.</h1>
          <p className="section-copy">
            PLatFio — это премиальный сайт-витрина и студия упаковки цифровых активов. Мы проектируем, редизайним
            и продаём сайты так, чтобы они выглядели как брендовый продукт и воспринимались как понятный актив с ROI.
          </p>

          <div className="hero-actions compact-top">
            <button className="gold-button" type="button" onClick={() => navigateWithinTab('/catalog')}>
              Смотреть каталог сайтов <ArrowRight size={18} />
            </button>
            <button className="ghost-button" type="button" onClick={() => navigateWithinTab('/contacts/apply')}>
              Обсудить проект
            </button>
          </div>
        </motion.div>

        <motion.div className="stats-grid" variants={fadeUp}>
          <article className="metric-card">
            <span>Объём за 24 часа</span>
            <strong>${marketActivity.volumeUsd.toLocaleString('en-US')}</strong>
          </article>
          <article className="metric-card">
            <span>Защищено через escrow</span>
            <strong>{marketActivity.escrowProtected}</strong>
          </article>
          <article className="metric-card">
            <span>Активные покупатели</span>
            <strong>{marketActivity.activeBuyers}</strong>
          </article>
        </motion.div>
      </motion.section>

      <section className="services-layout">
        <motion.div className="glass-panel stack-24" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div>
            <p className="eyebrow">Что мы можем для вас сделать</p>
            <h2 className="section-title small">От премиального дизайна до безопасной продажи цифрового актива.</h2>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 130, damping: 18 }}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div className="glass-panel phone-stage" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }}>
          <div className="phone-shell">
            <div className="phone-notch" />
            <LayoutGroup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAsset.slug}
                  className="phone-card"
                  layoutId={`asset-card-${selectedAsset.slug}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ type: 'spring', stiffness: 130, damping: 18 }}
                >
                  <p className="phone-copy">Анимированное превью</p>
                  <strong>{selectedAsset.title}</strong>
                  <span>{selectedAsset.preview}</span>
                </motion.div>
              </AnimatePresence>
            </LayoutGroup>

            <div className="phone-ticker">
              {phonePreviews.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="glass-panel stack-24">
        <div>
          <p className="eyebrow">Почему PLatFio</p>
          <h2 className="section-title small">Сайт, дизайн и сделка строятся как единая premium-система.</h2>
        </div>

        <div className="differentiators-grid">
          {differentiators.map((item, index) => (
            <motion.article
              key={item}
              className="feature-tile"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 120, damping: 18 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section className="glass-panel feature-grid" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <article>
          <ShieldCheck size={18} />
          <h3>Безопасная сделка</h3>
          <p>Холдируем EUR и USDC/USDT до полной перерегистрации домена, доступов и исходного кода.</p>
          <button className="inline-link" type="button" onClick={() => navigateWithinTab('/checkout')}>
            Открыть secure flow <ArrowRight size={16} />
          </button>
        </article>
        <article>
          <ChartNoAxesCombined size={18} />
          <h3>Аналитика активов</h3>
          <p>Показываем revenue, traffic и unit-economics, чтобы покупатель видел реальную стоимость актива.</p>
          <button className="inline-link" type="button" onClick={() => navigateWithinTab('/analytics')}>
            Смотреть аналитику <ArrowRight size={16} />
          </button>
        </article>
        <article>
          <BadgeEuro size={18} />
          <h3>Каталог и ROI</h3>
          <p>Фильтруйте активы по нише, цене, трафику и сроку окупаемости под ваш инвестиционный профиль.</p>
          <button className="inline-link" type="button" onClick={() => navigateWithinTab('/catalog')}>
            Перейти в каталог <ArrowRight size={16} />
          </button>
        </article>
      </motion.section>
    </div>
  );
}
