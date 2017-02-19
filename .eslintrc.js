// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    ecmaFeatures: { experimentalObjectRestSpread: true },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },

    extends: 'eslint:recommended',
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
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
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}