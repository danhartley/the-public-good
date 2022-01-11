module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      // transform files with ts-jest
      "^.+\\.(js|ts)$": "ts-jest",
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
    moduleDirectories: ['node_modules', './']
  };