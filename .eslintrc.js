module.exports = {
  extends: [
    '../linters/packages/eslint-config/app.js',
    '../linters/packages/eslint-config-react',
  ],
  settings: {
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      tsconfigRootDir: __dirname,
    },
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        map: [['@', './src']],
      },
    },
  },
};
