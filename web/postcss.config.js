// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// module.exports = ({file, options, env}) => ({
//   plugins: {
//     'postcss-import': {},
//     cssnano: env === 'production' ? {} : false,
//     'postcss-preset-env': {
//       stage: 0,
//       features: {
//         'color-mod-function': {unresolved: 'warn'},
//         'nesting-rules': true
//       }
//     }
//   }
// })
