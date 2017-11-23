// 要把组件渲染到页面中, 我们就必须要导入Vue这个库, 然后才可以new他
// es6语法导入的Vue与我们在浏览器中使用的Vue有点小区别, 失去了浏览器模版编译功能,
// 失去该功能的原因是, 你使用es6语法, vue知道你一定使用了构建工具, 那么使用构建工具,
// 你应该会使用vue-loader, 使用了vue-loader他会在本地打包时把模版编译好, 
// 在浏览器中直接使用, 相比咱们以往的方式性能会有提升.

//到入第三方包
import Vue from 'vue';
//导入mint-ui
import  MintUi from 'mint-ui';
//导入mint-ui的css样式
import 'mint-ui/lib/style.css';
//导入自己的组件  它自己会找到index.js文件
import Common from '../component/common';
import Navcom from '../component/navcom';
//导入less样式
import'../less/index.less';
//导入时间过滤器
import Filter from '../filter';

//导入mui的css样式
import'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';

//懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

//vue-picture-perview插件
import VuePP from 'vue-picture-preview';
Vue.use(VuePP);
//路由插件
import VueRouter from 'vue-router';
//axios插件 ==ajax
import axios from 'axios';
import Vuex from "vuex";

//1.2手动开启vue插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);
Vue.use(Filter);
Vue.use(Navcom);
Vue.use(Vuex);


//2.0导入根组件
import AppComponent from '../component/App.vue';

//2.1导入配置
import routerConfig from '../router';//会找到index.js文件
import Url from './api_config.js';
import store from '../vuex';//会找到index.js文件

//2.3扩展实例对象
// 把axios库放置到原型, 将来其他组件直接可以拿到axios对象
Vue.prototype.axios = axios;
Vue.prototype.url = Url;

//2.2渲染根组件，启动项目
new Vue({
    el: '#app',
    // 以前这里写的是template与methods等等东西,
    // 现在这些代码都统一放在了App.vue里面来写, 
    // App.vue就是咱们项目的根组件
    render(createNode) {
        //这个函数需要我们返回一个组件，把返回的组件渲染到el标签中
        return createNode(AppComponent);
    },
    //启用路由
    router: new VueRouter(routerConfig),
    store: new Vuex.Store(store)
});