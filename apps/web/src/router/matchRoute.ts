import { routes, type AppRoute } from './routes';

export type RouteMatch = {
  route: AppRoute;
  params: Record<string, string>;
};

const normalize = (path: string) => {
  if (path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
};

export const matchRoute = (path: string): RouteMatch | undefined => {
  const normalizedPath = normalize(path);

  for (const route of routes) {
    const pattern = normalize(route.path)
      .replace(/:[^/]+/g, '([^/]+)')
      .replace(/\//g, '\\/');
    const regex = new RegExp(`^${pattern}$`);
    const match = normalizedPath.match(regex);

    if (!match) continue;

    const params: Record<string, string> = {};
    const dynamicSegments = (route.path.match(/:([^/]+)/g) ?? []).map((segment) => segment.slice(1));

    dynamicSegments.forEach((segment, index) => {
      params[segment] = match[index + 1];
    });

    return { route, params };
  }

  return undefined;
};
