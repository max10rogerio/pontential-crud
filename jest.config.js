module.exports = {
  clearMocks: true,
  maxWorkers: 1,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/*.test.[jt]s",
    "**/__tests__/**/*.[jt]s?(x)",
    "!**/__tests__/coverage/**",
    "!**/__tests__/utils/**",
    "!**/__tests__/images/**",
  ],
};
