export function AboutProcessView() {
  return (
    <section className="glass-panel stack-24">
      <p className="eyebrow">Процесс</p>
      <h1 className="section-title small">Как проходит работа с активом.</h1>
      <div className="timeline-grid">
        <article className="timeline-card"><span>01</span><p>Исследование, аудит трафика, выручки и рисков.</p></article>
        <article className="timeline-card"><span>02</span><p>Перепозиционирование, дизайн и переупаковка ценности.</p></article>
        <article className="timeline-card"><span>03</span><p>Подготовка data room, аналитики и безопасного escrow-сценария.</p></article>
        <article className="timeline-card"><span>04</span><p>Закрытие сделки и сопровождение после передачи актива.</p></article>
      </div>
    </section>
  );
}
