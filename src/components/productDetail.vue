<template>
    <div id="productDetail">
      <div v-if="noDetail" style="width: 1200px;margin: auto;font-size: 30px;color: #333333;text-align: center;padding: 30px 0;">此产品暂未有详情~</div>
      <!--<div class="list1">-->
        <!--<img :src="bigImg" alt="">-->
      <!--</div>-->
      <div class="list2">
        <div class="l2-wrap" style="padding-top: 0;">
          <div class="list1">
            <img :src="bigImg" alt="">
          </div>
        </div>
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
          content:'',
          noDetail:false
        }
      },
      mounted(){
        const that = this;
        var id = this.$router.history.current.query.id;
        this.$api.axiosGet('/index/product/getProductinfo/location/1/id/'+id,{},function (data) {
          console.log(data);
          if(data.data.info == null){
            that.noDetail = true;
          }else{
            that.bigImg = that.$baseLink+data.data.info.pic;
            that.content = data.data.info.content;
          }
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
