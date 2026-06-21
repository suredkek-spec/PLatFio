import { motion } from 'framer-motion';
import { useAppRouter } from '../../store/appRouter';

export function AboutView() {
  const navigateWithinTab = useAppRouter((state) => state.navigateWithinTab);

  return (
    <div className="stack-32">
      <section className="glass-panel stack-24">
        <p className="eyebrow">О нас</p>
        <h1 className="section-title small">Boutique web design studio и marketplace для продажи digital assets.</h1>
        <p className="section-copy">
          Мы создаём и продаём сайты с премиальным визуальным уровнем и бизнес-логикой, понятной покупателю.
          Наша задача — не просто сделать красиво, а превратить сайт в актив: с доверием, трафиком, аналитикой,
          сильной архитектурой предложения и безопасной сделкой.
        </p>
      </section>

      <section className="feature-grid">
        <motion.article className="glass-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h3>Strategy</h3>
          <p>Аудит рынка, позиционирование, логика монетизации и упаковка ценности для будущего покупателя.</p>
          <button className="inline-link" type="button" onClick={() => navigateWithinTab('/about/process')}>Смотреть процесс</button>
        </motion.article>
        <motion.article className="glass-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <h3>Design</h3>
          <p>Ultra-minimalist premium UI, motion design и сильная система доверия для high-ticket digital offers.</p>
          <button className="inline-link" type="button" onClick={() => navigateWithinTab('/about/services')}>Наши сервисы</button>
        </motion.article>
        <motion.article className="glass-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          <h3>Transaction</h3>
          <p>Escrow-подход, due diligence и сопровождение передачи домена, кода, аналитики и доступов.</p>
          <button className="inline-link" type="button" onClick={() => navigateWithinTab('/contacts/apply')}>Обсудить проект</button>
        </motion.article>
      </section>
    </div>
  );
}
