export type MarketAsset = {
  id: string;
  slug: string;
  title: string;
  niche: 'E-commerce' | 'SaaS' | 'Luxury Services' | 'Fintech';
  priceEur: number;
  monthlyRevenueEur: number;
  monthlyTraffic: number;
  roiMonths: number;
  description: string;
  preview: string;
  highlights: string[];
  growth: string;
};

export const marketActivity = {
  volumeUsd: 1240000,
  dealsCount: 18,
  activeBuyers: 41,
  escrowProtected: '€3.8M',
};

export const services = [
  {
    id: 'wealth-sites',
    title: 'Премиальные веб-сайты',
    text: 'Проектируем и продаём премиальные сайты, где дизайн, доверие и конверсия работают как единый актив.',
  },
  {
    id: 'saas-launch',
    title: 'SaaS-сайты и launch-системы',
    text: 'Создаём витрины и платформы с аналитикой, онбордингом, оплатой и понятной unit-экономикой.',
  },
  {
    id: 'brand-rebuild',
    title: 'Luxury-редизайн бренда',
    text: 'Пересобираем digital-образ бренда: структура, tone of voice, дизайн-система и продающий опыт.',
  },
];

export const differentiators = [
  'Ультра-минималистичный премиальный интерфейс в эстетике quiet luxury',
  'Продажа сайтов, редизайн и стратегия монетизации в одной системе',
  'Упаковка на основе аналитики: ROI, трафик и прозрачность выручки',
  'Escrow-first сделка с контролем передачи домена и доступов',
];

export const phonePreviews = [
  'Тихая роскошь в digital commerce',
  'Инвестиционный сценарий покупки сайта',
  'Дизайн, усиливающий доверие и конверсию',
];

export const assets: MarketAsset[] = [
  {
    id: '1',
    slug: 'aurum-commerce-suite',
    title: 'Aurum Commerce Suite',
    niche: 'E-commerce',
    priceEur: 185000,
    monthlyRevenueEur: 21400,
    monthlyTraffic: 96000,
    roiMonths: 11,
    description: 'Премиальный e-commerce актив с глубокой SEO-матрицей, clean checkout и высокой долей repeat-заказов.',
    preview: 'Полированная витрина / 4.7% CVR / 61% returning users',
    highlights: ['Checkout на Stripe', 'GA4 event model', 'Escrow-сценарий для Европы'],
    growth: '+18.4% рост выручки год к году',
  },
  {
    id: '2',
    slug: 'velaris-booking-cloud',
    title: 'Velaris Booking Cloud',
    niche: 'SaaS',
    priceEur: 249000,
    monthlyRevenueEur: 31600,
    monthlyTraffic: 42000,
    roiMonths: 13,
    description: 'SaaS-платформа для luxury service bookings с устойчивым MRR и низким churn.',
    preview: 'Подписочная панель / 7 стран / 84% продления',
    highlights: ['MRR-коhорты', 'Ролевая админ-панель', 'Быстрый онбординг'],
    growth: '+11.2% рост MRR месяц к месяцу',
  },
  {
    id: '3',
    slug: 'monarch-private-capital',
    title: 'Monarch Private Capital',
    niche: 'Fintech',
    priceEur: 320000,
    monthlyRevenueEur: 40100,
    monthlyTraffic: 28000,
    roiMonths: 15,
    description: 'Контентно-технологический fintech asset с премиальным UX, высокой LTV и органическим трафиком.',
    preview: 'Закрытый кабинет / lead scoring / multilingual flow',
    highlights: ['Расширенная аналитика', 'Формы с готовностью к KYC', 'Высокоинтентные лиды'],
    growth: '+22.7% рост ценности лида',
  },
  {
    id: '4',
    slug: 'atelier-maison-signature',
    title: 'Atelier Maison Signature',
    niche: 'Luxury Services',
    priceEur: 142000,
    monthlyRevenueEur: 16900,
    monthlyTraffic: 35000,
    roiMonths: 10,
    description: 'Luxury service website с editorial-дизайном и высокой долей заявок из органики.',
    preview: 'Редакционный стиль / concierge flow / high-ticket формы',
    highlights: ['Narrative commerce', 'Performance SEO', 'Синхронизация лидов с CRM'],
    growth: '+27% квалифицированных обращений',
  },
];

export const contactChannels = [
  {
    label: 'Telegram',
    value: '@platfio',
    href: 'https://t.me/platfio',
  },
  {
    label: 'Email',
    value: 'concierge@platfio.com',
    href: 'mailto:concierge@platfio.com',
  },
  {
    label: 'Телефон',
    value: '+371 20 480 880',
    href: 'tel:+37120480880',
  },
];
