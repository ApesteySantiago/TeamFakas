# 🏋️‍♂️ TeamFakas

**TeamFakas** es una plataforma web pensada para entrenadores de musculación que deseen gestionar a sus alumnos de forma profesional, ordenada y motivadora. El sistema está en fase de desarrollo y se construirá con tecnologías modernas y escalables.

## 📌 Objetivo

Desarrollar una **WebApp integral** que permita a los profesores de musculación:

- Asignar rutinas y planes alimentarios.
- Llevar seguimiento personalizado de sus alumnos.
- Ofrecer contenido motivacional.
- Escalar a futuro con herramientas como pasarelas de pago, integración con redes, y más.

---

## 🚀 Visión del Proyecto

La plataforma evolucionará en fases:

1. **MVP**: Crear el entorno base con Docker, estructura del proyecto y autenticación básica.
2. **Gestión de Alumnos**: Crear, ver, editar y eliminar alumnos asociados a cada profesor.
3. **Rutinas y Dietas**: Sección editable por cada profesor.
4. **Seguimiento y Métricas**: Registro de progresos y estadísticas.
5. **Motivación y Comunidad**: Frases motivadoras, progreso visual, contacto con otros alumnos.
6. **Escalabilidad futura**:
   - Autenticación con Google.
   - Chat con WhatsApp Business.
   - Integración de pagos (ej: Stripe o MercadoPago).

---

## 🧠 Tecnologías a utilizar

### Frontend

- [Next.js](https://nextjs.org/) — Framework React
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) — Componentes UI accesibles y estilizados

### Backend

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/) — Arquitectura modular escalable
- [RabbitMQ](https://www.rabbitmq.com/) — Comunicación entre servicios vía contenedores (eventualmente)

### DevOps

- [Docker](https://www.docker.com/) — Contenerización de servicios
- [Docker Compose](https://docs.docker.com/compose/) — Orquestación local

---

## 📁 Estructura del Proyecto

```bash
teamfakas/
├── frontend/         # Aplicación Next.js con Tailwind y shadcn/ui
├── backend/          # Backend NestJS
├── docker/           # Archivos de configuración de Docker
├── docker-compose.yml
└── README.md

