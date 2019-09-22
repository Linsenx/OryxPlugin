import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './oryx.js',
  output: {
    name: 'Oryx',
    format: 'umd',
    file: './dist/oryx.min.js'
  },
  plugins: [ babel({ runtimeHelpers: true }), resolve(), commonjs(), uglify() ]
};