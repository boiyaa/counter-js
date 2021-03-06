module.exports = baseConfig => {
  const config = Object.assign({}, baseConfig)

  // Enable .eslintrc
  config.module.rules[0].use[0].options.useEslintrc = true

  // Enable .babelrc
  config.module.rules[3].options.babelrc = true

  // Add Elm support
  config.module.rules[1].exclude.push(/\.elm$/)
  config.module.rules.push({
    exclude: [/elm-stuff/, /node_modules/],
    loader:
      "elm-hot-loader!elm-webpack-loader?verbose=true&warn=true&debug=true",
    test: /\.elm$/
  })

  return config
}
