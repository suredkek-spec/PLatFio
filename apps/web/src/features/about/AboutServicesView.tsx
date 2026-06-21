const services = [
  'Упаковка и подготовка сайта к продаже',
  'Премиальные лендинги и редизайн коммерческих сайтов',
  'Сайты для SaaS-продуктов и growth-сценарии',
  'Настройка аналитики и архитектуры конверсии',
];

export function AboutServicesView() {
  return (
    <section className="glass-panel stack-24">
      <p className="eyebrow">Сервисы</p>
      <h1 className="section-title small">Сервисы, которыми мы усиливаем ценность актива.</h1>
      <div className="detail-highlights">
        {services.map((service) => (
          <div key={service} className="highlight-row">{service}</div>
        ))}
      </div>
    </section>
  );
}
