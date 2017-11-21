//编写一个属于自己的的公共Vue组件库
import NavcomComponent from './navcom.vue';

// Vue 插件要求提供一个install方法，这个方法会被注入Vue
//需要我们调用Vue的filter component directive 去扩展

export default {
    install(Vue){
        //声明成全局组件
        Vue.component('app-nav',NavcomComponent);
    }
}