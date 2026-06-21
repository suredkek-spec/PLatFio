export function AboutProcessView() {
  return (
    <section className="glass-panel stack-24">
      <p className="eyebrow">Process</p>
      <h1 className="section-title small">Как проходит работа с активом.</h1>
      <div className="timeline-grid">
        <article className="timeline-card"><span>01</span><p>Discovery, аудит трафика, выручки и рисков.</p></article>
        <article className="timeline-card"><span>02</span><p>Repositioning, дизайн и переупаковка ценности.</p></article>
        <article className="timeline-card"><span>03</span><p>Data room, аналитика, legal-safe escrow workflow.</p></article>
        <article className="timeline-card"><span>04</span><p>Закрытие сделки и сопровождение post-transfer.</p></article>
      </div>
    </section>
  );
}
