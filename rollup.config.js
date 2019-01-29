import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import reactSvg from 'rollup-plugin-react-svg';
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
            extensions: ['.js', '.jsx', '.json', '.scss'],
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/react']
        }),
        commonjs(),
        sass({ insert: true }),
        reactSvg({
            svgo: {
                multipass: true
            },
            jsx: true,
            include: 'node_modules/photon-icons/icons/desktop/**'
        })
    ]
};
