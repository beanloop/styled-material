function tlrb(prefix, suffix) {
  const rules = []

  if (suffix) {
    prefix = `${prefix}-`
    rules.push(prefix + suffix)
    suffix = `-${suffix}`
  } else if (prefix) {
    rules.push(prefix)
    prefix = `${prefix}-`
    suffix = ''
  } else {
    prefix = ''
    suffix = ''
  }

  return rules.concat([
    `${prefix}top${suffix}`,
    `${prefix}left${suffix}`,
    `${prefix}right${suffix}`,
    `${prefix}bottom${suffix}`,
  ])
}

const displayAndPositioning = [
  'content',
  'display',
  'visibility',
  'position',
]
  .concat(tlrb())
  .concat([
    'align-content',
    'align-items',
    'align-self',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'justify-content',
    'order',
  ])
  .concat([
    'float',
    'clear',
  ])

const sizing = [
  'box-sizing',
]
  .concat(tlrb('margin'))
  .concat(tlrb('padding'))
  .concat([
    'width',
    'min-width',
    'max-width',

    'height',
    'min-height',
    'max-height',

    'overflow',
  ])

const apperance = [
  'opacity',
  'color',

  'background',
  'background-color',
  'background-image',
  'background-position',
  'background-repeat',
  'background-size',
]
  .concat(tlrb('border'))
  .concat(tlrb('border', 'width'))
  .concat(tlrb('border', 'color'))
  .concat([
    'border-collapse',
    'border-spacing',
  ])
  .concat(tlrb('border', 'style'))
  .concat([
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
  ])
  .concat(tlrb('outline'))
  .concat(tlrb('outline', 'width'))
  .concat(tlrb('outline', 'color'))
  .concat(tlrb('outline', 'style'))
  .concat(['box-shadow'])

const text = [
  'font',
  'font-family',
  'font-size',
  'font-weight',
  'font-smoothing',
  'font-style',
  'font-variant',

  'letter-spacing',
  'line-height',

  'text-align',
  'text-decoration',
  'text-indent',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-transform',
  'text-wrap',

  'vertical-align',
  'white-space',
]

const other = [
  'list-style',
  'caption-side',
  'cursor',
  'empty-cells',
  'quotes',
  'speak',
  'table-layout',

  'animation',
  'transform',
  'transition',
]

module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    'declaration-block-properties-order': [
      {properties: displayAndPositioning},
      {properties: sizing},
      {properties: apperance},
      {properties: text},
      {properties: other},
    ],

    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'string-quotes': 'single',

    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    'color-named': 'always-where-possible',
    'declaration-no-important': true,
    'max-line-length': 100,
    'no-browser-hacks': true,
  },
}
