# My Voice Memos [https://aparinaa.github.io/memos/](https://aparinaa.github.io/memos/)

My Voice Memos is a React application that allows users to create/edit delete memos using either voice or keyboard input. The application provides a user friendly interface for managing notes and utilizes the SpeechRecognition API for voice input functionality.

## Features

- Create new voice memos using voice or keyboard input.
- View a list of all saved memos.
- Edit existing memos.
- Delete memos.
- Store memos in LocalStorage for persistence.

## Installation

1. Clone the repository:

   ```
   git clone git@github.com:AparinAA/memos.git
   ```

   or

   ```
   git clone https://github.com/AparinAA/memos.git
   ```

2. Navigate to the project directory:

   ```
   cd memos
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:

```
npm run dev
```

This will launch the app in your default web browser.

## Project structure

- components: isolated reusable components with CSS modules.
- pages: route-level containers that compose components and handle navigation.
- services: data access, validation, and storage abstractions (used LocalStorage, but we can use api of any storage ).
- store: global application state.
- shared: common hooks and utilities shared across the project.
- assets: static files (SVGs, images).
- @types: type/module declarations

## Technologies Used

- React
- SpeechRecognition API
- LocalStorage

## CI/CD

A full CI/CD pipeline is configured with GitHub Actions.

- Orchestrator: [.github/workflows/ci.yml](.github/workflows/ci.yml)
  - Trigger: push to master
  - Runs two reusable workflows:
    - Tests/Lint: [.github/workflows/test.yml](.github/workflows/test.yml)
    - Deploy: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

### Tests and lint

Workflow: [.github/workflows/test.yml](.github/workflows/test.yml)

- Lint: ESLint
- Unit tests: Vitest with coverage (npm run test:coverage)

### Deploy to GitHub Pages

Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

- Build: Vite (npm run build), Node LTS
- Publish: GitHub Pages (actions/deploy-pages)
- The application's base path is provided via the VITE_BASE_PATH repository variable (Settings → Variables), for example: /memos/

Deployment pipeline:

1. Checkout code
2. Install Node LTS and dependencies
3. Build with Vite (dist/)
4. Upload Pages Artifact (dist/)
5. Deploy to GitHub Pages

## Growth points

1. Better component decomposition
   - Split large components into presentational (UI-only) and container (business logic) parts.
   - Improve reusability and testability by isolating side effects and state.

2. CI/CD improvements
   - Cache npm dependencies and reuse them across jobs (test/deploy) to speed up pipelines.
   - Alternatively, run lint/tests/build/deploy in a single job to simplify orchestration.

3. Migrate to TypeScript
   - The project uses JS for speed and simplicity; prefer TS for better DX, type safety, and maintainability.

4. Language switching
   - Add UI language switching and wire it to SpeechRecognition (recognition.lang) and UI texts.
   - Consider i18n (e.g., react-i18next) and env-based defaults.

5. Testing enhancements
   - Increase unit test coverage for components and hooks.
   - Add e2e tests (e.g., Playwright) for critical flows:
