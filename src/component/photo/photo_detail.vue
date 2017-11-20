<template>
    <article>
        <app-nav :tit="title"></app-nav>
        <div class="top" v-for="deta in details" :key="deta.id">
            <h3>{{ deta.title }}</h3>
            <p><span>{{ deta.add_time }}</span>　<span>{{ deta.click }}次浏览</span></p>
             <div v-for="list in imgList" :key="list.id">
                <img v-bind:src=" list.src" alt="">
            </div>
            <p v-html="deta.content"></p>        
        </div>
       
    </article>
  
</template>
<script>
import Navcom from '../navcom/navcom.vue'
export default {
  data(){
      return {
          title:'图片详情',
            imgList:[],
            details:[]
      }
  },
  components:{
      'app-nav':Navcom
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
    article{
        margin: 45px;
    }
</style>


