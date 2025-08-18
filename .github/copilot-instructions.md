# Copilot Instructions for supercoder_test

## Project Overview

- **Framework**: React 19 + TypeScript + Vite (SPA only, no Next.js/SSR)
- **Purpose**: Build a responsive web app based on Figma design using **static dummy data** (no server integration).
- **Evaluation Focus**: Code quality, architecture compliance, reusable components, and accurate UI implementation.

## Tech Stack

### Required Dependencies

- `react`, `react-dom`
- `react-router-dom`
- `tailwindcss`, `@tailwindcss/vite`
- `zustand`
- `clsx`, `tailwind-merge`
- `pretendard` (font)

### Optional Dependencies (must justify in README if used)

- `axios`
- `@tanstack/react-query`
- `react-spinners`
- `react-toastify`
- `tailwind-scrollbar`

### DevDependencies

- `vite`, `@vitejs/plugin-react`
- `typescript`, `typescript-eslint`
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`
- `prettier`, `prettier-plugin-tailwindcss`

## Project Structure

src/
│
├── features/ # Feature-Based Architecture (FBA)
│ └── domain/ # Domain-specific features (e.g., memberManage, serviceManage)
│ ├── components/ # Atomic Design (atoms, molecules, organisms)
│ ├── hooks/ # Feature-specific hooks
│ ├── types/ # Domain-specific types
│ └── utils/ # Domain-specific utilities
│
├── pages/ # Page components (routing targets)
│
├── routes/ # Routing
│ ├── Router.tsx # Main router
│ └── route.ts # Path constants
│
└── shared/ # Cross-feature modules
├── components/ # Reusable atomic design components
├── constants/ # Constants (e.g., iconSrcMapping.ts, sidebarMenu.ts)
├── hooks/ # Custom reusable hooks
├── layouts/ # Layouts
├── lib/ # Library configurations
├── stores/ # Global Zustand state
├── styles/ # Global styles
├── types/ # Shared types
├── utils/ # Reusable utilities
└── wrappers/ # Higher-order wrapper components

## Developer Workflows

- **Install dependencies**: `yarn install`
- **Start dev server**: `yarn dev`
- **Build for production**: `yarn build`
- **Preview production build**: `yarn preview`
- **Lint**: `yarn lint`

## Development Guidelines

### 1. Architecture Principles

- Follow **Feature-Based Architecture (FBA)** + **Atomic Design Pattern**.
- **Atoms**: small building blocks (Button, Input, Text).
- **Molecules**: composed of atoms (FormInput, TableRow).
- **Organisms**: composed of molecules (Table, Sidebar, Header).
- **Pages**: routing targets under `/pages/`.
- **Shared vs Feature**: shared logic goes in `/shared/`, domain-specific in `/features/<domain>/`.

### 2. Naming Conventions

- Components: **PascalCase** → `BasicButton.tsx`, `MemberTable.tsx`
- Hooks: **camelCase** → `useAuth.ts`, `useMemberList.ts`
- Folders: **camelCase** → `memberManage`, `serviceManage`
- Variables/functions: **camelCase** → `formData`, `handleSubmit`
- Constants: **UPPER_SNAKE_CASE** → `API_ENDPOINTS`, `PASSWORD_REGEX`
- Props interface names: `ComponentNameProps`

### 3. Component Development Rules

- Define **reusable components** for base UI (Button, Input, Textarea).
- Event handlers follow `on[Action]` naming (e.g., `onClick`, `onSubmit`).
- Optional props must have default values.
- Styling should always use `className`.
- **No inline styles allowed**.

### 4. TypeScript Rules

- Components: `.tsx`
- Hooks, utilities: `.ts`
- Define types in `types/` files (shared or domain-specific).
- Strong type safety required across the codebase.

## Integration Points

- **Data**: Use **static dummy data only** for UI implementation.
- **State**: Zustand for global/local state.
- **Async/Server State**: React Query + axios are **optional** and should only be used if justified in README (not required).
- **Styling**: Tailwind CSS only. Use `clsx` and `tailwind-merge` for conditional class handling.
- **Font**: Pretendard (import via styles).
- **Linting/Formatting**: ESLint + Prettier with Tailwind plugin.

## Restrictions

- No Next.js, SSR, or other frameworks — **SPA only**.
- No external UI libraries (MUI, Ant Design, shadcn/ui, etc.).
- No inline styles (Tailwind only).
- No bulk code copying from external sources.
- Must use `yarn` as package manager.

## Submission Requirements

1. Add a **detailed README.md** with:
   - Installation & running instructions.
   - Project structure explanation.
   - Assumptions & decisions.
   - Justification for any optional dependencies.
2. Provide a **code review video** walkthrough.
3. Configure `404.html` → redirect to `/index.html` for SPA routing.

## Evaluation Criteria

- **Code Quality** (30%): clean, maintainable, readable.
- **Architecture** (25%): proper FBA + Atomic Design compliance.
- **UI/UX Implementation** (25%): matches Figma design (responsive).
- **Functionality** (20%): routing, state handling, error handling.

### Bonus Points

- Performance optimizations (memoization, code splitting).
- Error handling & UX improvements.
- Skeleton loading states.
- Dark mode support.
- API layer abstraction (if justified).

## Tips for AI Agents

- Always follow Atomic Design + FBA.
- Use `/shared/` for global components/utilities, `/features/` for domain-specific.
- Always type components using `ComponentNameProps`.
- Use **dummy data only** unless explicitly asked for API integration.
- Document all assumptions in the README.

---

_Last updated: August 2025_
