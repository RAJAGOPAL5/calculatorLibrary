//src/config.jest.ts
module.exports = {
  rootDir: "../",
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  // testRegex: "/__tests__/.+\\.test\\.tsx?$",

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  // testMatch: ["**/__tests__/**/*.test.tsx?"],

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  coverageDirectory: "<rootDir>/coverage",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageReporters: ["json", "lcov", "text", "clover"],
};
