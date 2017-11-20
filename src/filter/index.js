//导入filter时间过滤器
import DateFilter from './filter.js';

export default {
    //绑定到Vue实例上
    install(Vue){
        Vue.filter('date',DateFilter);
    }
}