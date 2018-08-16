<template>
    <div id="productDetail">
      <div v-if="noDetail" style="width: 1200px;margin: auto;font-size: 30px;color: #333333;text-align: center;padding: 30px 0;">此产品暂未有详情~</div>
      <!--<div class="list1">-->
        <!--<img :src="bigImg" alt="">-->
      <!--</div>-->
      <!--<div class="list2">-->
        <!--<div class="l2-wrap" style="padding-top: 0;">-->
          <!--<div class="list1">-->
            <!--<img :src="bigImg" alt="">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="l2-wrap" v-html="content">-->
          <!--&lt;!&ndash;<img src="../../static/img/img11.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../static/img/img12.png" alt="">&ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
      <div class="proBox clearfloat">
        <div class="proLeft">
          <div class="proLeftIn">
            <img :src="pImg[pIndex]" alt=""/>
          </div>
        </div>
        <div class="proRight">
          <div class="proTitle">
            <p>智能指纹锁 雅洁6817A</p>
          </div>
          <div class="proType">
            <p>型号AJ1021-02A-30-尼龙铬</p>
          </div>
          <div class="prot">
            <p>颜色 <span>| Color</span></p>
          </div>
          <div class="proText">
            <p><span>青古铜</span><span>青古铜</span><span>青古铜</span></p>
          </div>
          <div class="prot">
            <p>图片  <span>| Image</span></p>
          </div>
          <div class="proImg clearfloat">
            <div  class="pImg " :class="{'pImgActive':pIndex==index}" v-for="(item,index) in pImg" @mouseover="pIndex=index">
              <img :src="item"/>
            </div>
          </div>
          <div class="prot">
            <p>购买方式  <span>| Method of purchase</span></p>
          </div>
          <div class="proMethod">
            <a href="###" class="proJd">京东</a>
            <a href="###" class="proTm">天猫</a>
          </div>
        </div>
      </div>
      <div class="proParam">
        <div class="proParamTitle">
          <p>产品规格</p>
        </div>
        <div class="proParamBox">
          <div class="paramText">
            <p>系列名称：<span>云速系列</span></p>
          </div>
          <div class="paramText">
            <p>可选颜色：<span>青古铜/红古铜/香槟金</span></p>
          </div>
          <div class="paramText">
            <p>指纹容量：<span>100</span></p>
          </div>
          <div class="paramText">
            <p>型号：<span>6213A</span></p>
          </div>
          <div class="paramText">
            <p>开门方式：<span>密码/指纹/机械钥匙</span></p>
          </div>
          <div class="paramText">
            <p>密码长度：<span>6-12位开门密码，总30位虚位密码</span></p>
          </div>
          <div class="paramText">
            <p>尺寸：<span>400×78×31（mm）</span></p>
          </div>
          <div class="paramText">
            <p>主要材质：<span> 锌合金</span></p>
          </div>
        </div>
      </div>
      <div class="proHtml">
          <img src="../../static/img/proImg1.png"/>
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
          pImg:['static/img/produce1.png','static/img/produce1.png','static/img/produce1.png','static/img/produce1.png'],
          noDetail:false,
          pIndex:0
        }
      },
      mounted(){
        const that = this;
        var id = this.$router.history.current.query.id;
        this.$api.axiosGet('/index/product/getProductinfo/id/'+id,{},function (data) {
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
