module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'log', 'warn', 'error', 'group', 'groupEnd']
      }
    ],
    'object-shorthand': 0,
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: []
      }
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'p', 'span', 'v-icon', 'strong']
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
