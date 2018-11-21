<template>
    <div id="aboutUsInnovate">
      <div class="list2 l3">
        <div class="title">
          <div class="title-1">
            <span class="color">创新</span><span>技术</span>
          </div>
          <div class="title-2"><span>INNOVATIVE TECHNOLOGY</span></div>
        </div>
        <div class="cont">
          <div class="swiper-container swiperHome03">
            <div class="swiper-wrapper">
              <div style="cursor:pointer;" @click="videobofang(item.path,index)" class="swiper-slide" v-for="(item,index) in videoList" :key="index">
                <div>
                  <div class="st03-top">
                    <img :src="$baseLink+item.pic" alt="">
                    <!--<iframe height='178' allowfullscreen="true" allowtransparency="true" width='273' :src='item.path' frameborder=0></iframe>-->
                    <!--<iframe height='178' allowfullscreen="true" allowtransparency="true" width='273' src='http://player.youku.com/embed/XMzcwODE2OTg4NA==' frameborder=0></iframe>-->
                    <!--<iframe height='178' allowfullscreen="true" allowtransparency="true" width='273' src='http://player.youku.com/embed/XMzcwODE3NjA0NA==' frameborder=0></iframe>-->
                    <div class="st03-topMask">
                      <button class="bofang"></button>
                    </div>
                  </div>
                  <div class="st03-bottom">
                    <div class="st03-wrap">
                      <div class="st03-title textEllipsis">{{item.title}}</div>
                      <div class="st03-desc textEllipsis">{{item.desc}}</div>
                    </div>
                    <div class="jiantou"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--<div class="moreButton">-->
          <!--<button @click="more(1)">MORE</button>-->
        <!--</div>-->
      </div>
      <!--播放视频-->
      <div class="videoWrap" v-if="videoStatus">
        <div>
          <div class="videoTitle">{{videoTitle}}</div>
          <div class="wrap">
            <iframe height='498' allowfullscreen="true" allowtransparency="true" width='760' :src='videoPath' frameborder=0></iframe>
            <div class="close01" @click="videoStatus = false"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "aboutUsInnovate",
        data(){
          return {
            videoStatus:false,
            videoList:[
              {path:'http://player.youku.com/embed/XMzcwODE1MDE5Mg==',title:'雅洁智能锁，开启智慧生活',desc:'雅洁智能锁，开启智慧生活'},
              {path:'http://player.youku.com/embed/XMzcwODE2OTg4NA==',title:'雅洁智能锁，开启智慧生活',desc:'雅洁智能锁，开启智慧生活'},
              {path:'http://player.youku.com/embed/XMzcwODE3NjA0NA==',title:'雅洁智能锁，开启智慧生活',desc:'雅洁智能锁，开启智慧生活'}
            ],
            videoPath:'',//视频iframe地址
            videoTitle:'',
            swiperHome03:''
          }
        },
        methods:{
          videobofang(i,index){
            this.videoPath = i;
            this.videoTitle = this.videoList[index].title;
            this.videoStatus = true;
          },
        },
        mounted(){
          const that = this;
          // this.swiperHome03 = new Swiper('.swiperHome03',{
          //   slidesPerView:4,
          //   spaceBetween:15,
          //   observer:true
          // })
          this.$api.axiosGet('/index/index/getTechnology/location/1',{},function (data) {
            // console.log(data);
            that.videoList = data.data.technology;
            // that.videoList = that.videoList.slice(0,1);
            var length = data.data.technology.length;
            // if(length<4){
            //   var l = 139*(4-length);
            //   console.log(l);
            //   $('.swiperHome03').css({
            //     '-webkit-transform': 'translateX('+l+'px)',
            //     '-moz-transform': 'translateX('+l+'px)',
            //     '-ms-transform': 'translateX('+l+'px)',
            //     '-o-transform': 'translateX('+l+'px)',
            //     'transform': 'translateX('+l+'px)',
            //     // 'margin-left': -w/2+'px'
            //   })
            // }
            setTimeout(function () {
              var swiperHome03 = new Swiper('.swiperHome03',{
                slidesPerView:3,
                spaceBetween:15,
                observer:true
              });
            },50);
          })

        }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsInnovate.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
