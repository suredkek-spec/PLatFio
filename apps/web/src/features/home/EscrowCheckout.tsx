import { motion } from 'framer-motion';

const escrowSteps = [
  'Резервирование актива и проверка покупателя',
  'Холдирование EUR / USDC / USDT в защищённом escrow',
  'Передача домена, исходного кода и доступа к аналитике',
  'Разблокировка средств после завершения передачи прав',
];

export function EscrowCheckout() {
  return (
    <section className="glass-panel stack-24">
      <div>
        <p className="eyebrow">Безопасная сделка</p>
        <h1 className="section-title small">Безопасная сделка с холдированием средств до полной передачи актива.</h1>
        <p className="section-copy">
          PLatFio поддерживает расчёты в EUR и стейблкоинах. Средства остаются в холде до переноса домена, репозитория,
          аналитики и платёжных доступов на покупателя.
        </p>
      </div>

      <div className="timeline-grid">
        {escrowSteps.map((step, index) => (
          <motion.article
            key={step}
            className="timeline-card"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 120, damping: 18 }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
