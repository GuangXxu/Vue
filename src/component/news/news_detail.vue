<template>
    <article>
      <!-- 返回上页送的nav组件 -->
        <app-nav :tit="title"></app-nav>
        <!-- mui  -->
        <div class="mui-card" v-for="item in detail" v-bind:key="item.id">
            <div class="mui-card-header" >
              <h4>{{ item.title }}</h4>
              <p calss="">
                <span>发表于:{{ item.add_time | date }}</span>　
                <span>{{ item.click }}次浏览</span></p>
            </div>
          <div class="mui-card-footer" v-html= 'item.content'>
          </div>
        </div>
        <!-- 评论组件 -->
        <app-ment></app-ment>
  </article>
</template>
<script>
export default {
  data() {
    return {
      title: "资讯详情",
      detail: []
    };
  },
  methods: {
    // 获取新闻详情信息
    getnewsC() {
      this.axios
        .get(this.url.getND + "/" + this.$route.params.id)
        .then(rep => (this.detail = rep.data.message));
    }
  },
  created() {
    this.getnewsC();
  }
};
</script>
<style lang="less">
.mui-card-header, .mui-card-footer{
  display: block;
}
img{
  width:100%;
}
</style>