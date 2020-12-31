module.exports = {
    testEnvironment: 'node',
    testEnvironmentOptions: {
      NODE_ENV: 'test',
    },
    restoreMocks: true,
    coveragePathIgnorePatterns: ['node_modules', 'src', 'tests'],
    coverageReporters: ['text', 'lcov', 'clover', 'html'],
  };