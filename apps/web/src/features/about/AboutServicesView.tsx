const services = [
  'Website acquisition packaging',
  'Premium landing pages and commerce rebuilds',
  'SaaS product websites and growth loops',
  'Analytics instrumentation and conversion architecture',
];

export function AboutServicesView() {
  return (
    <section className="glass-panel stack-24">
      <p className="eyebrow">Services</p>
      <h1 className="section-title small">Сервисы, которыми мы усиливаем ценность актива.</h1>
      <div className="detail-highlights">
        {services.map((service) => (
          <div key={service} className="highlight-row">{service}</div>
        ))}
      </div>
    </section>
  );
}
