<template>
    <div id="productDetail">
      <div class="list1">
        <img :src="bigImg" alt="">
      </div>
      <div class="list2">
        <div class="l2-wrap" v-html="content">
          <!--<img src="../../static/img/img11.png" alt="">-->
          <!--<img src="../../static/img/img12.png" alt="">-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "productDetail",
      data(){
        return {
          bigImg:'',
          content:''
        }
      },
      mounted(){
        const that = this;
        var id = this.$router.history.current.query.id;
        this.$api.axiosGet('/index/product/getProductinfo/id'+id,{},function (data) {
          console.log(data);
          that.bigImg = that.$baseLink+data.data.info.pic;
          that.content = data.data.info.content;
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/productDetail.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
