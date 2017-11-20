<template>
    <article>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            <router-link v-bind:to="{ name:'pl',params:{ id:0 }}">全部</router-link>
          </li>
				  <li class="mui-table-view-cell" v-for="nav in navList" :key="nav.id">
            <router-link v-bind:to="{ name:'pl',params: { id:nav.id }}">{{ nav.title }}</router-link>
          </li>
			</ul>

      <div class="mui-card" v-for="list in imgList" v-bind:key="list.id">
         <router-link v-bind="{ to:`/photo/detail/${list.id}`}">
            <img :key="list.img_url" v-lazy="list.img_url">
              <div class="mui-card-content">
                  <div class="mui-card-content-inner">
                    <p>{{ list.title }}</p>
                    <p style="color: #333;" v-html="list.zhaiyao"></p>
                  </div>

              </div>
         </router-link>
			</div>
    </article>  
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
      navList: []
    };
  },
  methods: {
    getImgList() {
      this.axios
        .get(this.url.getIL + "/" + this.$route.params.id)
        .then(rep => (this.imgList = rep.data.message));
    },
    getNavList() {
      this.axios
        .get(this.url.getIC)
        .then(rep => (this.navList = rep.data.message));
    }
  },
  created() {
    this.getImgList();
    this.getNavList();
  },
  watch:{
    $route(){
      this.getImgList();
    }
  }
};
</script>
<style lang="less" scoped>
.mui-card-header, .mui-card-footer{
  display:block;
}
ul{
  overflow: hidden;
}
.mui-table-view li{
  float: left;
  color:deepskyblue;
  padding: 6px 12px;
}
img {
    width: 100%;
  }
   p:last-child {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-align: left;
      text-indent: 2em;
    }
image[lazy="loading"] {
  width: 100px;
  height: 300px;
  margin: auto;
}
</style>


