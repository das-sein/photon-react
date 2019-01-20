import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';


export default {
    input: 'src/main.js',
    output: [
        { file: pkg.main, format: 'cjs' }
    ],
    external: ['react'],
    plugins: [
        commonjs(),
        resolve()
    ]
};
