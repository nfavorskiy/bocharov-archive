import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
        "complexity": ["error", 2]
    }
}
];