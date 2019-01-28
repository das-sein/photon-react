const path = require('path');

module.exports = (base, type) => {
    base.module.rules.push({
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [{
            loader: 'file-loader',
        }],
        include: path.resolve(__dirname, '../node_modules/fira/')
    });
    base.module.rules.push({
        test: /\.scss$/,
        use: [
            {
                loader: 'resolve-url-loader',
                options: {
                    absolute: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    sourceMapContents: false
                },
            }
        ],
        include: path.resolve(__dirname, '../src')
    });
    base.resolve.extensions.push(
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.scss',
        '.woff',
        '.woff2',
        '.ttf',
        '.eof'
    );

    return base;
};
