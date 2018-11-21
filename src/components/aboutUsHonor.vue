<template>
    <div id="aboutUsHonor">
      <div class="title">
        <div class="title-1">
          <span>品牌</span><span class="color">荣誉</span>
        </div>
        <div class="title-2"><span>BRAND HONOR</span></div>
      </div>
      <div class="list1 clearfloat">
        <!--<div class="swiper-container swiper06">-->
          <!--<div class="swiper-wrapper">-->
            <!--<div class="swiper-slide"  v-for="(item,index) in list">-->
              <!--<div>-->
                <!--<img :src="item.pics" alt="">-->
                <!--<div class="detailText">-->
                  <!--<div class="dt_wrap">-->
                    <!--<p>{{item.title}}</p>-->
                    <!--<span class="time">{{item.date}}</span>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-button-prev prev06"></div>-->
        <!--<div class="swiper-button-next next06"></div>-->
        <!--<template v-for="(item,index) in list">-->
          <div class="shu" v-if="item.type == 1" @click="popImg(item.pics)" v-for="(item,index) in sImg" :key="index">
            <div class="img">
              <img src="../../static/img/border01.png" alt="">
              <div class="detail">
                <img :src="item.pics" alt="">
              </div>
            </div>
            <div class="info">
              <div class="info-title" style="font-weight: bold;">{{item.title}}</div>
              <!--<div class="info-time" v-if="item.date">{{item.date}}</div>-->
            </div>
          </div>
        <!--</template>-->
      </div>
      <div class="list1 clearfloat">
        <div class="heng" v-if="item.type == 2" @click="popImg(item.pics)" v-for="(item,index) in hImg" :key="index">
          <div class="img">
            <img src="../../static/img/border02.png" alt="">
            <div class="detail">
              <img :src="item.pics" alt="">
            </div>
          </div>
          <div class="info">
            <div class="info-title" style="font-weight: bold;">{{item.title}}</div>
            <!--<div class="info-time" v-if="item.date">{{item.date}}</div>-->
          </div>
        </div>
      </div>
      <!--<div class="listBottom">-->
      	<!--<div class="lbBox" v-for="(item,index) in list" :key="index">-->
      		<!--<div class="lbLeft">-->
      			<!--<p>{{item.date}}</p>-->
      		<!--</div>-->
      		<!--<div class="lbRight">-->
      			<!--<p>{{item.title}}</p>-->
      		<!--</div>-->
      	<!--</div>-->
      <!--</div>-->
      <div class="bigImg" v-if="bigImg">
        <div class="wrap">
          <img :src="img" alt="">
        </div>
        <div class="close02">
          <div class="closeBtn" @click="bigImg = false"></div>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
      name: "aboutUsHonor",
      data(){
        return{
          swiper06:'',
          list:[],
          listLength:0,
          pageIndex:0,
          img:'',
          bigImg:false,
          sImg:[],
          hImg:[]
        }
      },
      methods:{
        popImg(src){
          this.bigImg = true;
          this.img = src;
        }
      },
      mounted(){
        var _this = this;
        _this.$api.axiosGet('/index/about/getHonor',{},function (data) {
          // console.log(data);
          _this.list = data.data.honor;
          _this.listLength = _this.list.length;
          var data1 = data.data.honor;
          for(var i = 0;i<_this.list.length;i++)
          {
            _this.list[i].pics = _this.$baseLink + _this.list[i].pics;
            if(_this.list[i].date == '0000-00-00'){
              _this.list[i].date = '';
            }
            if(_this.list[i].type == 1){
              _this.sImg.push(_this.list[i]);
            }else if(_this.list[i].type == 2){
              _this.hImg.push(_this.list[i]);
            }
          }
          // console.log(_this.sImg,_this.hImg);
          setTimeout(function () {
            _this.swiper06 = new Swiper('.swiper06',{
              // speed:1000,
              loop:true,
//            autoplay:2000,
              slidesPerView:3,
              // spaceBetween:50,
              centeredSlides:true,
              nextButton:'.next06',
              prevButton:'.prev06',
              pagination : '.swiper-pagination',
              paginationClickable:true
            })
          },100);
        });

      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsHonor.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
