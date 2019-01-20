const path = require('path');

module.exports = (base, type) => {
    base.module.rules.push({
        test: /\.scss$/,
        use: 'sass-loader',
        include: path.resolve(__dirname, '../src')
    });
    base.module.rules.push({
        test: /\.svg$/,
        use: 'svg-react-loader',
        include: path.resolve(__dirname, '../node_modules/photon-icons/icons/desktop')
    });
    base.resolve.extensions.push(
        '.js',
        '.jsx',
        '.ts',
        '.scss',
    );

    return base;
};
