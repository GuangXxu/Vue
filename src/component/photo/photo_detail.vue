<template>
    <article>
        <!-- 返回上页送的nav组件 -->
        <app-nav :tit="title"></app-nav>
        <div class="mui-card" v-for="deta in details" :key="deta.id">
            <div class="mui-card-header" >
              <h4>{{ deta.title }}</h4>
              <p calss="">
                <span>发表于:{{ deta.add_time | date }}</span>　
                <span>{{ deta.click }}次浏览</span></p>
            </div>
            <!-- 图片列表 -->
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="list in imgList" :key="list.id">
                    <!-- v-preview指令是用来预览图片的插件指令 -->
                    <img class="mui-media-object" v-bind:src="list.src" v-preview="list.src">
                </li>
            </ul>
            <div class="mui-card-footer" v-html= 'deta.content'>
            </div>
        </div>
        <!-- 评论组件 -->
        <app-ment></app-ment>
    </article>
  
</template>
<script>
    //   导入nav组件和评论组件
import Comment from '../comment/comment.vue';
export default {
  data(){
      return {
          title:'图片详情',
            imgList:[],
            details:[]
      }
  },
  components:{
    //   导入nav组件和评论组件
      'app-ment':Comment,
  },
  methods:{
    //   获取img
      getImgs(){
          this.axios.get(this.url.getImg +'/'+ this.$route.params.id)
          .then( rep => this.imgList = rep.data.message )
      },
      //获取图片的详细信息
      getDetails(){
          this.axios.get(this.url.getID +'/'+ this.$route.params.id )
          .then( rep => this.details = rep.data.message )
      }
  },
  created(){
      this.getImgs();
      this.getDetails();
  }
}
</script>
<style lang="less" scoped>
.mui-card-header, .mui-card-footer{
  display: block;
}
</style>


