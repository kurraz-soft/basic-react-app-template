const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: ['./src/app.js', './src/sass/style.sass'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                use: 'css-loader',
            },
            {
                test: /\.(sass|scss)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
          filename: 'bundle.css'
        })
    ],
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 9000
    }
};
module.exports = config;