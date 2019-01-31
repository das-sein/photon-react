const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'sourcemap',
    mode: 'development',

    entry: path.join(__dirname, 'src/', 'app.jsx'),

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, 'src/', 'index.html'),
        }),
    ],

    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist/'),
    }
};
