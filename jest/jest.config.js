const path = require('path');

module.exports = {
  preset: "jest-expo",
  
  // 1. A MÁGICA: Ensina ao Jest que a verdadeira raiz do projeto está uma pasta para trás!
  rootDir: path.resolve(__dirname, '..'),
  
  // 2. O nosso apelido da arquitetura FSD (@/)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  // 3. Ignorar E2E e node_modules
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/", 
    "<rootDir>/e2e/"
  ],

  // 4. Força o Jest a procurar os ficheiros de teste dentro do src
  testMatch: [
    "<rootDir>/src/**/*.test.(ts|tsx)"
  ],

  // 5. Aponta para o arquivo de setup que está AQUI MESMO na pasta jest
  setupFilesAfterEnv: [
    "<rootDir>/jest/jest.setup.js"
  ],
};