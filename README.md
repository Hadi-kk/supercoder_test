# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

````js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

## Dummy account for local testing

A simple dummy account is provided so you can verify the local login/logout flow (all data is stored in localStorage):

- Email: `demo@landas.test`
- Password: `Demo1234`

To test:

1. Run the dev server: `yarn dev`.
2. Open the app and go to the Login page ("/login").
3. Use the credentials above to log in. After successful login the navbar will show the account id and a "로그아웃" button.
4. Click "로그아웃" to clear the session.

---

# Detailed README

This repository is a single-page React 19 + TypeScript application scaffolded with Vite and built to follow a Feature-Based Architecture (FBA) and Atomic Design principles.

## Installation & execution
1. Install dependencies (yarn is required per project guidelines):

```powershell
cd "d:\Work\Interview tests\supercoder_test"
yarn install
````

2. Start the dev server:

```powershell
yarn dev
```

3. Open the app in your browser (usually http://localhost:5173) and navigate through the UI.

Build for production:

```powershell
yarn build
```

Preview production build:

```powershell
yarn preview
```

Linting:

```powershell
yarn lint
```

---

## Dummy credentials (for local testing)

Use the following account to test login/logout functionality (all data stored locally in localStorage):

- Email: `demo@landas.test`
- Password: `Demo1234`

The canonical credentials are defined in `src/shared/stores/authStore.ts` as `DUMMY_CREDENTIALS`.

---

## Project structure (high-level)

Root: src/

- src/features/

  - auth/
    - components/
      - atoms/ (AuthInput, AuthCheckbox)
      - molecules/ (LoginForm)
  - main/ (UI components used on the landing page such as HeroSection, ProductsSection, ProductCard)

- src/pages/

  - LoginSignup.tsx — host page for the login form
  - LandingPage/ — main landing page

- src/routes/

  - Router.tsx — app routes
  - routes.ts — route path constants

- src/shared/
  - components/ — shared atoms/molecules/organisms (Header/Navbar, Footer)
  - stores/ — global Zustand stores (authStore.ts)
  - styles/ — global styles
  - utils/ — shared utilities and helpers

---

## Implementation assumptions & decisions

- SPA-only: this project is intentionally implemented as a client-side SPA with no server or API calls (per assignment requirements).
- Local-only auth: authentication is mocked locally using a small Zustand store and localStorage persistence. This keeps the UI flow testable without a backend.
- Dummy credentials: a single hard-coded credential set is included for testing convenience and documented above.
- Minimal navigation flow: after successful login, the app redirects to the main landing page so the Navbar (which reads global auth state) shows the logged-in UI.
- No sensitive data: the demo credentials are not real; do not use them for any external services.
- Styling: Tailwind CSS classes are used exclusively; no inline style attributes were added.

---

## Optional libraries used & justification

The following optional dependencies were included in `package.json` and used intentionally:

- `axios` (optional) — included in dependencies but not required for this static demo; kept for potential future API wiring.
- `@tanstack/react-query` (optional) — included in dependencies for potential server-state management; not required for the static dummy-data demo but commonly used in real projects for caching and async data handling.

Why keep them:

- They are common, lightweight additions that help demonstrate how one would connect to real APIs in a real app. If you prefer a minimal install, they can be removed from `package.json` safely.

---

## How login works (short)

- `src/features/auth/components/molecules/LoginForm.tsx` validates the form, checks the entered id/password against `DUMMY_CREDENTIALS`.
- On success the `login(id)` method from the Zustand store (`src/shared/stores/authStore.ts`) is called and the user is stored in localStorage.
- The app navigates to the main landing page so the Navbar updates to show the user id and a "로그아웃" button. Logout clears the store and localStorage and redirects back to the landing page.

---

## Where to look for code

- Auth logic: `src/shared/stores/authStore.ts`
- Login UI: `src/features/auth/components/molecules/LoginForm.tsx`
- Navbar UI + auth controls: `src/shared/components/organisms/Navbar/Navbar.tsx`
- Routes: `src/routes/Router.tsx` and `src/routes/routes.ts`

---

If you'd like, I can:

- Add a local signup form that appends a new credential to a local-store of users (still stored in localStorage).
- Add a small visual confirmation/toast on successful login/logout.
- Extract `AuthControls` into a shared component and add unit tests.

Tell me which follow-up you prefer and I'll implement it.

```

```
