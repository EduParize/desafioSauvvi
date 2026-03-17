module.exports = {
  preset: "jest-expo",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Força o Jest a usar o Babel para traduzir os ficheiros do React Native e Expo
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },

  // O nosso apelido da arquitetura FSD (@/)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  // A lista rigorosa das bibliotecas que OBRIGATORIAMENTE precisam de ser traduzidas pelo Babel
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],

  testMatch: ["**/src/**/*.test.(ts|tsx)"],
};