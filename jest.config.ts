/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Root the project at the repo root
  roots: ['<rootDir>'],
  // Discover tests wherever they are: in __tests__ folders or as *.test / *.spec files
  testMatch: ['**/__tests__/**/*.[tj]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  // Ignore built artifacts and coverage from test runs
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(uuid)/)'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Collect coverage from source files only, ignore test files and declarations
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/__tests__/**', '!src/**/*.{spec,test}.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  verbose: true,
  testTimeout: 10000
}
