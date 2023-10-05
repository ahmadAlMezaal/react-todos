module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    ignorePatterns: [".eslintrc.js"],
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        'semi': [1, 'always'],
        'quotes': [1, 'single', { 'avoidEscape': true }],
        'no-multiple-empty-lines': [1, { 'max': 1, 'maxEOF': 0 }],
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error'],
        'no-console': 'warn',
        'no-trailing-spaces': 'warn',
        'eol-last': ['warn', 'always'],
        "no-unused-vars": "off",
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'no-empty': 'off',
    }
};