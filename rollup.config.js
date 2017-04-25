// rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import livereload from 'rollup-plugin-livereload'

export default {
    entry: 'src/main.js',
    dest: 'build/bundle.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        eslint({
            exclude: [
                'src/styles/**',
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        // uglify(),
        livereload()
    ],
};