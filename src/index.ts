import LText from '@/components/LText'
import LImage from '@/components/LImage'
import LShape from '@/components/LShape'
import FinalPage from '@/components/FinalPage'

import {App} from "vue";
const components = [
  LText,
  LImage,
  LShape,
  FinalPage
]

const install = (app: App) => {
  components.map((component: any) => {
    app.use(component.name,component)
  })
}

/**
 * 可以导入单个组件
 */
export { 
  install,
  LText,
  LImage,
  LShape,
  FinalPage
}

/**
 * 默认导出
 */
export default {
  install
}