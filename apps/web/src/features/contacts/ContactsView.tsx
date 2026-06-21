import { motion } from 'framer-motion';
import { contactChannels } from '../../data/content';
import { useAppRouter } from '../../store/appRouter';

export function ContactsView() {
  const navigateWithinTab = useAppRouter((state) => state.navigateWithinTab);

  return (
    <div className="stack-32">
      <section className="glass-panel stack-24">
        <p className="eyebrow">Contacts / Connect with us</p>
        <h1 className="section-title small">Свяжитесь с нами в Telegram, по почте или по телефону.</h1>
        <p className="section-copy">
          Для быстрых обсуждений проекта используйте Telegram. Если нужно обсудить продажу сайта, редизайн,
          сопровождение сделки или запуск SaaS-витрины — оставьте заявку, и мы вернёмся с предложением.
        </p>

        <div className="contacts-grid">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={channel.label}
              className="contact-card"
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
            </motion.a>
          ))}
        </div>

        <div className="cta-banner">
          <div>
            <p className="eyebrow">Project intake</p>
            <h3>Нужен сайт, редизайн или продажа digital asset?</h3>
          </div>
          <button className="gold-button" type="button" onClick={() => navigateWithinTab('/contacts/apply')}>
            Оставить заявку
          </button>
        </div>
      </section>
    </div>
  );
}
