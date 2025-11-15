# Portafolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## 🌐 Portafolio Personal – Angular Single Page Application
Este proyecto es una **Single Page Application (SPA)** desarrollada con **Angular**, creada para presentar mi portafolio profesional.  
El objetivo es mantener una arquitectura limpia, modular y escalable para facilitar la evolución del proyecto a futuro.


## 🧱 Estructura de Carpetas
La organización actual del proyecto sigue una arquitectura por responsabilidades:

```bash
src/
├── app/
│   ├── core/           # Lógica central (servicios, switchers de tema e idioma)
│   ├── layout/         # Componentes de estructura principal (header, footer, navegación)
│   ├── shared/         # Componentes reutilizables (botones, inputs, cards, etc.)
│   ├── features/       # Secciones principales del portafolio
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   └── education/
│   └── app.component.* # Componente principal (será movido a layout)
│
├── styles/             # Variables globales, mixins y configuración de temas (modo claro/oscuro)
└── assets/             # Imágenes, íconos y otros recursos estáticos

```

## 🧩 Ramas Activas

El flujo de trabajo sigue una estructura limpia basada en **Git Flow**:

- `main` → Rama principal (versión estable)
- `develop` → Rama de desarrollo (integración de nuevas funciones)
- `feature/readme` → Actualización progresiva del README
- `feature/layout` → Creación de estructura base de la aplicación
- `feature/shared` → Componentes reutilizables
- `feature/features` → Secciones principales del portafolio
- `feature/styles` → Sistema de estilos globales
- `feature/core` → Switchers y configuraciones base

🧠 *Este README se actualizará conforme avance el desarrollo del proyecto.*
