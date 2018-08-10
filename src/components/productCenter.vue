<template>
  <div id="productCenter">
    <div class="list1">
      <div class="title_1">{{title.t1}}</div>
      <div class="title_2">{{title.t2}}</div>
    </div>
    <div class="list2">
      <div class="l2-1">
        <ul class="clearfloat">
          <li @click="navbtn(index,item.id)" v-for="(item,index) in navBtn" :key="index" :class="{sel:index == idx}">{{item.name}}</li>
        </ul>
      </div>
      <div class="l2-2">
        <div class="swiper-container swiper02">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :class="{sel:idx1 == index}" v-for="(item,index) in iconDetail" :key="index" @click="select(index)">
              <div>
                <router-link :to="{path:'/productCenter/ProductList',query:{item:item}}">
                  <div class="slide1" :class="{default:item.pic == ''}">
                    <img :src="$baseLink+item.pic" alt="">
                  </div>
                  <div class="slide2">
                    <span>{{item.name}}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev02"></div>
        <div class="swiper-button-next next02"></div>
      </div>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 page3 -->
    </router-view>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
    export default {
      name: "productCenter",
      data(){
        return {
          title:{
            t1:'国内少数指纹锁核心技术拥有者',
            t2:'雅洁智能锁，80道工序全数合格检验，超强精准识别，权威体系认证。'
          },
          navBtn:[],
          idx:0, //智能门锁 家用五金 切换
          idx1:0,
          iconDetail:[],
          swiper02:null,
          length:0,
        }
      },
      methods:{
        navbtn(i,id){
          // console.log(id);
          const that = this;
          this.idx = i;
          this.idx1 = 0;
          // console.log(id);
          let defaultId = id;
          // 获取默认二级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+id,{},function (data) {
            // console.log(data);
            that.iconDetail = data.data.cates.all;
            that.length = that.iconDetail.length;
            var w = $('.swiper02').width();
            if(that.length<8){
              // console.log(that.length);
              var l = 70.5*(8-that.length);
              $('.swiper02').css({
                '-webkit-transform': 'translateX('+l+'px)',
                '-moz-transform': 'translateX('+l+'px)',
                '-ms-transform': 'translateX('+l+'px)',
                '-o-transform': 'translateX('+l+'px)',
                'transform': 'translateX('+l+'px)',
                // 'margin-left': -w/2+'px'
              })
            }else{
              $('.swiper02').css({
                '-webkit-transform': 'translateX(0px)',
                '-moz-transform': 'translateX(0px)',
                '-ms-transform': 'translateX(0px)',
                '-o-transform': 'translateX(0px)',
                'transform': 'translateX(0px)',
                // 'margin-left': -w/2+'px'
              })
            }
            $('.l2-2 .swiper-slide').removeClass('sel');
            $('.l2-2 .swiper-slide').eq(0).addClass('sel');
            setTimeout(function () {
              that.swiper02.slideTo(0);
            },50)
            that.$router.push({
              name: 'ProductInfo',
              query:{
                id:defaultId
              }
            });
          })
        },
        select(i){
          // $('.l2-2 .swiper-slide').removeClass('sel');
          // $('.l2-2 .swiper-slide').eq(i).addClass('sel');
          this.idx1 = i;
        }
      },
      updated(){
        const that = this;
      },
      watch:{
        idx:function (i) {
          // console.log(i);
          sessionStorage.setItem('idx',i)
        },
        idx1:function (i) {
          // console.log(456)
          sessionStorage.setItem('idx1',i)
        }
      },
      mounted(){
        const that = this;
        console.log(159159);
        var idx = parseInt(sessionStorage.getItem('idx'));
        var idx1 = parseInt(sessionStorage.getItem('idx1'));
        if(sessionStorage.getItem('idx') == null){
          idx = 0;
        }
        if(sessionStorage.getItem('idx1') == null){
          idx1 = 0;
        }
        // 获取一级标签
        this.$api.axiosGet('/index/product/getCates/pid/0',{},function (data) {
          // console.log(data);
          that.navBtn = data.data.cates;
          let defaultId = data.data.cates[idx].id;
          that.$router.push({
            name: 'ProductInfo',
            query:{
              id:defaultId
            }
          });
          // 获取默认二级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+data.data.cates[idx].id,{},function (data) {
            // console.log(data);
            that.iconDetail = data.data.cates.all;
            that.length = that.iconDetail.length;
            that.idx = idx;
            that.idx1 = idx1;
            if(that.length<8){
              // console.log(that.length);
              var l = 70.5*(8-that.length);
              $('.swiper02').css({
                '-webkit-transform': 'translateX('+l+'px)',
                '-moz-transform': 'translateX('+l+'px)',
                '-ms-transform': 'translateX('+l+'px)',
                '-o-transform': 'translateX('+l+'px)',
                'transform': 'translateX('+l+'px)',
                // 'margin-left': -w/2+'px'
              })
            }else{
              $('.swiper02').css({
                '-webkit-transform': 'translateX(0px)',
                '-moz-transform': 'translateX(0px)',
                '-ms-transform': 'translateX(0px)',
                '-o-transform': 'translateX(0px)',
                'transform': 'translateX(0px)',
                // 'margin-left': -w/2+'px'
              })
            }
            //初始化
            setTimeout(function () {
              that.swiper02 = new Swiper('.swiper02',{
                slidesPerView: 8,
                spaceBetween: 10,
                prevButton:'.prev02',
                nextButton:'.next02',
                observer:true,
                observeParents:false,//修改swiper的父元素时，自动初始化swiper
                onSlideChangeEnd: function(swiper){
                  swiper.update();
                  // that.swiper02.startAutoplay();
                  // that.swiper02.reLoop();
                },
                onInit:function (swiper) {
                  swiper.slideTo(idx1);
                }
              })
            },50);
            if(sessionStorage.getItem('idx1') != null){
              that.$router.push({path:'/productCenter/ProductList',query:{item:data.data.cates.all[idx1]}})
            }else{
              that.$router.push({
                name: 'ProductInfo',
                query:{
                  id:defaultId
                }
              });
            }
          })
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/productCenter.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
