<template>
    <article>
        <main>
            <nav>
                <ul>
                    <li v-for="nav in navList" :key="nav.id"><a href="">{{ nav.title }}</a></li>
                </ul>
            </nav>
            <div v-for="list in imgList" v-bind:key="list.id">
                <router-link v-bind="{ to:`/photo/detail/${list.id}`}">
                    <img :key="list.img_url" v-lazy="list.img_url">
                    <footer>
                        <span>{{ list.title }}</span>
                        <p v-html="list.zhaiyao"></p>
                    </footer>
                </router-link>
                
                
            </div>
        </main>

    </article>  
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
      navList: [],
      id: ""
    };
  },
  methods: {
    getImgList() {
      this.id = this.$route.params.id ? this.$route.params.id : 0;
      this.axios
        .get(this.url.getIL + "/" + this.id)
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
  }
};
</script>
<style lang="less" scoped>
article {
  margin-bottom: 50px;
}
ul {
  line-height: 30px;
  height: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2px;
}
li {
  padding: 0 8px;
  height: 100%;
  float: left;
}

div {
  position: relative;
  height: 375px;
  img {
    width: 100%;
  }
  footer {
    padding: 5px;
    position: absolute;
    left: 0;
    bottom: 1px;
    span {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      text-align: left;
      text-indent: 2em;
      color: #fff;
      margin: 0;
    }
  }
}
// image[lazy="loading"] {
//   width: 100px;
//   height: 300px;
//   margin: auto;
// }
</style>


