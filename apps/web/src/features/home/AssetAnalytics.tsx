import { motion } from 'framer-motion';
import { Skeleton } from '../../components/Skeleton';

const analyticsRows = [
  { label: 'Сессии GA4', value: '118,402', delta: '+12.4%' },
  { label: 'Валовая выручка Stripe', value: '€31,640', delta: '+8.2%' },
  { label: 'Окупаемость CAC', value: '4.1 месяца', delta: '-0.6м' },
  { label: 'Квалифицированные лиды', value: '188', delta: '+16.9%' },
];

export function AssetAnalytics() {
  return (
    <div className="stack-32">
      <section className="glass-panel stack-24">
        <div>
          <p className="eyebrow">Аналитика активов</p>
          <h1 className="section-title small">Слой аналитики Google Analytics и Stripe.</h1>
          <p className="section-copy">
            Здесь показаны ключевые показатели дохода, трафика, стоимости привлечения и окупаемости цифровых активов.
          </p>
        </div>

        <div className="analytics-grid">
          {analyticsRows.map((item, index) => (
            <motion.article
              key={item.label}
              className="metric-card large"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.delta}</small>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="glass-panel stack-24">
        <div>
          <h2 className="section-title small">Блок живой синхронизации</h2>
          <p className="section-copy">В production этот раздел заполняется backend-агрегатором из GA4 и Stripe API.</p>
        </div>
        <Skeleton lines={4} height={16} />
      </section>
    </div>
  );
}
