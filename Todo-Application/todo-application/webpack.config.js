var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: `${__dirname}/src/app.js`,
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             },
             {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
              },
              {
  // Transform our own .css files with PostCSS and CSS-modules
  test: /\.css$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader'],
}, {
  // Do not transform vendor's CSS with CSS-modules
  // The point is that they remain in global scope.
  // Since we require these CSS files in our JS or CSS files,
  // they will be a part of our compilation either way.
  // So, no need for ExtractTextPlugin here.
  test: /\.css$/,
  include: /node_modules/,
  use: ['style-loader', 'css-loader'],
}
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
