
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';




export default [{
    input: 'src/index.js',

    output: {
      file: pkg.main,
      format: 'es' },

  sourceMap: true,
    plugins: [
      resolve({
        modulesOnly: true
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  },

  {
    input: 'src/index.js',
    output: {
      name: 'rrc',
      file: 'dist/z.min.js',
      format: 'umd'
    },
    plugins:[
      resolve(), commonjs(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  }
  ]
