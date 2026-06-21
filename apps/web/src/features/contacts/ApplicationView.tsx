import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

type FormState = {
  name: string;
  phone: string;
  brief: string;
};

const initialState: FormState = {
  name: '',
  phone: '',
  brief: '',
};

export function ApplicationView() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section className="glass-panel stack-24">
      <div>
        <p className="eyebrow">Оставить заявку</p>
        <h1 className="section-title small">Расскажите о проекте: имя, номер телефона и ТЗ.</h1>
        <p className="section-copy">
          Мы работаем с премиальными корпоративными сайтами, SaaS-витринами, digital asset packaging и redesign под high-ticket сегмент.
        </p>
      </div>

      <div className="application-layout">
        <form className="application-form" onSubmit={handleSubmit}>
          <label>
            <span>Имя</span>
            <input
              required
              name="name"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            />
          </label>
          <label>
            <span>Номер телефона</span>
            <input
              required
              name="phone"
              placeholder="+7 / +371 / ..."
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            />
          </label>
          <label>
            <span>Техническое задание</span>
            <textarea
              required
              name="brief"
              placeholder="Опишите проект, тип сайта, нишу, желаемый стиль, бюджет и сроки."
              rows={7}
              value={form.brief}
              onChange={(event) => setForm((current) => ({ ...current, brief: event.target.value }))}
            />
          </label>
          <motion.button className="gold-button" type="submit" whileTap={{ scale: 0.98 }}>
            Отправить заявку
          </motion.button>
          {submitted ? <p className="success-copy">Спасибо. Заявка принята, следующий шаг — связаться с вами в Telegram / по телефону.</p> : null}
        </form>

        <aside className="application-side-card">
          <p className="eyebrow">Что можно заказать</p>
          <div className="detail-highlights">
            <div className="highlight-row">Продажа готового сайта</div>
            <div className="highlight-row">Премиальный редизайн</div>
            <div className="highlight-row">SaaS website / landing</div>
            <div className="highlight-row">Аудит и упаковка digital asset</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
