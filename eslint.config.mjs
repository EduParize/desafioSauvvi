import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import featureSlicedPlugin from '@conarti/eslint-plugin-feature-sliced';
import { fixupPluginRules } from '@eslint/compat'; // <-- THE TRANSLATOR HERE

export default tseslint.config(
  // 1. Base configs
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  // 2. Our Custom FSD Rules
  {
    files: ['src/**/*.{ts,tsx}'], 
    plugins: {
      // THE MAGIC HAPPENS HERE: The translator fixes the getFilename error!
      '@conarti/feature-sliced': fixupPluginRules(featureSlicedPlugin),
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...featureSlicedPlugin.configs.recommended.rules,

      // 1. The Hierarchy Rule (Dependency Rule)
      // Prevents lower layers from importing from higher layers.
      '@conarti/feature-sliced/layers-slices': ['error', {
        allowTypeImports: true, // Allows importing only Types (Interfaces) from anywhere, if necessary
      }],

      // 2. The Public API Rule (Front Door)
      // Forces imports to always come from the module's 'index.ts', never from internal files directly.
      '@conarti/feature-sliced/public-api': 'error',

      // 3. Slice Isolation Rule
      // Prevents a module (e.g., feature/auth) from importing code from another module (e.g., feature/payment)
      // directly. They must remain independent.
      '@conarti/feature-sliced/absolute-relative': 'error',
    },
  },

  // 3. Global Ignores
  {
    ignores: [
      'node_modules/**',
      'babel.config.js',
      'jest/**',
      'e2e/**', // Ignores the E2E tests folder so FSD rules don't apply there
      'dist/**',
      'prettier.config.js',
    ],
  }
);