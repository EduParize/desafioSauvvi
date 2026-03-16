import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import featureSlicedPlugin from '@conarti/eslint-plugin-feature-sliced';

export default tseslint.config(
  // 1. Base configs (Recommended rules from ESLint and TypeScript)
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  // 2. Our Custom FSD Rules
  {
    files: ['src/**/*.{ts,tsx}'], // Applies these rules only to our source code
    plugins: {
      '@conarti/feature-sliced': featureSlicedPlugin,
    },
    rules: {
      // Import the recommended base rules from the FSD plugin
      ...featureSlicedPlugin.configs.recommended.rules,

      // 1. The Hierarchy Rule (Dependency Rule)
      // Prevents lower layers from importing from higher layers.
      '@conarti/feature-sliced/layers-slices': ['error', {
        allowTypeImports: true, // Allows importing Types (Interfaces) from anywhere
      }],

      // 2. The Public API Rule (Front Door)
      // Forces imports to always come from the module's 'index.ts'
      '@conarti/feature-sliced/public-api': 'error',

      // 3. Slice Isolation Rule
      // Prevents a module (e.g., feature/auth) from importing code from another module directly
      '@conarti/feature-sliced/absolute-relative': 'error',
    },
  },

  // 3. Global Ignores (replaces .eslintignore)
  {
    ignores: [
      'node_modules/**',
      'babel.config.js',
      'jest.config.js',
      'e2e/**', // Ignores the E2E tests folder so FSD rules don't apply there
      'dist/**',
    ],
  }
);