const path = require('path');

module.exports = (base, type) => {
    base.module.rules.push({
        test: /\.scss$/,
        use: 'sass-loader',
        include: path.resolve(__dirname, '../src')
    });
    base.resolve.extensions.push(
        '.js',
        '.jsx',
        '.ts',
        '.scss',
    );

    return base;
};
