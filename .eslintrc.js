module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "prettier", "import"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // turn on errors for missing imports
    "import/no-unresolved": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/ignore": ["node_modules"],
  },
  overrides: [
    {
      files: ["src/migration/*.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
};
