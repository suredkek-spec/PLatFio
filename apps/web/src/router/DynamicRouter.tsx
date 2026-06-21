import { AnimatePresence, motion } from 'framer-motion';
import { AboutProcessView } from '../features/about/AboutProcessView';
import { AboutServicesView } from '../features/about/AboutServicesView';
import { AboutView } from '../features/about/AboutView';
import { ApplicationView } from '../features/contacts/ApplicationView';
import { ContactsView } from '../features/contacts/ContactsView';
import { AssetAnalytics } from '../features/home/AssetAnalytics';
import { AssetCatalog } from '../features/home/AssetCatalog';
import { AssetDetail } from '../features/home/AssetDetail';
import { EscrowCheckout } from '../features/home/EscrowCheckout';
import { HomeDashboard } from '../features/home/HomeDashboard';
import { WelcomeScreen } from '../features/home/WelcomeScreen';
import { useAppRouter } from '../store/appRouter';

const viewMap: Record<string, () => JSX.Element> = {
  '/welcome': WelcomeScreen,
  '/': HomeDashboard,
  '/catalog': AssetCatalog,
  '/catalog/:slug': AssetDetail,
  '/analytics': AssetAnalytics,
  '/checkout': EscrowCheckout,
  '/about': AboutView,
  '/about/process': AboutProcessView,
  '/about/services': AboutServicesView,
  '/contacts': ContactsView,
  '/contacts/apply': ApplicationView,
};

export function DynamicRouter() {
  const currentPath = useAppRouter((state) => state.currentPath);

  const renderView = (path: string) => {
    const matchedKey = Object.keys(viewMap).find((key) => {
      if (!key.includes(':')) return key === path;
      const regex = new RegExp(`^${key.replace(/:[^/]+/g, '[^/]+')}$`);
      return regex.test(path);
    }) ?? '/';

    const View = viewMap[matchedKey] ?? HomeDashboard;
    return <View />;
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={currentPath}
        className="route-scene"
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -14, scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        {renderView(currentPath)}
      </motion.div>
    </AnimatePresence>
  );
}
