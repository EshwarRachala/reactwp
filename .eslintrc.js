// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  globals: {
    'react': true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  ecmaFeatures: { experimentalObjectRestSpread: true },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  extends: 'airbnb-base',
  extends: 'react',
  plugins: ['react'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'react/self-closing-comp':'off',
    'react/prop-types':'off',
    // 'import/extensions': ['error', 'always', {
    //   'js': 'never',
    //   'jsx': 'never',
    // }],
    // 'import/no-extraneous-dependencies': ['error', {
    //   'optionalDependencies': ['test/unit/index.js']
    // }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
