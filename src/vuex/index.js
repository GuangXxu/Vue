

//引入Vue
import Vue from 'vue';
import Storage from '../js/storage.js';
export default {
    // 定义状态, 相当于组件的data
    // 区别是这里的数据共享, 那都可以通过$store.state.属性名的方式使用
    state:{
        //从localStorage中取出购买数据进行共享
        goodsData:Storage.get('goodsData')||{}
    },
    // 定义计算属性, 相当于组件的computed
    getters:{
        //计算购买总数
        getBuyTotal(state){
            // 先拿到每个商品数量, 然后使用reduce累加起来
           return Object.values(state.goodsData).reduce((sum , val) => sum + val , 0)
        }
    },
    // 定义修改方法, 相当于组件的methods
    mutations:{
        // 修改单个商品的购买数量
        upBuyData(state,params){
            // 拿到id与新数量, 修改goodsBuyData
            // 然后把修改后的goodsBuyData存储到本地storage
            // state.goodsData[params.id] = params.total;
            //上面的方法存在bug点击加入购物车时，购买的商品数量信息不能同步；
            //由于新添加的属性，Vue监听不到，故该用Vue的set方法；
            //（Vue解析时会给所有的对象、属性上设置有 get..  set.. 监听，当其发生变化时Vue时可以经监听的到的，但是如果对象的属性之前不存在，后续添加上，Vue是监听不到的，只用使用Vue的set方法设置新增的属性，Vue才能监听到；）
            Vue.set(state.goodsData, params.id, params.total);
            Storage.set('goodsData',state.goodsData);
        },
        // 删除单个商品的购买数量
        delBuyTotal(state,params){
            // 拿到商品id, 使用Vue提供的专属方法删除该商品数量
            // 然后把修改后的goodsBuyData存储到本地storage
            Vue.delete(state.goodsData,params.id);//由于删除商品数据是不能直接只用delete方法，故使用Vue的delete方法删除想要删除的商品数据；
            Storage.set('goodsData',state.goodsData);            
        }
    }
}