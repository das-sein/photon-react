import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript';

import pkg from './package.json';


export default {
    input: 'src/main.ts',
    output: [
        { file: pkg.main, format: 'cjs' }
    ],
    external: ['react'],
    plugins: [
        resolve(),
        commonjs(),
        sass({ insert: true }),
        typescript(),

    ]
};
