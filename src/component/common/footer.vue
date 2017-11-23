<template>
  <footer>
      <!-- mui -->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/index">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" v-bind:to="{ name:'gl',params:{ id : 0 } }">
            <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
            <span class="mui-tab-label">商品购买</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcart">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{ $store.getters.getBuyTotal }}</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/stting">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
        </router-link>
    </nav>
    <i></i>
  </footer>
</template>
<script>
import Storage from '../../js/storage.js';
    export default {
        data(){
            return {
                buyCountSum:0
            }
        },
        methods:{
            getbuyCount(){
                let countSum = Storage.get('goodsData');
                for(var key in countSum){
                    this.buyCountSum += countSum[key];
                }
            }
        },
        created(){
            this.getbuyCount();
        }
    }
</script>
<style lang="less" scoped>
i{
    display: block;
   height: 50px;
}

</style>

