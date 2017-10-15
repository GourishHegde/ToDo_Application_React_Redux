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
              },
              {
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
