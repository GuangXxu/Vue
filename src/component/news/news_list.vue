<template>
  <article>
      <!-- 返回上页送的nav组件 -->
        <app-nav :tit="title"></app-nav>
       <!-- mui  -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="list in NewsList" v-bind:key="list.id">
                <router-link v-bind="{ to:`/news/detail/${list.id}` }" class="">
                    <img class="mui-media-object mui-pull-left" v-bind:src="list.img_url">
                    <div class="mui-media-body">
                        <h4 class="mui-ellipsis">{{ list.title }}</h4>
                        <p class="mui-ellipsis">发表时间：{{ list.add_time | date }} 　<span>点击{{ list.click }}</span> </p>
                    </div>
                </router-link>
            </li>
        </ul>

  </article>
</template>
<script>
export default {
    data() {
        return {
            title:'图文列表',
            NewsList: []
        };
    },
    methods: {
        // 获取所有的新闻内容
        getNewsList() {
        this.axios.get(this.url.getNL)
            .then(rep => (this.NewsList = rep.data.message));
    }
    },
    created() {
        this.getNewsList();
    }
};
</script>
<style lang="less" scoped>
div{
     p {
        font-size: 14px;
        color:#0062cc;
    }
    span{
        font-size: 14px;
        color:#0062cc;
        margin-right: 5px;
    }
}
   
</style>

