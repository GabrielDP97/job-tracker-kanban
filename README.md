# Job Tracker Kanban

Aplicación web tipo **Job Tracker** con tablero **Kan🇮 Kanban** para organizar y hacer seguimiento de procesos de selección de empleo.

Proyecto desarrollado con **React + TypeScript**, enfocado en el aprendizaje práctico de herramientas modernas de frontend y buenas prácticas.

🔗 **Demo online:**  
https://job-tracker-kanban.vercel.app

---

## 🧩 Funcionalidades

- 🔐 Login “fake” (persistencia en `localStorage`)
- 📋 CRUD de ofertas de trabajo
- 🧱 Tablero Kanban con estados:
  - Applied
  - Interview
  - Offer
  - Rejected
- 🔄 Mover ofertas entre columnas
- 🔍 Filtros por estado y búsqueda por texto
- 💾 Persistencia de datos en `localStorage`
- 🎨 UI moderna y responsive con Tailwind CSS
- 🧪 Tests básicos con Vitest y Testing Library
- 🚀 Deploy automático en Vercel

---

## 🛠️ Stack tecnológico

- **React** + **TypeScript**
- **Vite**
- **React Router**
- **Zustand** (estado global)
- **Tailwind CSS**
- **Vitest** + **@testing-library/react**
- **Vercel** (deploy)

---

## 🧠 Qué se ha aprendido con este proyecto

Este proyecto se ha desarrollado con un enfoque **educativo y progresivo**, poniendo especial atención en:

- Estructuración de un proyecto frontend real
- Gestión de estado global con Zustand
- Routing en aplicaciones SPA
- Persistencia de datos en el navegador
- Estilado rápido y consistente con Tailwind
- Escritura de tests básicos orientados a comportamiento
- Configuración de tooling moderno (Vite + Vitest)
- Deploy y configuración para producción (SPA routing)

---

## 🧪 Tests

El proyecto incluye tests básicos que cubren:

- Interacción con el formulario de login
- Renderizado de columnas Kanban vacías
- Lógica del store de ofertas

Para ejecutar los tests en local:

```bash
npm run test
▶️ Ejecutar el proyecto en local
Clonar el repositorio:

git clone https://github.com/GabrielDP97/job-tracker-kanban.git
Instalar dependencias:

npm install
Ejecutar en desarrollo:

npm run dev
Abrir en el navegador:

http://localhost:5173
📌 Posibles mejoras futuras
Autenticación real

Backend y base de datos

Drag & drop en el Kanban

Validación avanzada de formularios (React Hook Form + Zod)

Tests end-to-end (Playwright / Cypress)

👤 Autor
Gabriel Delgado Pérez
Desarrollador Junior Frontend / Backend
📍 España

GitHub: https://github.com/GabrielDP97

LinkedIn: https://www.linkedin.com/in/angel-gabriel-dp/
