<template>
     <!--数字输入框 -->
          <div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus" @click="sub">-</button>
          	<input class="mui-input-numbox" type="number" v-model="val">
          	<button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
          </div>
</template>
<script>
    export default {
        props:['initVal'],
        data(){
            return {
                val:this.initVal || 0
            }
        },
        methods:{
            //减减，最小值为0
            sub(){
                this.val > 0 && this.val-- ;
            },
            //最大值不限
            add(){
                 this.val++ ;
            }
        },
        watch:{
            val(){
                this.$emit('change' ,this.val)
            }
        }
    }
</script>
<style lang="less">

</style>
