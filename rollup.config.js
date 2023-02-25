/*
 * @Author: Chaoyue
 * @Date: 2023-02-25 14:30:06
 * @LastEditors: Chaoyue
 * @LastEditTime: 2023-02-25 14:41:04
 * @FilePath: \demo-vueCode\rollup.config.js
 * @FileDescribe: 
 */
import babel from 'rollup-plugin-babel'
export default {
  input: './src/index.js',
  output: {
    file: './dist/vue.js',
    name: 'Vue',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}