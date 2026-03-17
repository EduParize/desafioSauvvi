import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import featureSlicedPlugin from '@conarti/eslint-plugin-feature-sliced';
import { fixupPluginRules } from '@eslint/compat'; // <-- O TRADUTOR AQUI

export default tseslint.config(
  // 1. Base configs
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  // 2. Our Custom FSD Rules
  {
    files: ['src/**/*.{ts,tsx}'], 
    plugins: {
      // A MÁGICA ACONTECE AQUI: O tradutor conserta o erro do getFilename!
      '@conarti/feature-sliced': fixupPluginRules(featureSlicedPlugin),
    },
    rules: {
      ...featureSlicedPlugin.configs.recommended.rules,

      // 1. The Hierarchy Rule (Dependency Rule)
      '@conarti/feature-sliced/layers-slices': ['error', {
        allowTypeImports: true, 
      }],

      // 2. The Public API Rule (Front Door)
      '@conarti/feature-sliced/public-api': 'error',

      // 3. Slice Isolation Rule
      '@conarti/feature-sliced/absolute-relative': 'error',
    },
  },

  // 3. Global Ignores
  {
    ignores: [
      'node_modules/**',
      'babel.config.js',
      'jest.config.js',
      'jest.setup.js',
      'e2e/**', 
      'dist/**',
    ],
  }
);