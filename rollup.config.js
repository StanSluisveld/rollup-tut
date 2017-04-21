// rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
    entry: 'src/main.js',
    dest: 'build/bundle.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        eslint({
            exclude: [
                'src/styles/**'
            ], 
        }),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
};