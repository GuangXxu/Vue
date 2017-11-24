<template>
  <article class="shopcart-list">

    <!-- 商品列表 -->
    <div class="goods" v-for="goods in buyGoodsList" :key="goods.id">
      <mt-switch class="switch" v-model="goods.isSelected"></mt-switch> <img class="img" v-bind:src="goods.thumb_path">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{ goods.title }}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{ goods.sell_price }}</li>
            <li>
              <app-numbox v-bind:initVal="$store.state.goodsData[goods.id]" v-on:change="modifyBuyData(goods.id,$event)"></app-numbox>
            </li>
            <li>
              <a href="javascript:void(0)" @click="delGoods(goods.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品{{ buyTotal }}件,总价:￥{{ buyPriceTotal }}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary">付 款</mt-button>
      </div>
    </div>
  </article>
</template>

<script>
import Storage from "../../js/storage.js";
export default {
  data() {
    return {
      buyGoodsList: [],
    };
  },
  methods: {
    //获取购物车里所有的商品信息
    getbuyGoodsList() {
      let ids = Object.keys(Storage.get("goodsData")).join(",");
      if(!ids){
        return
      }
      this.axios
        .get(this.url.shopcL + ids)
        .then(rep => {
            rep.data.message.forEach( goods => goods.isSelected = true);
            this.buyGoodsList = rep.data.message;
        });
    },
       // 修改购买数据
    modifyBuyData(id,val){
      this.$store.commit('upBuyData',{
        id:id,
        total:val
      })
    },
    //删除商品
    delGoods(id){
        this.$store.commit('delBuyTotal',{
          id:id
        });
        this.buyGoodsList = this.buyGoodsList.filter(v => v.id != id);
    }
  },
  created() {
    this.getbuyGoodsList();
  },
  //计算属性
  computed: {
    // 已勾选的商品总件数
    // selectedGoodsTotal() {
    //   // 遍历购物车商品列表, 如果该商品是选中状态, 那么获取这个商品的购买数量累加起来
    //   let sum = 0;
      // this.buyGoodsList.forEach( goods => {
      //   if ( goods.isSelected ) {
      //     sum += this.getBuyCountById(goods.id);
      //   }
      // });
    //   return sum;
    // },
    // 已勾选的商品总价格
    // selectedGoodsPrice(){
    //   let sum = 0;
      // this.buyGoodsList.forEach( goods => {
      //   if ( goods.isSelected ) {
      //     sum += this.getBuyCountById(goods.id) * goods.sell_price;
      //   }
      // });
    //   return sum;
    // }

        // 总数
    buyTotal() {
      return this.buyGoodsList.reduce((sum, goods) => {
        // reduce方法每次把上一次的sum结果传递进来, 供我们继续累加,
        // 如果商品为选中状态我们就累加, 否则原物传递到下一次计算
        return goods.isSelected? sum + this.$store.state.goodsData[goods.id] : sum
      }, 0);
    },

    // 总价
    buyPriceTotal() {
      return this.buyGoodsList.reduce((sum, goods) => {
        // reduce方法每次把上一次的sum结果传递进来, 供我们继续累加,
        // 如果商品为选中状态我们就累加, 否则原物传递到下一次计算
        return goods.isSelected? sum + this.$store.state.goodsData[goods.id] * goods.sell_price : sum
      }, 0);
    }
  },
};
</script>

<style lang="less">
.shopcart-list {
  .goods {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    height: 102px;
    display: flex;
    padding: 5px;
    .switch {
      flex: 0 0 52px;
    }
    .img {
      margin-left: 5px;
      height: 75px;
      width: 75px;
      flex: 0 0 85px;
    }
    .inforight {
      margin-left: 5px;
      flex: 1;
    }
    .inforight ul {
      padding-left: 0px;
    }
    .inforight li {
      list-style: none;
      display: inline-block;
    }
    .inforight h4 {
      color: #0094ff;
      font-size: 14px;
    }
    .bottom li:first-child {
      color: red;
      margin-right: 5px;
    }
    .bottom li:last-child {
      margin-left: 5px;
    }
  }
  .total {
    height: 84px;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 5px 14px;
    ul {
      padding-left: 0px;
      margin: 14px 0;
      li {
        list-style: none;
        font-size: 14px;
      }
    }
    &_val {
      flex: 1;
    }
    &_btn {
      flex: 0 0 60px;
      margin: 18px 0 0 0;
    }
  }
}
</style>