var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname,
    entry: {
        main: './src/app.js',
    },
    output: {
        path: './dist/js/',
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            query: {
                presets: ['latest']
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader',
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: 'webpack is good',
            date: new Date(),
            hehe: 'hehe',
            minify: {
                removeComments: true,
            }
        }),
        new webpack.LoaderOptionsPlugin({//注意这里配置了autoprefixer插件，前面你要有const webpack 
            options: {                    //和const autoprefixer的声明
                postcss: function() {
                    return [autoprefixer];
                }
            }
        })
    ]
}
