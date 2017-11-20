<template>
    <article>
        <i></i>
        <div class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1)">返回</a>
            <h1 class="mui-title">{{tit}}</h1>
        </div>
    </article>
   
    
</template>
<script>
    export default {
        props:['tit'],
        data(){
            return {
                title:''
            }
        }
    }
</script>
<style lang="less" scoped>
i{
    display: block;
    height:40px;
}
div{
    margin-top: 40px;
    a{
        font-size: 18px !important;
        padding-top:13px !important;
        color:#0062cc;
    }
    h1{
        font-size: 19px;
        color:#0062cc;
    }
}
</style>

