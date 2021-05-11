const presets = [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1'
        },
        useBuiltIns: 'usage',
        corejs: '3.0.0',
      }
    ],
    '@babel/typescript'
  ];
  
const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: false }]
];

module.exports = {
  presets,
  plugins
};
