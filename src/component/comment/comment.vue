<template>
    <article>
        <h3>提交评论</h3>
        <div class="mui-input-row" style="margin: 10px 5px;">
            <textarea id="textarea" rows="5" placeholder="请输入评论内容" v-model="userComment"></textarea>
            <button id="btn" class="mint-button mint-button--primary mint-button--large is-disabled" @click="pComment"><!----> <label class="mint-button-text">发表评论</label></button>
        </div>
        <p> <span class="left">评论列表</span> <span class="right">44条评论</span></p>
          <div class="ment" v-for="list in comList" v-bind:key="list.content">
            <span class="name">{{list.user_name}}</span> <span class="time">{{ list.add_time |date }}</span><br>
            <span class="contenr">{{ list.content }}</span>
          </div>
        <button class="mint-button mint-button--danger mint-button--large is-plain" @click="getComments"><!----> <label class="mint-button-text">加载更多</label></button>
    </article> 
</template>

<script>
export default {
  data() {
    return {
      userComment: "",
      id: "",
      pageindex:1,
      comList:[]
    };
  },
  methods: {
    //提交评论请求
    pComment() {
      this.axios.post(this.url.postComment+'/'+this.$route.params.id,{ content:this.userComment,id:this.$route.params.id },{
      })
      .then( rep => console.log(rep.data))
    },
    //获取评论列表
    getComments() {
      this.axios.get(
          this.url.getComL +"/" +this.$route.params.id + "?" + "pageindex=" + this.pageindex)
        .then(rep => {
          this.comList = rep.data.message;
          this.pageindex ++ ;} );
    }
  }
};
</script>
<style lang="less" scoped>
article {
  margin-top: 5px;
  background-color: #fff;
  div {
    margin-top: 5px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
}
h3 {
  // margin:8px;
  line-height: 26px;
  font-size: 22px;
  font-family: none;
  padding: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}
p {
  border-bottom: 1px solid #ccc !important;
  margin-bottom: 10px;
  line-height: 24px;
  overflow: hidden;
  display: block;
  padding-bottom: 10px;
  .left {
    margin-left: 8px;
    font-size: 22px;
    color: #333;
    font-weight: 600;
  }
  .right {
    float: right;
    margin-right: 10px;
  }
}
p + button {
  margin-top: 15px;
  margin-bottom: 10px;
}
#btn {
  text-align: center;
  label {
    float: none;
  }
}
.ment{
  padding: 5px;
  margin: 0;
  .name{
    font-size: 15px;
    color:#333;
  }
  .time{
    font-size: 12px;
    color:#999;
  }
  .content{
    font-size: 14px;
    color:#666;
  }
}
</style>

