import vue from 'rollup-plugin-vue'
import css from "rollup-plugin-css-only";
import { name } from '../package.json'
import typescript from "rollup-plugin-typescript2";
import {nodeResolve} from '@rollup/plugin-node-resolve'

const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: ['node_modules/**','src/App.vue','src/main.ts'],
};

// file：添加一个函数，动态生成名称，file类型有两种 esm 和umd
 const file = type => `dist/${name}.${type}.js`

export {name,file}
export default {
  input: 'src/index.ts', //使用组件库入口文件
  output: {
    name,
    file: file('esm'),
    format: 'es',
    globals: {
      vue: 'Vue',
      'lodash-es': '_',
    }
  },
  // external: ['vue', 'lodash-es'],
  external: (id) => {
    return /^vue/.test(id)
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: overrides,
      abortOnError: true, // 不让报错影响后续的打包行为
      check: false
    }),
    vue(),
    css({ output: 'dist/bundle.css' })
  ]
}