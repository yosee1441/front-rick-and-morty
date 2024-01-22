export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    'coverage',
    'node_modules',
    'mocks',
    'dist',
    '.eslintrc.cjs',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@dist/(.*)$': '<rootDir>/dist/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/mocks/'],
  setupFilesAfterEnv: ['./src/test/setupTests.ts'],
}
