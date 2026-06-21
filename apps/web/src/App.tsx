import { useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { DynamicRouter } from './router/DynamicRouter';
import { useAppRouter } from './store/appRouter';

export function App() {
  const currentPath = useAppRouter((state) => state.currentPath);
  const navigateWithinTab = useAppRouter((state) => state.navigateWithinTab);

  useEffect(() => {
    const onHashChange = () => {
      const nextPath = window.location.hash.replace(/^#/, '') || '/welcome';
      navigateWithinTab(nextPath);
    };

    if (window.location.hash) {
      onHashChange();
    } else {
      window.history.replaceState({}, '', '#/welcome');
    }

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [navigateWithinTab]);

  useEffect(() => {
    const normalized = `#${currentPath}`;
    if (window.location.hash !== normalized) {
      window.history.replaceState({}, '', normalized);
    }
  }, [currentPath]);

  return (
    <AppShell>
      <DynamicRouter />
    </AppShell>
  );
}
