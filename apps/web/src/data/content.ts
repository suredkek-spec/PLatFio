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
    title: 'Digital Wealth Websites',
    text: 'Проектируем и продаём премиальные сайты, где дизайн, доверие и конверсия работают как единый актив.',
  },
  {
    id: 'saas-launch',
    title: 'SaaS Launch Systems',
    text: 'Создаём витрины и платформы с аналитикой, онбордингом, оплатой и понятной unit-экономикой.',
  },
  {
    id: 'brand-rebuild',
    title: 'Luxury Brand Rebuild',
    text: 'Пересобираем digital-образ бренда: структура, tone of voice, дизайн-система и продающий опыт.',
  },
];

export const differentiators = [
  'Ultra-minimalist premium interface in quiet luxury aesthetics',
  'Website sales, redesign and monetization strategy in one flow',
  'Analytics-led packaging with ROI, traffic and revenue transparency',
  'Escrow-first closing process with domain and access transfer control',
];

export const phonePreviews = [
  'Quiet luxury commerce',
  'Investor-grade acquisition flow',
  'High-trust conversion design',
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
    preview: 'Polished storefront / 4.7% CVR / 61% returning users',
    highlights: ['Stripe-ready checkout', 'GA4 event model', 'EU escrow pipeline'],
    growth: '+18.4% YoY revenue',
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
    preview: 'Subscription dashboard / 7 countries / 84% renewal rate',
    highlights: ['MRR cohorts', 'Role-based admin', 'Fast onboarding'],
    growth: '+11.2% MRR MoM',
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
    preview: 'Private dashboard / lead scoring / multilingual flow',
    highlights: ['Analytics enrichment', 'KYC-ready forms', 'High-intent leads'],
    growth: '+22.7% lead value',
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
    preview: 'Editorial layout / concierge lead flow / high-ticket forms',
    highlights: ['Narrative commerce', 'Performance SEO', 'CRM lead sync'],
    growth: '+27% qualified inquiries',
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
    label: 'Phone',
    value: '+371 20 480 880',
    href: 'tel:+37120480880',
  },
];
