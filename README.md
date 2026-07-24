# Team Fakas

Plataforma **Mobile First** compuesta por un Ecommerce, un Campus Educativo y un módulo de Ejercitación.

## Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, TailwindCSS, shadcn/ui
- **Backend:** Next.js Route Handlers, Server Actions
- **Base de datos:** Supabase PostgreSQL, Prisma ORM
- **Auth:** Supabase Auth
- **Tests:** Vitest, Testing Library, Playwright

## Desarrollo

```bash
npm install
npm run dev
```

## Comandos

```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run lint         # Lint
npm run test         # Tests
npm run db:generate  # Generar Prisma Client
npm run db:push      # Push schema a Supabase
npm run db:studio    # Abrir Prisma Studio
```

## Estructura

```
src/
  app/            # App Router
  features/       # Feature-based modules
    auth/
    ecommerce/
    education/
    exercises/
    dashboard/
    profile/
  components/     # Componentes compartidos
  lib/            # Utilidades (Supabase, Prisma)
  hooks/          # Custom hooks
  services/       # Servicios
  config/         # Configuración
  types/          # Tipos TypeScript
  utils/          # Utilidades
```

## Branding

Ver `Branding.md` y `Branding.png` para directrices de diseño.

## Licencia

© 2026 Team Fakas. Todos los derechos reservados.
