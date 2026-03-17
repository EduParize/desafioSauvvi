module.exports = {
  preset: 'jest-expo', // Se for React Native puro sem Expo, mude para 'react-native'
  
  // Ensina o Jest a entender os nossos caminhos absolutos (o alias @/)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', 
  },
  
  // Ignora o E2E, pois o Jest é apenas para testes unitários e de integração
  testPathIgnorePatterns: [
    '/node_modules/',
    '/e2e/', 
  ],
  
  // Força o Jest a procurar os ficheiros de teste APENAS co-localizados dentro do src
  testMatch: [
    '**/src/**/*.test.(ts|tsx)'
  ],
  
  // Prepara ferramentas extras da Testing Library
  setupFilesAfterEnv: [
    '@testing-library/react-native/extend-expect'
  ],
};