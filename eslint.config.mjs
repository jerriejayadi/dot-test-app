import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-undef": ["off"],
      "react/prop-types": ["off"],
      "react/display-name": ["off"],
      "react-hooks/rules-of-hooks": ["off"],
      "react-hooks/exhaustive-deps": ["off"],
      "import/no-named-as-default": 0,
      "no-unused-vars": ["warn"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/prefer-as-const": ["off"],
      "prefer-const": ["off"],
      "@typescript-eslint/no-var-requires": ["off"],
      "react/react-in-jsx-scope": "off",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
