import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Ignore specific files and directories
  { ignores: ["dist", "node_modules", "tailwind.config.js"] },

  // Apply configurations for JavaScript and JSX files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier, // Prettier integration
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier", // Disable conflicting rules between ESLint and Prettier
      "plugin:prettier/recommended", // Enforces Prettier formatting
    ],
    rules: {
      // Use recommended rules for JavaScript
      ...js.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Customize rules
      "react/jsx-no-target-blank": "off", // Disable warnings for links with target="_blank"
      "prettier/prettier": "warn", // Run Prettier as an ESLint rule
    },
  },
];
