# PLatFio

Premium web-first project for selling websites, presenting web design services and showcasing curated digital assets in a quiet luxury visual language.

## Primary focus

The main deliverable is the **website version** in `apps/web`.

It includes:

- premium welcome screen
- `Главная`, `О нас`, `Контакты`
- interactive service presentation
- animated website showcase inside a phone mockup
- curated website / SaaS catalog with filters
- public analytics presentation layer
- escrow checkout presentation flow
- application form with name, phone and project brief
- direct contact via Telegram, email and phone

## Stack

- `apps/web` — React 18 + Vite + TypeScript + Zustand + Framer Motion
- `apps/backend` — Fastify 5 + TypeScript + Zod + Swagger
- `apps/ios` — SwiftUI + XcodeGen skeleton
- `docker-compose.yml` — local backend infrastructure with PostgreSQL + Redis + API

## Folder structure

```text
PLatFio/
  .github/
    workflows/
      deploy-pages.yml
  apps/
    web/
      public/
      src/
        components/
        data/
        features/
          about/
          contacts/
          home/
        router/
        store/
        styles/
    backend/
      src/
        config/
        db/
        lib/
        modules/
          analytics/
          applications/
          assets/
          checkout/
          company/
        plugins/
      Dockerfile
    ios/
      PlatFio/
        App/
        Core/
        Features/
        Services/
      project.yml
  docker-compose.yml
  package.json
  tsconfig.base.json
```

## Website architecture

- Sidebar/tab shell with 3 main sections: `Главная`, `О нас`, `Контакты`
- Each tab keeps isolated history through Zustand state in `apps/web/src/store/appRouter.ts`
- Central dynamic routing is implemented in `apps/web/src/router/DynamicRouter.tsx`
- Shared layout transitions are used for catalog card → detail expansion
- Motion layer uses fade, scale, slide, spring and stagger transitions
- Light premium palette uses silk white `#F9F9FB` and polished gold `#D4AF37` / `#C5A059`

## Run the website locally

### 1. Install dependencies

```bash
npm install
```

On your Windows PowerShell, if `npm` is blocked by policy, use:

```powershell
npm.cmd install
```

### 2. Start the website

```bash
npm run dev:web
```

Or on your Windows machine:

```powershell
npm.cmd run dev:web
```

Open:

```text
http://localhost:5173
```

## GitHub Pages deployment

This project is already prepared for GitHub Pages.

### What is configured

- GitHub Actions workflow: `.github/workflows/deploy-pages.yml`
- Automatic Vite `base` path for GitHub Pages: `apps/web/vite.config.ts`
- Web-only build script: `package.json: build:web`

### How to deploy

1. Create a GitHub repository
2. Push this project to the `main` branch
3. Open GitHub repository settings
4. Go to **Settings → Pages**
5. In **Build and deployment**, choose:
   - **Source:** `GitHub Actions`
6. Push to `main`

After that, GitHub Actions will build and publish the website automatically.

### Expected URL

Your website URL will look like:

```text
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

Because the app uses hash navigation, routes will work correctly on GitHub Pages.

Example:

```text
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/#/welcome
```

## Manual production build

If you want to build the website manually:

```bash
npm run build:web
```

Or on your Windows machine:

```powershell
npm.cmd run build:web
```

The output will be generated in:

```text
apps/web/dist
```

## Key website files

- App entry: `apps/web/src/main.tsx`
- Root shell: `apps/web/src/App.tsx`
- Sidebar and layout: `apps/web/src/components/AppShell.tsx`
- Router: `apps/web/src/router/DynamicRouter.tsx`
- State manager: `apps/web/src/store/appRouter.ts`
- Home screen: `apps/web/src/features/home/HomeDashboard.tsx`
- Catalog: `apps/web/src/features/home/AssetCatalog.tsx`
- Contacts: `apps/web/src/features/contacts/ContactsView.tsx`
- Application form: `apps/web/src/features/contacts/ApplicationView.tsx`
- Global styles: `apps/web/src/styles/global.css`

## Optional backend

If you want to power the website with real APIs later:

```bash
docker compose up --build
```

Available backend services:

- PostgreSQL on `5432`
- Redis on `6379`
- Fastify API on `8080`
- Swagger on `http://localhost:8080/docs`

## Next production steps

For a fully live commercial website, next steps would be:

- connect the form to `POST /applications`
- load market activity, assets and analytics from API
- add SEO metadata and social previews per screen
- add analytics, CRM and Telegram lead delivery
- move from GitHub Pages to Vercel or a custom CDN if SSR/API growth is needed

## Legacy files

The old static landing page still remains in the root as `index.html` and `main.css`. The new website implementation lives in `apps/web`.
