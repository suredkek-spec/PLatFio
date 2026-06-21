import { motion } from 'framer-motion';
import { Skeleton } from '../../components/Skeleton';

const analyticsRows = [
  { label: 'GA4 Sessions', value: '118,402', delta: '+12.4%' },
  { label: 'Stripe Gross Revenue', value: '€31,640', delta: '+8.2%' },
  { label: 'CAC Payback', value: '4.1 months', delta: '-0.6m' },
  { label: 'Qualified Leads', value: '188', delta: '+16.9%' },
];

export function AssetAnalytics() {
  return (
    <div className="stack-32">
      <section className="glass-panel stack-24">
        <div>
          <p className="eyebrow">Asset Analytics</p>
          <h1 className="section-title small">Google Analytics + Stripe intelligence layer.</h1>
          <p className="section-copy">
            Роут зарезервирован для брокеров и admin-ролей. Здесь собраны реальные цифры дохода, трафика и окупаемости активов.
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
          <h2 className="section-title small">Live sync placeholder</h2>
          <p className="section-copy">В production этот блок заполняется backend-агрегатором из GA4 / Stripe API.</p>
        </div>
        <Skeleton lines={4} height={16} />
      </section>
    </div>
  );
}
