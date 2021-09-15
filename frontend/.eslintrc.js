module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "relay"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "relay/graphql-syntax": "error",
    "relay/compat-uses-vars": "warn",
    "relay/graphql-naming": "error",
    // "relay/generated-flow-types": "warn",
    "relay/must-colocate-fragment-spreads": "warn",
    "relay/no-future-added-value": "warn",
    "relay/unused-fields": "warn",
    "relay/function-required-argument": "warn",
    "relay/hook-required-argument": "warn",

    // disabled rules
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
