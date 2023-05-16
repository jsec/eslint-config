module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'import',
        'simple-import-sort',
        'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'xo',
        'xo-typescript',
        'plugin:prettier/recommended'
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
        "no-warning-comments": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error"
    }
}
