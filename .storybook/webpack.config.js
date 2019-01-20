module.exports = {
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                allowSyntheticDefaultImports: true,
                                jsx: "react",
                                lib: ["dom", "es2018"],
                                module: "es6",
                                target: "es2018"
                            }
                        }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            'src', 'node_modules'
        ],
        extensions: ['.json', '.js', '.ts', '.tsx', '.scss']
    }
}
