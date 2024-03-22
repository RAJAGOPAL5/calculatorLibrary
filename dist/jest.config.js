"use strict";
//src/config.jest.ts
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '/__tests__/.*\\.(test|spec)\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
//# sourceMappingURL=jest.config.js.map