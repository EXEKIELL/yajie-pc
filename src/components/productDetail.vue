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
          <div class="proLeftIn" v-if="pImg.length">
            <img :src="$baseLink+pImg[pIndex].url" alt=""/>
          </div>
          <div class="smImg">
            <div class="swiper-container swiperSM">
              <div class="swiper-wrapper">
                <div :class="{sel:pIndex == index}" class="swiper-slide" v-for="(item,index) in pImg" @mouseover="pIndex=index">
                  <img :src="$baseLink+item.url" alt="">
                </div>
              </div>
            </div>
            <div class="prev01"></div>
            <div class="next01"></div>
          </div>
        </div>
        <div class="proRight">
          <div class="proTitle">
            <p>{{getData.title}}</p>
          </div>
          <div class="proType">
            <p>{{getData.name}}</p>
          </div>
          <div class="proDetail">
            <ul>
              <li v-if="index<4" v-for="(item,index) in getData.spec"><span class="li-title">{{item.name}}：</span><span class="li-info">{{item.content}}</span></li>
              <!--<li><span class="li-title">适用范围</span><span class="li-info">写字楼/别墅</span></li>-->
              <!--<li><span class="li-title">颜色分类</span><span class="li-info">红古铜/青古铜/尼龙铬/琥珀琮/香槟金</span></li>-->
              <!--<li><span class="li-title">开门方式</span><span class="li-info">密码/指纹/机械钥匙</span></li>-->
            </ul>
          </div>
          <!--<div class="prot">-->
            <!--<p>颜色 <span>| Color</span></p>-->
          <!--</div>-->
          <!--<div class="proText">-->
            <!--<p><span v-for="(item,index) in color">{{item}}</span></p>-->
          <!--</div>-->
          <!--<div class="prot">-->
            <!--<p>图片  <span>| Image</span></p>-->
          <!--</div>-->
          <!--<div class="proImg clearfloat">-->
            <!--<div  class="pImg " :class="{'pImgActive':pIndex==index}" v-for="(item,index) in pImg" @mouseover="pIndex=index">-->
              <!--<img :src="$baseLink+item.url"/>-->
            <!--</div>-->
          <!--</div>-->
          <div class="prot"  v-if="getData.jd_url != ''||getData.tb_url != ''">
            <p>购买方式  <span>| Method of purchase</span></p>
          </div>
          <div class="proMethod"  v-if="getData.jd_url != ''||getData.tb_url != ''">
            <a :href="getData.jd_url" target="_blank" class="proJd" v-if="getData.jd_url != ''">
              <img src="../../static/img/jd.png" alt="">
            </a>
            <a :href="getData.tb_url" target="_blank" class="proTm" v-if="getData.tb_url != ''">
              <img src="../../static/img/tm.png" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="proParam">
        <div class="proParamTitle">
          <p>产品参数</p>
        </div>
        <div class="proParamBox">
          <div class="paramText" v-for="(item,index) in productParam" :key="index">
            <p>{{item.name}}：<span>{{item.content}}</span></p>
          </div>
          <!--<div class="paramText">-->
            <!--<p>可选颜色：<span>青古铜/红古铜/香槟金</span></p>-->
          <!--</div>-->
          <!--<div class="paramText">-->
            <!--<p>指纹容量：<span>100</span></p>-->
          <!--</div>-->
          <!--<div class="paramText">-->
            <!--<p>型号：<span>6213A</span></p>-->
          <!--</div>-->
          <!--<div class="paramText">-->
            <!--<p>开门方式：<span>密码/指纹/机械钥匙</span></p>-->
          <!--</div>-->
          <!--<div class="paramText">-->
            <!--<p>密码长度：<span>6-12位开门密码，总30位虚位密码</span></p>-->
          <!--</div>-->
          <!--<div class="paramText">-->
            <!--<p>尺寸：<span>400×78×31（mm）</span></p>-->
          <!--</div>-->
          <!--<div class="paramText">-->
            <!--<p>主要材质：<span> 锌合金</span></p>-->
          <!--</div>-->
        </div>
      </div>
      <div class="proHtml">
          <!--<img src="../../static/img/proImg1.png"/>-->
        <div class="htmlDetail" v-html="content"></div>
        <div class="navLeft">
          <div class="title" style="margin-bottom: 0;">
            <img src="../../static/img/titleImg01.png" alt="">
            <div class="title-text">
              <div class="t-1">{{navTitle}}</div>
              <!--<div class="t-2">SMART HOME</div>-->
            </div>
          </div>
          <div class="navList">
            <ul>
              <li v-for="(item,index) in navList" :key="index" @click="navTo1(item)">{{item.name}}</li>
            </ul>
            <div class="fanhui" @click="fanhui">返回</div>
          </div>
        </div>
      </div>
      <div class="navLeft">

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
          getData:{},
          productParam:[],
          pImg:['static/img/produce1.png','static/img/produce1.png','static/img/produce1.png','static/img/produce1.png'],
          noDetail:false,
          pIndex:0,
          // 产品颜色
          color:[],
          swiperSM:'',
          navTitle:'', // 侧边栏标题
          navId:42,
          navList:[]
        }
      },
      methods:{
        navTo1(item){
          // console.log(item)
          this.$router.push({
            path: '/productCenter/ProductList',
            query:{
              item:item,
              id1:this.id
            }
          })
        },
        fanhui(){
          window.history.go(-1);
        }
      },
      mounted(){
        const that = this;
        var offsetLeft = $('.navLeft').offset().left;
        // console.log(offsetLeft);

        // 监听滚动条滚动
        $(window).scroll(function(event){
          if($(window).scrollTop()>1050){
            if($('.navLeft').hasClass('fixed')){

            }else{
              $('.navLeft').addClass('fixed');
              $('.navLeft').css('left',offsetLeft);
            }
          }else{
            if($('.navLeft').hasClass('fixed')){
              $('.navLeft').removeClass('fixed');
              $('.navLeft').css('left',0);
            }
          }
        });
        var id = this.$router.history.current.query.id;
        this.$api.axiosGet('/index/product/getProductinfo/id/'+id,{},function (data) {
          // console.log(data);
          if(data.data.info == null){
            that.noDetail = true;
          }else{
            that.bigImg = that.$baseLink+data.data.info.pic;
            that.content = data.data.info.content;
            that.productParam = data.data.info.param.data;
            that.getData = data.data.info;
            that.pImg = data.data.info.img;
            that.navTitle = data.data.cates[0].name;
            var id = data.data.cates[0].id;
            that.id = id;
            var color = data.data.info.color_name;
            // console.log(color);
            var colorArr = color.split(',');
            that.color = colorArr;
            // console.log(that.color);
            setTimeout(function () {
              that.swiperSM = new Swiper('.swiperSM',{
                slidesPerView:4,
                spaceBetween:15,
                observer:true,
                nextButton:'.next01',
                prevButton:'.prev01'
              })
            },50);
            // 获取默认二级标签
            that.$api.axiosGet('/index/product/getCates/pid/'+id,{},function (data) {
              // console.log(data);
              that.navList = data.data.cates.all;
            })
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
  .proHtml img{
    width: 100%;
  }
</style>
