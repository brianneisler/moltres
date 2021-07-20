module.exports = {
  ignore: [/(node_modules)/],
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage',
      },
    ],
  ],
}
