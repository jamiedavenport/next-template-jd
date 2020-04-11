const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.tsx'],
  addons: ['@storybook/addon-viewport/register'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname),
            },
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
