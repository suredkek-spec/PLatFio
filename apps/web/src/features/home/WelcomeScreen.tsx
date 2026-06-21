import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { marketActivity } from '../../data/content';
import { useAppRouter } from '../../store/appRouter';

export function WelcomeScreen() {
  const navigateWithinTab = useAppRouter((state) => state.navigateWithinTab);

  return (
    <section className="welcome-screen glass-panel hero-grid">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="eyebrow">Curated website acquisitions</p>
        <h1 className="hero-title">
          Тихая роскошь
          <br />
          для цифровых активов.
        </h1>
        <p className="hero-text">
          PLatFio помогает покупать, продавать и проектировать сайты, которые выглядят как luxury-продукт,
          а работают как измеримый бизнес-актив.
        </p>

        <div className="hero-actions">
          <motion.button className="gold-button" whileTap={{ scale: 0.97 }} onClick={() => navigateWithinTab('/')}>
            Войти в платформу
            <ArrowRight size={18} />
          </motion.button>
          <button className="ghost-button" type="button" onClick={() => navigateWithinTab('/contacts/apply')}>
            Оставить заявку
          </button>
        </div>
      </motion.div>

      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div className="metric-orb" />
        <p>24/h Live Market Activity</p>
        <strong>${marketActivity.volumeUsd.toLocaleString('en-US')}</strong>
        <span>{marketActivity.dealsCount} secured deals · {marketActivity.activeBuyers} active buyers</span>
      </motion.div>
    </section>
  );
}
