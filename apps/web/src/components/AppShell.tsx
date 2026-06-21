import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Building2, ContactRound, Home, ChevronLeft } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { tabLabels, type TabKey } from '../router/routes';
import { useAppRouter } from '../store/appRouter';

const navItems: Array<{ tab: TabKey; icon: typeof Home }> = [
  { tab: 'home', icon: Home },
  { tab: 'about', icon: Building2 },
  { tab: 'contacts', icon: ContactRound },
];

export function AppShell({ children }: PropsWithChildren) {
  const { activeTab, switchTab, currentPath, goBack, navigateWithinTab } = useAppRouter();
  const canGoBack = (activeTab === 'home' && currentPath !== '/welcome') || (activeTab !== 'home' && currentPath !== `/${activeTab}`);

  return (
    <div className="app-frame">
      <aside className="sidebar glass-panel">
        <div>
          <div className="brand-lockup">
            <div className="brand-mark">PF</div>
            <div>
              <p className="brand-caption">Quiet luxury marketplace</p>
              <h1>PLatFio</h1>
            </div>
          </div>

          <div className="sidebar-intro">
            <p>
              Премиальный сайт для продажи веб-сайтов, web design и безопасных digital asset сделок.
            </p>
          </div>

          <LayoutGroup id="tab-navigation">
            <nav className="tab-navigation">
              {navItems.map(({ tab, icon: Icon }) => {
                const isActive = activeTab === tab;
                return (
                  <button key={tab} type="button" className={`tab-link ${isActive ? 'active' : ''}`} onClick={() => switchTab(tab)}>
                    {isActive ? <motion.div layoutId="active-pill" className="active-pill" /> : null}
                    <Icon size={18} />
                    <span>{tabLabels[tab]}</span>
                  </button>
                );
              })}
            </nav>
          </LayoutGroup>
        </div>

        <div className="sidebar-footnote stack-24">
          <p>Escrow-first сделка, curated catalog, premium design and direct Telegram contact.</p>
          <button className="gold-button sidebar-cta" type="button" onClick={() => navigateWithinTab('/contacts/apply')}>
            Оставить заявку
          </button>
        </div>
      </aside>

      <div className="viewport-shell">
        <header className="topbar glass-panel">
          <div>
            <p className="eyebrow">Premium digital assets</p>
            <h2>{tabLabels[activeTab]}</h2>
          </div>

          <AnimatePresence initial={false} mode="wait">
            {canGoBack ? (
              <motion.button
                key="back"
                className="back-button"
                onClick={goBack}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.22 }}
                whileTap={{ scale: 0.96 }}
              >
                <ChevronLeft size={16} />
                Назад
              </motion.button>
            ) : null}
          </AnimatePresence>
        </header>

        <main className="view-container">
          {children}
        </main>
      </div>
    </div>
  );
}
