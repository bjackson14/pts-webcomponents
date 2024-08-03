import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/pts-webcomponents.esm.js',
      format: 'esm',
      name: 'PTSWebcomponents',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    terser()
  ]
};
