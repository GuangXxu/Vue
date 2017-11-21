<template>
  <article class="goods-detail">
    <app-nav :tit="titl"></app-nav>     
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{ goods.title }}</div>
       <!-- mint ui  轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="gimg in Glbs" v-bind:key="gimg.url">
                <img v-bind:src="gimg.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{ goods.market_price }}</s> <span>销售价: </span> <em>￥{{  goods.sell_price }}</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <app-numbox initVal="1" @change="getTotal"></app-numbox>
        </div>
      </div>
      <!-- 商品简介 -->
      <div class="goods">
        <!-- <hr> -->
        <h4>&nbsp商品详情</h4>
        <span> &nbsp商品型号：{{ goods.goods_no }}</span><br>
        <span> &nbsp上市时间：{{ goods.add_time | date }}</span><br>
        <span> &nbsp商品库存：{{ goods.stock_quantity }}</span>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>
		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		  <mt-navbar v-model="navbarSelected">
			  <mt-tab-item id="comment">商品评论</mt-tab-item>
			  <mt-tab-item id="content">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
		  <mt-tab-container v-model="navbarSelected">
			  <mt-tab-container-item id="comment">
			    <app-ment></app-ment>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="content">
			    <div v-html="goodsCon.content" v-bind:key="goodsCon.id"></div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div> 
  </article>
</template>

<script>
import CommentComponent from '../comment/comment.vue';
export default {
  data() {
    return {
      titl: "商品详情",
      Glbs:[],
      goodsCon: {},
      goods: {},
      id:this.$route.params.id,
      navbarSelected:'content'
    };
  },
  components:{
    'app-ment':CommentComponent
  },
  methods: {
    //获取商品详细信息
    getCon() {
      this.axios
        .get(this.url.goodsD + this.id)
        .then(rep => (this.goodsCon = rep.data.message[0]));
    },
    //获取商品信息
    getGDetail() {
      this.axios
        .get(this.url.goodsP + this.id)
        .then(rep => (this.goods = rep.data.message[0]));
    },
    //获取轮播图
    getGLB(){
        this.axios.get(this.url.goodsT + this.id )
        .then( rep => this.Glbs = rep.data.message )
    },
    // 获取最新的购买数量
    getTotal( total ){
      console.log(total);
    }
  },
  created() {
      this.getGLB();
      this.getCon();
      this.getGDetail();
  }
};
</script>

<style lang="less">
.goods{
  border-top:1px solid #ccc;
  height:120px;
h4{
  line-height: 34px;
  margin:0;
}
span{
  margin:0;
  line-height: 26px;
}
}

.mint-swipe{
    height:310px;
    img{
      display: block;
      margin:auto;
        max-width:100%;
        height:300px;
    }
    .mint-swipe-indicators{
        bottom:20px !important;
    }
}
.goods-detail {
  .mui-card-content-inner{
    border-top:1px solid #ccc;
  }
  .mui-card-content {
    .price {
      color: rgb(51, 51, 51);
      line-height: 26px;
      span {
        margin-left: 6px;
      }
      em {
        font-size: 18px;
        color: red;
      }
    }
  }
  .mui-card-footer {
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;    
    div {
      width: 100%;
    }
    .mui-btn {
      padding: 8px 0;
      font-size: 16px;
    }
  }
  .mint-tab-item {
    &.is-selected {
      margin-bottom: 0;
      border-bottom: 3px solid #2ce094;
      color: #2ce094;
    }
  }
  .mint-tab-item-label {
    font-size: 18px !important;
    color: #2ce094;
  }
}
.mint-tab-container-item {
  margin-top: 10px;
  width: 100%;
  p {
    padding: 2px;
    font-size: 16px;
    color: #333;
  }
}

.mui-card{
  margin:0 10px;;
}
</style>