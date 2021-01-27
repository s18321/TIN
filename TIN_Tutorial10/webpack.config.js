const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: 'production',
  entry: [ //'./src/converter/converter.js',
  '/src/converter/fahrenheitTo.js',
  '/src/converter/celsiusTo.js',
  '/src/converter/kelvinTo.js',
  '/src/converter/distance.js'
],
devtool: 'inline-source-map',
devServer: {
  contentBase: './dist',
},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'main'
  },
  
  
};