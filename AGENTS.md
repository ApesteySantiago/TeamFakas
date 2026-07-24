# AGENTS.md

# Team Fakas Ecommerce Platform

## Descripción

Team Fakas es una plataforma **Mobile First** compuesta por un Ecommerce, un Campus Educativo y un módulo de Ejercitación.

La plataforma debe respetar estrictamente el branding definido en `Branding.md` y `Branding.png`. Ningún componente, color, tipografía o estilo podrá modificarse sin actualizar primero dichos documentos.

---

# Objetivos

- Plataforma escalable.
- Arquitectura limpia.
- Código mantenible.
- Mobile First.
- Alto rendimiento.
- Accesibilidad WCAG AA.
- SEO optimizado.

---

# Stack

## Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript (strict)
- TailwindCSS
- shadcn/ui
- Framer Motion
- React Hook Form
- Zod
- TanStack Query
- Zustand
- Lucide Icons

## Backend

- Next.js Route Handlers
- Server Actions

## Base de datos

- Supabase PostgreSQL
- Prisma ORM
- Supabase Auth
- Supabase Storage
- Supabase Realtime

## Tests

- Vitest
- Testing Library
- Playwright

---

# Comandos

```bash
npm run dev
npm run build
npm run lint
npm run test
```

---

# Arquitectura

Feature Based + Clean Architecture.

Cada feature tendrá:

- api
- actions
- components
- hooks
- repository
- services
- schemas
- validations
- utils
- types

No mezclar lógica de negocio con UI.

---

# Estructura

```
src/
 app/
 features/
   auth/
   ecommerce/
   education/
   exercises/
   dashboard/
   profile/
 components/
 shared/
 lib/
 hooks/
 services/
 config/
 types/
 utils/
 middleware.ts
```

---

# Branding

Siempre consultar:

- Branding.md
- Branding.png

Respetar:

- Tipografía
- Colores
- Iconografía
- Espaciados
- Bordes
- Animaciones
- Componentes

Nunca inventar estilos.

---

# Mobile First

Diseñar primero para:

- 390px
- 768px
- 1024px
- 1440px

---

# Módulos

## Landing

- Hero
- Productos destacados
- Cursos destacados
- Ejercicios destacados
- CTA
- Testimonios
- Footer

## Autenticación

- Registro
- Login
- Recuperar contraseña
- OAuth
- Perfil

## Tienda

- Productos
- Categorías
- Búsqueda
- Filtros
- Favoritos
- Carrito
- Checkout
- Pagos
- Historial

## Educación

- Cursos
- Módulos
- Lecciones
- Videos
- Material descargable
- Certificados
- Progreso

## Ejercitación

- Rutinas
- Ejercicios
- Seguimiento
- Estadísticas
- Historial

## Perfil

- Datos personales
- Compras
- Cursos
- Rutinas
- Configuración

## Dashboard

Administración de:

- Productos
- Stock
- Pedidos
- Categorías
- Cursos
- Lecciones
- Rutinas
- Usuarios
- Reportes

---

# Roles

## Usuario

Puede:

- Comprar productos
- Acceder a cursos
- Realizar rutinas
- Gestionar perfil
- Consultar historial

## Profesor

Además de todo lo anterior puede:

### Tienda

- Crear productos
- Editar productos
- Eliminar productos
- Gestionar stock
- Administrar categorías
- Gestionar pedidos

### Educación

- Crear cursos
- Editar cursos
- Crear módulos
- Crear lecciones
- Subir material
- Gestionar alumnos

### Ejercitación

- Crear rutinas
- Editar rutinas
- Eliminar rutinas
- Crear ejercicios
- Asignar rutinas
- Consultar progreso

### Usuarios

- Administrar usuarios
- Cambiar roles
- Suspender cuentas

Todo debe implementarse mediante RBAC utilizando Supabase Auth + Row Level Security.

Nunca confiar en permisos enviados por el frontend.

---

# Base de Datos

Tablas iniciales:

- profiles
- roles
- permissions
- role_permissions
- products
- categories
- orders
- order_items
- cart
- favorites
- courses
- modules
- lessons
- exercise_programs
- exercise_sessions
- reviews
- notifications
- audit_logs

---

# Convenciones

- TypeScript estricto.
- Nunca usar any.
- Validar entradas con Zod.
- Server Components por defecto.
- Client Components solo cuando sea necesario.
- Servicios para lógica.
- Repository para acceso a datos.

---

# Seguridad

- Middleware para rutas protegidas.
- RLS obligatorio.
- CSP.
- Sanitizar entradas.
- Rate Limiting.
- Variables en .env.
- Nunca subir secretos.

---

# Performance

- Lazy Loading
- Streaming
- Suspense
- Code Splitting
- Dynamic Imports
- Optimización de imágenes

---

# SEO

- Metadata API
- Sitemap
- Robots
- OpenGraph
- JSON-LD
- Canonical URLs

---

# Calidad

- ESLint
- Prettier
- Husky
- lint-staged
- Conventional Commits

---

# Flujo de trabajo

1. Analizar la tarea.
2. Proponer un plan.
3. Esperar aprobación.
4. Implementar.
5. Ejecutar lint y tests.
6. Explicar cambios.

---

# No hacer

- No romper el Branding.
- No duplicar código.
- No usar any.
- No instalar dependencias sin justificar.
- No subir archivos .env.
- No escribir lógica de negocio dentro de componentes.
- No consultar la base de datos directamente desde componentes React.

---

# Definición de Done

Una tarea está terminada únicamente cuando:

- Compila.
- Tests aprobados.
- Lint sin errores.
- Mobile First verificado.
- Branding respetado.
- Accesibilidad validada.
- Performance aceptable.
- Documentación actualizada.
