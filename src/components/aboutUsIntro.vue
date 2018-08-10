<template>
    <div id="aboutUsIntro">
      <div class="list1 clearfloat">
        <div class="img01" v-if="item.size == 1" v-for="(item,index) in imgs" :key="index">
          <img :src="$baseLink+item.pic" alt="">
        </div>
        <div class="img02" v-if="item.size == 2" v-for="(item,index) in imgs" :key="index">
          <img :src="$baseLink+item.pic" alt="">
        </div>
        <div class="img03" v-if="item.size == 3" v-for="(item,index) in imgs" :key="index">
          <img :src="$baseLink+item.pic" alt="">
        </div>
        <div class="info_1" style="max-height: 280px;" v-if="contents.length != 0">
          <p style="max-height: 210px">{{contents[0].content}}</p>
        </div>
        <div class="info_1 info_2" v-if="contents.length != 0">
          <p style="max-height: 220px">{{contents[1].content}}</p>
        </div>
      </div>
      <div class="list2">
        <div class="swiper-container swiper03">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperBox">
              <div class="slideBox">
                  <div class="sildeLeft">
                    <img :src="$baseLink+item.pics"/>
                  </div>
                  <div class="sildeRight">
                    <div class="srTitle"><p>{{index<10?'0'+(index+1):index+1}}{{item.title}}</p></div>
                    <p>{{item.content}}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev03"></div>
        <div class="swiper-button-next next03"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUsIntro",
      data(){
        return{
          contents:[],
          imgs:[],
          swiperBox:[],
          swiper03:''
        }
      },
      mounted(){
        var _this = this;
        // 获取企业简介
        this.$api.axiosGet('/index/about/getProfile',{},function (data) {
          // console.log(data);
          _this.contents = data.data.profile;
        });
        // 获取背景图片
        this.$api.axiosGet('/index/about/getPic/location/1',{},function (data) {
          // console.log(data);
          _this.imgs = data.data.pic;
        });
        // 获取轮播信息 /index/about/getPics
        this.$api.axiosGet('/index/about/getPics',{},function (data) {
          // console.log(data);
          _this.swiperBox = data.data.pics;
        });
        setTimeout(function () {
          _this.swiper03 = new Swiper('.swiper03',{
              prevButton:'.prev03',
              nextButton:'.next03',
              autoplay:3000,
              observer:true
              // loop:true
            });
        },300);
      }
    }
</script>
<style scoped>
@import "../../static/css/aboutUsIntro.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
