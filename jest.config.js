module.exports = {
    preset: "ts-jest",
    // testEnvironment: "jsdom",
    // transform: {
    //   "^.+\\.(js|ts)$": "ts-jest",
    // },
    testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
    moduleDirectories: ['node_modules', './']
  };