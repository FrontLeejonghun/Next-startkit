const sortOrderSMACSS = require('stylelint-config-property-sort-order-smacss/generate');
module.exports = {
  extends: ['stylelint-config-prettier'],
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-case': 'lower',
    'comment-empty-line-before': 'always',
    'selector-list-comma-newline-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'number-leading-zero': 'always',
    'rule-empty-line-before': 'always-multi-line',
    'order/properties-order': sortOrderSMACSS(),
  },
};
