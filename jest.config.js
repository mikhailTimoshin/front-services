module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1'
  },
  testMatch: [
    '**/tests/**/*.spec.ts',
  ],
}
