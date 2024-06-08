module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-undef": ["off"],
    "react/prop-types": ["off"],
    "react/display-name": ["off"],
    "react-hooks/rules-of-hooks": ["off"],
    "react-hooks/exhaustive-deps": ["off"],
    "import/no-named-as-default": 0,
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/prefer-as-const": ["off"],
    "prefer-const": ["off"],
    "@typescript-eslint/no-var-requires": ["off"],
  },
};
