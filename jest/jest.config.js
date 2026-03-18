const path = require('path');

module.exports = {
  preset: 'jest-expo',

  rootDir: path.resolve(__dirname, '..'),

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/e2e/'],

  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],

  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
};
