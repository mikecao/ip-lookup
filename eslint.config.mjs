import nextConfig from 'eslint-config-next';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = [
  ...nextConfig,
  prettierRecommended,
  {
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
  {
    ignores: ['node_modules/**', 'dbs/**'],
  },
];

export default eslintConfig;
