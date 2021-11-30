/**
 * Bedrock configuration
 * For docs, see https://bedrockapp.org/documentation/configuration/ 
 * Inline docs available in the default config object
*/

module.exports = {
  pageTree: {
    layoutStyle: 'sidebar' // 'sidebar' or 'fixed'
  },
  js: {
    minify: false
  },
  css: {
    compiler: 'scss',
    minify: false,
    purge: false
  },
  styleguide: {
    url: '/styleguide',
    overrideStyleguideTemplates: true,
    search: true,
    colors: './content/scss/_colors.scss',
    categoryOrder: [
      'Style guide',
      'Design patterns',
      'Components'
    ],
    componentCategories: {
      aov: 'Overviews',
      c: 'Components',
    },
    codeSamples: {
      jsx: false
    }
  },
};
