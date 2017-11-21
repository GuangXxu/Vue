<template>
  <article class="goods-list">
    <app-nav :tit="title"></app-nav>
    <ul class="mui-table-view mui-grid-view">
      <!-- 商品详情 -->
      <li v-for="item in goodsList" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-6">
      	<router-link v-bind:to="{ name:'gd',params:{ id: item.id } }">
	        <div class="mui-card">
	          <!-- 商品图片 -->
	          <div class="mui-card-header">
	          	<img v-bind:src="item.img_url" alt="" />
	          </div>
	          <!-- 商品描述 -->
	          <div class="mui-card-footer ">
	            <p class="mui-ellipsis-2">{{ item.title }}</p>
	          </div>
	          <!-- 商品价格 -->
	          <div class="mui-card-content">
	            <p class="price">
	            	<span>￥{{ item.sell_price }}</span>
	            	<s>￥{{ item.market_price }}</s>
	            </p>
	            <p class="tip">
	            	<span>热卖中</span>
	            	<span>剩余{{ item.stock_quantity }}件</span>
	            </p>
	          </div>
	        </div>
        </router-link>
      </li>
    </ul>
    <!-- 加载更多 -->
    <button class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" v-on:click="clickGetG" v-bind:disabled="isLast">
      {{ isLast?'已经是最后一页':'加载更多' }}
    </button>
  </article>
</template>

<script>
export default {
  data(){
    return {
      title:'商品栏',
      goodsList:[],
      pageIdex: 1 ,
      isLast: false
    }
  },
  methods:{
    //获取商品列表
    getGoodsList(pageIdex){
      if( !this.isRequest ){
          this.axios.get(`${ this.url.goodsL }?pageindex=${ this.pageIdex }`)
          .then( rep => {
              // alert(12)
              this.goodsList.push(...rep.data.message);
              // 短路运算 
              rep.data.message.length == 0 && ( this.isLast = true );
        } );
      }
      
    },
    clickGetG(){
      this.pageIdex ++;
      this.getGoodsList();
    }
  },
  created(){
    this.getGoodsList();
  }
}
</script>

<style lang="less">
  .goods-list {
  	.mui-card {
  		box-shadow: 0px 0px 4px rgba(0, 0, 0, .3);
  	}
  	.mui-card-header {
  		padding: 8px;
  		/*height: 100px;*/
  		img {
  			width: 100%;
  			height: 100%;
  		}
  	}
    .mui-card-content {
      text-align: center;
      .price {
        margin-bottom: 4px;
        color: #000;
        span {
          color: red;
        }
      }
      .tip {
        overflow: hidden;
        padding: 0 8px;
        font-size: 12px;
        span:first-child {
          float: left;
        }
        span:last-child {
          float: right;
      }
    }
  }
  }
</style>