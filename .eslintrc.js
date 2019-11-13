// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: [
//     "plugin:vue/recommended",
//     "eslint:recommended",
//     "prettier/vue",
//     "plugin:prettier/recommended"
//   ],
//   rules: {
//     "vue/component-name-in-template-casing": ["error", "PascalCase"],
//     "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
//   },
//   globals: {
//     $nuxt: true
//   },
//   parserOptions: {
//     parser: "babel-eslint"
//   }
// };
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    $moment: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    camelcase: 'off',
    'no-unused-vars': 'off',
    'prop-name-casing': 'off',
    'semi': [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { 'semi': false }]
  }
}
