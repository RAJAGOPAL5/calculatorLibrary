"use strict";
//src/config.jest.ts
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // modulePaths: ['<rootDir>/src/'],
    testRegex: '/__tests__/.*\\.(test|spec)\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
//# sourceMappingURL=config.jest.js.map