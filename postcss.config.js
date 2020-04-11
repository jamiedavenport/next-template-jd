/* eslint @typescript-eslint/explicit-function-return-type: 0 */

const purgecss = {
  '@fullhuman/postcss-purgecss': {
    content: [
      './components/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
    ],
    whitelist: ['html', 'body'],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? purgecss : {}),
  },
};
