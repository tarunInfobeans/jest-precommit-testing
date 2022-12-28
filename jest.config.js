module.exports = {
  collectCoverageFrom: ["**/*.js", "!**/node_modules/**"],
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  testSequencer: "./testSequencer.js",
  testMatch: ["**/*.test.js"],
};
