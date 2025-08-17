import LText from './components/LText'
import {App} from "vue";
const components = [ 
  LText,
]

const install = (app: App) => {
  components.map((component:any) => {
    app.use(component.name,component)
  })
}

/**
 * 可以导入单个组件
 */
export { 
  install,
  LText
}

/**
 * 默认导出
 */
export default {
  install
}