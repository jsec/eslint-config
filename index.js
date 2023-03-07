module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'import',
        'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'xo',
        'xo-typescript'
    ],
    rules: {
        "comma-dangle": "off",
        "object-curly-spacing": "off",
        "operator-linebreak": "off",
        "no-mixed-spaces-and-tabs": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/object-curly-spacing": "off",
        "no-unused-vars": "off",
        "no-warning-comments": "off"
    }
}
