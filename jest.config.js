const defaults = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: './coverage/',
  setupFilesAfterEnv: ['<rootDir>/.jest.init.js'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/+(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.cache/']
}
module.exports = {
  projects: [
    {
      ...defaults,
      displayName: 'base',
      globals: {
        TEST_TARGET: 'function'
      },
      moduleFileExtensions: ['js', 'json'],
      testEnvironment: 'node'
    },
    // {
    //   ...defaults,
    //   displayName: 'web',
    //   globals: {
    //     TEST_TARGET: 'web'
    //   },
    //   moduleFileExtensions: ['web.js', 'js', 'json'],
    //   testEnvironment: 'jsdom',
    //   testURL: 'http://localhost'
    // },
    {
      ...defaults,
      displayName: 'ssr',
      globals: {
        TEST_TARGET: 'ssr'
      },
      moduleFileExtensions: ['ssr.js', 'web.js', 'js', 'json'],
      testEnvironment: 'node'
    }
  ]
}
