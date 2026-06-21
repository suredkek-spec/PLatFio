export type TabKey = 'home' | 'about' | 'contacts';

export type UserRole = 'guest' | 'broker' | 'admin';

export type AppRoute = {
  key: string;
  tab: TabKey;
  path: string;
  title: string;
  guard?: UserRole[];
};

export const routes: AppRoute[] = [
  { key: 'welcome', tab: 'home', path: '/welcome', title: 'Welcome' },
  { key: 'home', tab: 'home', path: '/', title: 'Главная' },
  { key: 'catalog', tab: 'home', path: '/catalog', title: 'Asset Catalog' },
  { key: 'asset', tab: 'home', path: '/catalog/:slug', title: 'Asset Details' },
  { key: 'analytics', tab: 'home', path: '/analytics', title: 'Asset Analytics' },
  { key: 'checkout', tab: 'home', path: '/checkout', title: 'Escrow Checkout' },
  { key: 'about', tab: 'about', path: '/about', title: 'О нас' },
  { key: 'about-process', tab: 'about', path: '/about/process', title: 'Процесс' },
  { key: 'about-services', tab: 'about', path: '/about/services', title: 'Сервисы' },
  { key: 'contacts', tab: 'contacts', path: '/contacts', title: 'Контакты' },
  { key: 'contacts-apply', tab: 'contacts', path: '/contacts/apply', title: 'Оставить заявку' },
];

export const tabLabels: Record<TabKey, string> = {
  home: 'Главная',
  about: 'О нас',
  contacts: 'Контакты',
};
