<template>
    <article>
        <app-nav :tit="title"></app-nav>
        <div class="mui-card" v-for="deta in details" :key="deta.id">
            <div class="mui-card-header" >
              <h4>{{ deta.title }}</h4>
              <p calss="">
                <span>发表于:{{ deta.add_time | date }}</span>　
                <span>{{ deta.click }}次浏览</span></p>
            </div>
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="list in imgList" :key="list.id">
                    <a href="#">
                        <img class="mui-media-object" v-bind:src="list.src">
                    </a>
                </li>
            </ul>
            <div class="mui-card-footer" v-html= 'deta.content'>
            </div>
        </div>
        <app-ment></app-ment>
    </article>
  
</template>
<script>
import Navcom from '../navcom/navcom.vue';
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
      'app-nav':Navcom,
      'app-ment':Comment,
  },
  methods:{
      getImgs(){
          this.axios.get(this.url.getImg +'/'+ this.$route.params.id)
          .then( rep => this.imgList = rep.data.message )
      },
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


