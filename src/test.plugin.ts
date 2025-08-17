import {App} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

const plugins = {
    install:(app: App)=>{
        // app 应用实例
        app.config.globalProperties.$echo = (msg: string) => {
            console.log(msg)
        }
        app.component('HelloWorld', HelloWorld)
        app.provide('test',{message:'from plugin'})
    }
}


export default plugins