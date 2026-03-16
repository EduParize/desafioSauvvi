# Frontend_Agents.md – Standards & FSD Architecture for React Native + TypeScript

This guide defines **architecture, naming conventions, folder structure, testing, and code standards** so that developers and AI agents (e.g., Copilot, Cursor) can contribute to the Front-End (React Native) repository in a predictable, scalable way, fully aligned with Back-End standards.

---

## 1. Architectural Symmetry (Front-End vs Back-End)

To ensure seamless collaboration between teams, our **Feature-Sliced Design (FSD)** architecture maps back-end concepts in the following way:

| Back-End Concept | Front-End Equivalent (FSD) | Front-End Responsibility |
| :--- | :--- | :--- |
| **Domain** | `05-entities` | Data models (Interfaces) and raw UI components that represent the business domain (e.g., `IUser`, `user-card.tsx`). |
| **Service** | `04-features` | Business logic, global state management (Zustand), form validation, and API calls (`apiClient.post`). |
| **Controller** | `02-pages` & `03-widgets` | Orchestration. Pages and widgets do not hold business logic; they only "assemble" the UI by pulling data from *Features* and visuals from *Entities/Shared*. |
| **Infrastructure** | `06-shared/api` | Agnostic HTTP client configuration (Axios), token interceptors, and global adapters. |
| **Configuration** | `01-app` | Global bootstrap: State providers, routing setup (React Navigation), and SDK initialization (e.g., EAS Update, Sentry). |

---

## 2. Folder Structure (FSD)

The project strictly follows the **Feature-Sliced Design** dependency hierarchy. A layer can only import resources from the layers *below* it.

| Layer | Path | Purpose / Examples |
| :--- | :--- | :--- |
| **App** | `src/01-app` | Global configurations, context providers, root routing. |
| **Pages** | `src/02-pages` | Full-screen components for navigation flows (e.g., `home-page.tsx`). |
| **Widgets** | `src/03-widgets` | Complex UI blocks composed of multiple features (e.g., `bottom-nav-widget.tsx`). |
| **Features** | `src/04-features` | User interactions and use cases (e.g., `auth/`, `schedule-appointment/`). |
| **Entities** | `src/05-entities` | Core business domains (e.g., `user/`, `hospital/`). |
| **Shared** | `src/06-shared` | Business-agnostic code: base UI (buttons), API config, icons, and utilities. |

---

## 3. Naming Conventions

We maintain the exact same naming conventions as the back-end to facilitate cross-stack readability:

### 3.1 Interfaces, Types, and Enums

| Type | Prefix | Casing | Example |
| :--- | :--- | :--- | :--- |
| **Domain interface** | `I` | PascalCase | `IUser`, `IPatientData` |
| **Enum** | `E` | PascalCase | `EStatus` with members `ACTIVE`, `PENDING` |

* **Files:** Must use `kebab-case.ts` or `kebab-case.tsx` (e.g., `user-profile.tsx`, `auth-api.ts`).
* **React Components:** Exported functions and variables use `PascalCase` (e.g., `export const UserProfile = () => {}`).
* **Global Constants:** Use `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`).

---

## 4. Testing & Linting Standards

### 4.1 Co-location (Unit and Integration Tests)
Unlike the back-end, which uses a separate `tests/` folder, the front-end utilizes the **Co-location** concept.
Test files (`*.test.ts` or `*.test.tsx`) using **Jest/React Testing Library** must live *exactly next to* the file they are testing, within their respective Slice/Segment.

**Example:**
```text
src/04-features/auth/model/
 ├── use-auth-store.ts       <-- Source code
 └── use-auth-store.test.ts  <-- Co-located unit test
 ```
 # Frontend_Agents.md – Standards & FSD Architecture for React Native + TypeScript

This guide defines **architecture, naming conventions, folder structure, testing, and code standards** so that developers and AI agents (e.g., Copilot, Cursor) can contribute to the Front-End (React Native) repository in a predictable, scalable way, fully aligned with Back-End standards.

---

## 1. Architectural Symmetry (Front-End vs Back-End)

To ensure seamless collaboration between teams, our **Feature-Sliced Design (FSD)** architecture maps back-end concepts in the following way:

| Back-End Concept | Front-End Equivalent (FSD) | Front-End Responsibility |
| :--- | :--- | :--- |
| **Domain** | `05-entities` | Data models (Interfaces) and raw UI components that represent the business domain (e.g., `IUser`, `user-card.tsx`). |
| **Service** | `04-features` | Business logic, global state management (Zustand), form validation, and API calls (`apiClient.post`). |
| **Controller** | `02-pages` & `03-widgets` | Orchestration. Pages and widgets do not hold business logic; they only "assemble" the UI by pulling data from *Features* and visuals from *Entities/Shared*. |
| **Infrastructure** | `06-shared/api` | Agnostic HTTP client configuration (Axios), token interceptors, and global adapters. |
| **Configuration** | `01-app` | Global bootstrap: State providers, routing setup (React Navigation), and SDK initialization (e.g., EAS Update, Sentry). |

---

## 2. Folder Structure (FSD)

The project strictly follows the **Feature-Sliced Design** dependency hierarchy. A layer can only import resources from the layers *below* it.

| Layer | Path | Purpose / Examples |
| :--- | :--- | :--- |
| **App** | `src/01-app` | Global configurations, context providers, root routing. |
| **Pages** | `src/02-pages` | Full-screen components for navigation flows (e.g., `home-page.tsx`). |
| **Widgets** | `src/03-widgets` | Complex UI blocks composed of multiple features (e.g., `bottom-nav-widget.tsx`). |
| **Features** | `src/04-features` | User interactions and use cases (e.g., `auth/`, `schedule-appointment/`). |
| **Entities** | `src/05-entities` | Core business domains (e.g., `user/`, `hospital/`). |
| **Shared** | `src/06-shared` | Business-agnostic code: base UI (buttons), API config, icons, and utilities. |

---

## 3. Naming Conventions

We maintain the exact same naming conventions as the back-end to facilitate cross-stack readability:

### 3.1 Interfaces, Types, and Enums

| Type | Prefix | Casing | Example |
| :--- | :--- | :--- | :--- |
| **Domain interface** | `I` | PascalCase | `IUser`, `IPatientData` |
| **Enum** | `E` | PascalCase | `EStatus` with members `ACTIVE`, `PENDING` |

* **Files:** Must use `kebab-case.ts` or `kebab-case.tsx` (e.g., `user-profile.tsx`, `auth-api.ts`).
* **React Components:** Exported functions and variables use `PascalCase` (e.g., `export const UserProfile = () => {}`).
* **Global Constants:** Use `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`).

---

## 4. Testing & Linting Standards

### 4.1 Co-location (Unit and Integration Tests)
Unlike the back-end, which uses a separate `tests/` folder, the front-end utilizes the **Co-location** concept.
Test files (`*.test.ts` or `*.test.tsx`) using **Jest/React Testing Library** must live *exactly next to* the file they are testing, within their respective Slice/Segment.

**Example:**
```text
src/04-features/auth/model/
 ├── use-auth-store.ts       <-- Source code
 └── use-auth-store.test.ts  <-- Co-located unit test