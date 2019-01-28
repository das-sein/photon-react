import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';

import pkg from './package.json';


export default {
    input: 'src/main.js',
    output: [
        { file: pkg.main, format: 'cjs' }
    ],
    external: ['react'],
    plugins: [
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.json']
        }),
        commonjs(),
        sass({ insert: true }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/react']
        })
    ]
};
