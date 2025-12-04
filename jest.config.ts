import type { Config } from "jest";
import nextJest from "next/jest.js";

// Necesario para que Jest use la configuración de Next
const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "node",

  // Permite transformar TS y TSX con Babel (requerido por Next)
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  verbose: true,
};

export default createJestConfig(config);
