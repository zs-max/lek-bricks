import vue from 'rollup-plugin-vue'
import css from "rollup-plugin-css-only";
import {name} from '../package.json'

// file：添加一个函数，动态生成名称，file类型有两种 esm 和umd
const file = type => `dist/${name}.${type}.js`
export  default {
  input: 'src/App.vue', //使用测试的app.vue
  output: {
    name,
    file:file('esm'),
    format: 'es'
  },
  plugins:[
      vue(),
      css({output: 'dist/bundle.css'})
  ]
}