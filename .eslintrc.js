module.exports = {
  extends: ['@uspect/eslint-config/app', '@uspect/eslint-config-react'],
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
