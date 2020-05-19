module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'parser': 'babel-eslint'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': 'off',
        'semi': [
            'error',
            'never'
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'vue/valid-v-for': 'off',
        'vue/require-v-for-key': 'off',
        'vue/no-unused-vars': 'off',
    }
}
