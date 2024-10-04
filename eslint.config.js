const js = require("@eslint/js")
const react = require("eslint-plugin-react")
const globals = require("globals")

module.exports = [
  js.configs.recommended,
  {
    ignores: ["**/node_modules/**"],
  },
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // Includes globals like window, document, fetch, etc.
        ...globals.node, // Includes Node.js globals like process, require, etc.
      },
    },
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable React in scope for JSX files
      "react/jsx-uses-react": "error", // Avoid false positives for unused React
      "react/jsx-uses-vars": "error", // Avoid false positives for unused vars
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
]
