module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/tests/$1'
  },
  testMatch: [
    '**/tests/**/*.spec.ts',
  ],
}
