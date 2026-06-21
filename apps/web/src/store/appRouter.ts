import { create } from 'zustand';
import { assets } from '../data/content';
import { matchRoute } from '../router/matchRoute';
import { routes, type TabKey, type UserRole } from '../router/routes';

export type TabHistory = Record<TabKey, string[]>;

export type RouterState = {
  activeTab: TabKey;
  tabHistory: TabHistory;
  currentPath: string;
  role: UserRole;
  selectedAssetSlug?: string;
  filters: {
    niche: string;
    maxPrice: number;
    minTraffic: number;
    maxRoi: number;
  };
  setRole: (role: UserRole) => void;
  switchTab: (tab: TabKey) => void;
  navigateWithinTab: (path: string) => void;
  goBack: () => void;
  selectAsset: (slug?: string) => void;
  updateFilters: (filters: Partial<RouterState['filters']>) => void;
};

const defaultHistory: TabHistory = {
  home: ['/welcome'],
  about: ['/about'],
  contacts: ['/contacts'],
};

const resolveAllowedPath = (path: string, role: UserRole) => {
  const match = matchRoute(path);
  if (!match) return '/';
  if (match.route.guard && !match.route.guard.includes(role)) return '/contacts';
  return path;
};

export const useAppRouter = create<RouterState>((set, get) => ({
  activeTab: 'home',
  tabHistory: defaultHistory,
  currentPath: '/welcome',
  role: 'guest',
  selectedAssetSlug: undefined,
  filters: {
    niche: 'All',
    maxPrice: 350000,
    minTraffic: 0,
    maxRoi: 18,
  },
  setRole: (role) => {
    const current = resolveAllowedPath(get().currentPath, role);
    set({ role, currentPath: current });
  },
  switchTab: (tab) => {
    const history = get().tabHistory[tab];
    const path = history[history.length - 1] ?? routes.find((route) => route.tab === tab)?.path ?? '/';
    set({ activeTab: tab, currentPath: path });
  },
  navigateWithinTab: (path) => {
    const state = get();
    const allowedPath = resolveAllowedPath(path, state.role);
    const match = matchRoute(allowedPath);
    if (!match) return;

    const nextTab = match.route.tab;
    const nextHistory = [...state.tabHistory[nextTab]];
    if (nextHistory[nextHistory.length - 1] !== allowedPath) {
      nextHistory.push(allowedPath);
    }

    set({
      activeTab: nextTab,
      currentPath: allowedPath,
      tabHistory: {
        ...state.tabHistory,
        [nextTab]: nextHistory,
      },
      selectedAssetSlug: match.params.slug,
    });
  },
  goBack: () => {
    const state = get();
    const stack = [...state.tabHistory[state.activeTab]];
    if (stack.length <= 1) return;
    stack.pop();
    const previous = stack[stack.length - 1];
    set({
      currentPath: previous,
      tabHistory: {
        ...state.tabHistory,
        [state.activeTab]: stack,
      },
      selectedAssetSlug: previous.includes('/catalog/') ? previous.split('/catalog/')[1] : undefined,
    });
  },
  selectAsset: (slug) => {
    const asset = assets.find((item) => item.slug === slug);
    if (!asset) return;
    get().navigateWithinTab(`/catalog/${asset.slug}`);
  },
  updateFilters: (filters) => {
    set({
      filters: {
        ...get().filters,
        ...filters,
      },
    });
  },
}));
