<template>
  <div id="homePage">
    <div class="list1 l1">
      <div class="swiper-container swiperHome">
        <div class="swiper-wrapper">
          <template v-if="vList">
            <div class="swiper-slide swiper-no-swiping" v-for="(item,index) in vList" :key="index" v-if="index == 0">
              <img :src="$baseLink+item.pics" alt="">
              <!--autoplay loop-->
              <video class="video" width="100%" autoplay="autoplay" loop="loop">
                <!--<source :src="$baseLink+item.path" type="video/webm">-->
                <source :src="$baseLink+item.path" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <!--<div class="mask videoMask">-->
              <!--&lt;!&ndash;<div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="bofang"></div>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--</div>-->
              <!--<div class="button"></div>-->
            </div>
          </template>
            <div class="swiper-slide" v-for="(item1,index1) in vbanner" :key="index1+1" @click="navTo2(item1.url)">
              <img :src="$baseLink+item1.pics" alt="">
              <!--<div class="button"></div>-->
            </div>
        </div>
        <div class="swiper-button-prev prevHome"></div>
        <div class="swiper-button-next nextHome"></div>
        <div class="swiper-wrap2" v-show="vList.length>0">
          <div class="videobtn" v-if="bannerVideo">
            <a class="">
              <span></span><span>视频</span>
            </a>
          </div>
          <div class="paginHome">
            <span>图片</span>
          </div>
        </div>
        <div v-show="vList.length == 0" class="swiper-pagination paginHome1"></div>
      </div>
    </div>
    <div class="list2 l2">
      <div class="title">
        <div class="title-1">
          <span class="color">产品</span><span>推荐</span>
        </div>
        <div class="title-2"><span>PRODUCTS RECOMMENDED</span></div>
      </div>
      <div class="cont">
        <div class="cont-1">
          <div>
            <div :id="item.id" :class="{sel:index == 0,c1List1:index == 0,c1List2:index == 1,c1List3:index == 2,c1List4: index == 3}" v-for="(item,index) in tags01" :key="index" @click="tags01Btn(index,item.id)">
              <div class="list1"></div>
              <div class="list2">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="cont-2">
          <ul>
            <li v-for="(item,index) in tags02" :class="{sel:index == -1}" :key="index" @click="tags2(index,item.id)">{{item.name}}</li>
          </ul>
        </div>
        <div class="cont-3">
          <div class="noList" v-if="productList.data < 1" style="padding: 20px 0;">
            <div v-if="productList.data.length < 1" style="text-align: center;font-size: 16px;color: #604775;">暂未有产品推荐哦~</div>
          </div>
          <div class="swiper-container swiperHome02" v-else>
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in productList.data" :key="index">
                <div  @click="moveTo(item.id)" style="cursor: pointer">
                  <div class="slide-top">
                    <img :src="$baseLink+item.pic" alt="">
                    <button class="search" @click="moveTo(item.id)"></button>
                    <div class="slide-mask"></div>
                  </div>
                  <div class="slide-bottom">
                    <div>
                      <div class="slide-title" style="font-size: 16px;">{{item.name}}</div>
                      <div class="slide-desc textEllipsis">{{item.desc}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-prev prevHome02"></div>
          <div class="swiper-button-next nextHome02"></div>
        </div>
      </div>
      <div class="moreButton">
        <button @click="more(0)">MORE</button>
      </div>
    </div>
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
            <div style="cursor:pointer;" @click="videobofang(item.path)" class="swiper-slide" v-for="(item,index) in videoList" :key="index">
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
      <div class="moreButton">
        <button @click="more(1)">MORE</button>
      </div>
    </div>
    <div class="l3 l4" style="margin-bottom: 40px;">
      <div class="title" style="margin-bottom: 5px;">
        <div class="title-1">
          <span>招商</span><span class="color">加盟</span>
        </div>
        <div class="title-2"><span>MERCHANTS JOINING</span></div>
      </div>
      <div class="cont">
        <div class="swiper-container swiperHome04 swiper-no-swiping">
          <div class="swiper-wrapper">
            <div style="cursor: pointer;" @click="jmNavTo(index)" class="swiper-slide" v-for="(item,index) in slideJoin" :key="index">
              <!--<div class="slide_1">-->
                <!--<div class="s1-title textEllipsis">{{item.title}}</div>-->
                <!--<div class="s1-desc">-->
                  <!--<p>{{item.desc}}</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="slide_2">-->
                <!--<img :src="$baseLink+item.pic" alt="">-->
              <!--</div>-->
              <!--<div class="slide_3">-->
                <!--<span>{{item.name}}</span>-->
              <!--</div>-->
              <div class="center">
                <div class="slide-1">
                  <div>
                    <img :src="$baseLink+item.pic" alt="">
                  </div>
                </div>
                <div class="slide-2">
                  <div class="s2_1">{{item.title}}</div>
                  <div class="s2_2"></div>
                </div>
                <div class="slide-3">
                  <p>{{item.desc}}</p>
                </div>
                <div class="slide-4 center">
                  <!--<div class="button01 center">-->
                    <!--<div class="icon"></div>-->
                  <!--</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prevHome04" style="display: none;"></div>
        <div class="swiper-button-next nextHome04" style="display: none;"></div>
      </div>
    </div>
    <div class="l5">
      <div class="title">
        <div class="title-1">
          <span class="color">新闻</span><span>动态</span>
        </div>
        <div class="title-2"><span>NEWS</span></div>
      </div>
      <div class="title01">
        <img src="../../static/img/title01_1.png" alt="">
      </div>
      <div class="newsBoxes">
      	<div class="newsLeft">
      		<div class="newsLeftIn">
      			<div class="swiper-container swiperHome05">
		          <div class="swiper-wrapper">
		            <div  class="swiper-slide" v-for="(item,index) in newsList" :key="index" style="height: 100%;width: 100%;background-color: #fff;cursor: pointer;" @click="moveTo01(item.id)">
		              <div class="slideImg">
		                <img :src="$baseLink+item.pic" alt="">
		              </div>
		            </div>
		          </div>
		          <div class="swiper-pagination"></div>
		        </div>
      		</div>
      	</div>
      	<div class="newsRight">
          <div class="swiper-container swiper_01">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :class="{sel:newsIndex == index}" v-for="(item,index) in newsList" :key="index"  @click="moveTo01(item.id)">
                <div class="nrBox">
                  <div class="nrTitle">
                    <p class="textEllipsis" style="width: 75%;">{{item.title}}</p>
                  </div>
                  <div class="nrContent">
                    <p>{{item.desc}}</p>
                  </div>
                  <div class="nrDate">
                    <p>{{item.time|newTime}}</p>
                    <div class="moreRead"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      	</div>
      </div>
      <div class="moreButton">
        <button @click="more(2)">MORE</button>
      </div>
    </div>
    <div class="l6" v-if="detailImg.length != 0">
      <img :src="$baseLink+detailImg[0].pic" alt="">
      <div class="wrap">
        <div>
          <div class="title">
            <div class="title-1">
              <span>企业</span><span class="color">介绍</span>
            </div>
            <div class="title-2"><span>COMPANY INTRODUCTION</span></div>
          </div>
          <div class="cont" v-if="companyInfo.length != 0">
            <p>{{companyInfo[0].content}}</p>
          </div>
          <div class="moreButton">
            <button style="width: 192px;" @click="more(3)">MORE</button>
          </div>
        </div>
      </div>
    </div>
    <div class="l7">
      <div class="title">
        <div class="title-1">
          <span class="color">服务</span><span>说明</span>
        </div>
        <div class="title-2"><span>SERVICE DESCRIPTION</span></div>
      </div>
      <div class="l2-2">
        <div class="swiper-container swiperHome06 swiper-no-swiping">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item,index) in iconDetail" :key="index" >
              <!--<router-link :to="item.url">-->
                <div class="slide1" :class="{default:item.icon == ''}" style="border: 0;">
                  <img :src="item.icon" alt="">
                </div>
                <div class="slide2">
                  <span>{{item.text}}</span>
                </div>
              <!--</router-link>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="l8" style="display: none  ">
      <ul>
        <li class="li1" @click="bottomBtn(1)" style="display: none"></li>
        <li class="li2" @click="bottomBtn(2)" style="display: none">
          <!--<a style="display: block;width: 100%;height: 100%;opacity: 0;" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=164992537&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=392563086" alt="点击联系在线客服" title="点击联系在线客服"/></a>-->
          <a ref="kefu" id="kefu" style="display: block;width: 100%;height: 100%;opacity: 0;" :href="'tencent://message/?uin='+qqNum+'&Site=http://vps.shuidazhe.com&Menu=yes'">PC版</a>
        </li>
        <li class="li3" @click="bottomBtn(3)" style="display: none"></li>
        <li class="li4" style="display: none">
          <div class="erwei">
            <img src="../../static/img/er1.jpg" alt="">
          </div>
        </li>
        <li class="li5" @click="toTop"></li>
      </ul>
    </div>
    <!--侧边咨询-->
    <div class="l9">
      <div>
        <div class="l9_wrap">
          <div class="w_1">
            <div class="head">
              <div class="img">
                <img src="../../static/img/head01.jpg" alt="">
              </div>
              <span class="icon"></span>
            </div>
          </div>
          <div class="w_2">
            <button @click="zixun">在线咨询</button>
          </div>
        </div>
      </div>
    </div>
    <!--播放视频-->
    <div class="videoWrap" v-if="videoStatus">
      <div>
        <div class="wrap">
          <iframe height='498' allowfullscreen="true" allowtransparency="true" width='760' :src='videoPath' frameborder=0></iframe>
          <div class="close01" @click="videoStatus = false"></div>
        </div>
      </div>
    </div>
    <!--活动弹窗-->
    <div id="activity" v-show="activeStatus">
      <div>
        <img class="rota" src="../../static/img/light01.png" alt="">
        <div class="activeWrap">
          <div class="swiper-container aw ">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in awList" :key="index">
                <div class="w_img">
                  <a :href="item.url" style="" target="_blank">
                    <img :src="$baseLink+item.pics" alt="">
                  </a>
                </div>
                <div class="w_info">
                  <div class="info-name">活动主题：{{item.title}}</div>
                  <div class="info-time">活动时间：{{item.date}}至{{item.dates}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev prevaw"></div>
          <div class="swiper-button-next nextaw"></div>
          <div class="close02">
            <div class="closeBtn" @click="activeStatus = false"></div>
          </div>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
    export default {
      name: "homePage",
      data(){
        return {
          bannerImg:[],//banner轮播图
          bannerVideo:true,//bannner视频
          bannerVideoSrc:'###',
          tags01:[],//产品二级分类
          tags02:[],//产品三级分类
          videoStatus:false,//视频弹窗
          videoPath:'',//视频iframe地址
          productList:[],//产品列表
          productSwiper:null,//产品轮播
          videoList:[
            {path:'http://player.youku.com/embed/XMzcwODE1MDE5Mg==',title:'雅洁智能锁，开启智慧生活',desc:'雅洁智能锁，开启智慧生活'},
            {path:'http://player.youku.com/embed/XMzcwODE2OTg4NA==',title:'雅洁智能锁，开启智慧生活',desc:'雅洁智能锁，开启智慧生活'},
            {path:'http://player.youku.com/embed/XMzcwODE3NjA0NA==',title:'雅洁智能锁，开启智慧生活',desc:'雅洁智能锁，开启智慧生活'}
          ],//首页视频
          newsList:[],//新闻动态列表
          newIdx:0,
          //企业介绍
          companyInfo:[],
          newsIndex:0,
          swiperHome05:null,
          iconDetail:[
            {icon:'static/img/serviseIcon/17-03.png',url:'',text:'快捷在线服务'},
            {icon:'static/img/serviseIcon/18-03.png',url:'',text:'官方品牌保障'},
            {icon:'static/img/serviseIcon/19-03.png',url:'',text:'专业人员安装'},
            {icon:'static/img/serviseIcon/20-03.png',url:'',text:'远程技术支持'},
            {icon:'static/img/serviseIcon/21-03.png',url:'',text:'定期巡检维护'},
            {icon:'static/img/serviseIcon/22-03.png',url:'',text:'迅速上门响应'},
            {icon:'static/img/serviseIcon/23-03.png',url:'',text:'承诺质量退换'}
          ],
          //招商加盟
          slideJoin:[],
          // 企业介绍
          detailInfo:[],//内容
          detailImg:'',//背景图

          activeStatus:false,
          active:[],
          aw:'',
          awList:[],
          qqNum:'',
          vList:[],//banner视频列表
          vbanner:[],//banner图
          bannerStatus:0 //0-视频 1-图片
        }
      },
      filters:{
        time01:function (value) {
          var Y,M,D,month;
          var date = new Date(value * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          Y = date.getFullYear();
          M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
          D = date.getDate();
          return Y+'-'+M+'-'+D;
        },
        newDesc02:function (value) {
          var str = value.slice(0,22);
          str = str+'...';
          return str
        },
        newTime:function (value) {
          var Y,M,D,month;
          var date = new Date(value * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          Y = date.getFullYear();
          M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
          D = date.getDate();
          return Y+'-'+M+'-'+D;
        }
      },
      methods:{
        tags2(i,id){
          const that = this;
          $('.cont-2 li').removeClass('sel');
          $('.cont-2 li').eq(i).addClass('sel');
          // console.log(i,id);
          //获取产品列表
          that.$api.axiosGet('/index/product/getProductList/type/limit4/id/'+id,{},function (data) {
            // console.log(data);
            that.productList = data.data.list;
            console.log(that.productList);
            setTimeout(function () {
              that.productSwiper.slideTo(0)
            },20)
          })
        },
        videobofang(i){
          this.videoPath = i;
          this.videoStatus = true;
        },
        tags01Btn(i,id){
          const that = this;
          $('.cont-2 li').removeClass('sel');
          $('.l2 .cont-1>div>div').removeClass('sel');
          $('.l2 .cont-1>div>div').eq(i).addClass('sel');
          //获取产品三级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+id,{},function (data) {
            // console.log(data);
            that.tags02 = data.data.cates.all;
            // that.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+id,{},function (data) {
            //   // console.log(data);
            //   that.productList = data.data.list;
            //   setTimeout(function () {
            //     that.productSwiper.slideTo(0)
            //   },20)
            // })
            that.$api.axiosGet('/index/product/getProductList/type/limit4/id/'+id,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
              // console.log(that.productList);
              // 产品列表轮播
              setTimeout(function () {
                that.productSwiper.slideTo(0)
              },20)
            })
          })
        },
        newBtn(i){
          this.newsIndex = i;
          this.swiperHome05.slideTo(this.newsIndex);
        },
        toTop(){
          $("html,body").animate({scrollTop:0}, 500);
        },
        more(i){
          //0-产品推荐 1-创新技术 2-新闻动态 3-企业介绍
          if(i == 0){
            this.$router.push('/productCenter');
          }else if(i == 1){
            this.$router.push('/partner/partnerInstall');
          }else if(i == 2){
            this.$router.push('/information/informationNews')
          }else if(i == 3){
            this.$router.push('/aboutUs/aboutUsIntro')
          }
        },
        bottomBtn(i){
          //1-最新活动 2-在线客服 3-全国网点
          if(i == 1){
            this.$router.push('/information/informationNews')
          }else if(i == 2){

          }else if(i == 3){
            this.$router.push('/service/serviceShop')
          }
        },
        moveTo(i){
          // console.log(i);
          this.$router.push({
            path: '/productDetail',
            query:{
              id:i
            }
          })
        },
        moveTo01(i){
          // console.log(i);
          this.$router.push({
            path: '/information/informationDetail',
            query:{
              id:i
            }
          })
        },
        zixun(){
          document.getElementById("kefu").click()
        },
        videoPlay(){
          this.videoPath = this.bannerVideoSrc;
          this.videoStatus = true;
        },
        jmNavTo(i){
          var index = i+1;
          this.$router.push({
            path:'/inviteJoin',
            query:{
              id : index
            }
          })
        },
        navTo2(i){
          if(i){
            window.location.href = i
          }else{

          }
        }
      },
      mounted(){
        const that = this;

        var swiperHome06 = new Swiper('.swiperHome06',{
          slidesPerView: 7,
          spaceBetween: 10
        });
        // 页面右下导航
        $('.l8 .li4').hover(function () {
          $('.l8 .li4 .erwei').css('display','flex')
          setTimeout(function () {
            $('.l8 .li4').addClass('ho')
          },10)
        },function () {
          $('.l8 .li4').removeClass('ho')
          setTimeout(function () {
            $('.l8 .li4 .erwei').css('display','none')
          },10)
        })
        // 监听滚动条滚动
        $(window).scroll(function(event){
          if($(window).scrollTop()>1000){
            $('.l8').addClass('show');
          }else{
            $('.l8').removeClass('show');
          }
          if($(window).scrollTop()>1000){
            $('.l9').addClass('show');
          }else{
            $('.l9').removeClass('show');
          }
        });
        // 获取banner图
        this.$api.axiosGet('/index/index/getPics/location/1',{},function (data) {
          // console.log(data);
          var data1 = data.data.pics;
          // 分开视频
          for(var i = 0;i<data1.length;i++){
            if(data1[i].path == ''){
              that.vbanner.push(data1[i])
            }else{
              that.vList.push(data1[i])
            }
          }
          // console.log(that.vbanner);
          // console.log(that.vList);
          that.bannerVideoSrc = data.data.pics[0].path;
          that.bannerImg = data.data.pics;
          setTimeout(function () {
            var swiperHome = new Swiper('.swiperHome',{
              pagination:'.paginHome1',
              prevButton: '.prevHome',
              nextButton: '.nextHome',
              // loop:true,
              autoplay: 8000,
              speed:1500,
              autoplayStopOnLast:true,
              noSwiping : true,
              observer:true,
              autoplayDisableOnInteraction : false,
              onInit:function(swiper){
                // console.log(that.vList);
                if(that.vList.length>0){
                  swiper.stopAutoplay();
                  $('.videobtn a').addClass('sel');
                }
              },
              onReachEnd: function(swiper){
                if(that.vList.length>0){
                  setTimeout(function () {
                    swiper.slideTo(1);
                  },8000)
                }
              },
              onSlideChangeStart:function (swiper) {
                // console.log(swiper.activeIndex);
                // that.bannerVideoSrc = data.data.pics[swiper.activeIndex].path;
                // console.log(swiper.activeIndex)
                if(that.vList.length>0){
                  if(swiper.activeIndex>0){
                    swiper.startAutoplay();
                    $('.paginHome').addClass('sel');
                    $('.videobtn a').removeClass('sel');
                    if(swiper.activeIndex == 1){
                      swiper.lockSwipeToPrev();
                    }else{
                      swiper.unlockSwipeToPrev();
                    }
                  }else{
                    swiper.stopAutoplay();
                    $('.paginHome').removeClass('sel');
                    $('.videobtn a').addClass('sel');
                  }
                }
              }
            });
            // 鼠标移入移出播放视频
            // $('.swiperHome').on('mouseenter',function () {
            //   swiperHome.stopAutoplay();
            // })
            // $('.swiperHome').on('mouseleave',function () {
            //   swiperHome.startAutoplay();
            //
            // });
            $('.videobtn a').on('click',function () {
              var index = swiperHome.activeIndex;
              swiperHome.unlockSwipeToPrev();
              swiperHome.slideTo(0);
              $(this).addClass('sel');
              $('.paginHome').removeClass('sel');
            });
            $('.paginHome').on('click',function () {
              var index = swiperHome.activeIndex;
              $(this).addClass('sel');
              swiperHome.slideNext();
            })
            $('.videoMask').on('click',function () {
              $(this).hide();
              $('.video')[0].play();
            })
            $('.video')[0].addEventListener("ended",function(){
              // console.log("结束");
              $('.videoMask').show();
            })
          },100);
        });
        // 获取首页视频
        // this.$api.axiosGet('/index/index/getPics',{},function (data) {
        //   console.log(data);
        //   that.videoList = data.data.pics;
        // })
        //获取产品推荐
        //获取产品顶级标签
        this.$api.axiosGet('/index/product/getCates/pid/0',{},function (data) {
          // console.log(data);
          that.tags01 = data.data.cates;
          var id01 = data.data.cates[0].id;
          //获取产品三级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+data.data.cates[0].id,{},function (data) {
            // console.log(data);
            that.tags02 = data.data.cates.all;
            //获取产品列表
            that.$api.axiosGet('/index/product/getProductList/type/limit4/id/'+id01,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
              // console.log(that.productList);
              // 产品列表轮播
              setTimeout(function () {
                that.productSwiper = new Swiper('.swiperHome02',{
                  slidesPerView:4,
                  prevButton: '.prevHome02',
                  nextButton: '.nextHome02',
                  observer:true
                });
              },20)
            })
          })
        })
        //获取新闻动态
        this.$api.axiosGet('/index/index/getNewsList/commend/1/'+1,{},function (data) {
          // console.log('新闻动态',data);
          that.newsList = data.data.list.data;
          //新闻资讯
          setTimeout(function () {
            that.swiperHome05 = new Swiper('.swiperHome05',{
              prevButton:'.prev05',
              nextButton:'.next05',
              effect : 'fade',//淡入效果
              pagination : '.swiper-pagination',
              autoplay:3000,
              paginationClickable :true,
              onSlideChangeStart: function(swiper){
                that.newsIndex = swiper.activeIndex;
                swiper_01.slideTo(swiper.activeIndex);
              }
            });
            var swiper_01 = new Swiper('.swiper_01',{
              direction : 'vertical',
              slidesPerView:3,
              spaceBetween:5,
              observer:true
            });
          },50)
        })
        // 企业介绍
          // 内容
        this.$api.axiosGet('/index/about/getProfile',{},function (data) {
          // console.log(data);
          that.companyInfo = data.data.profile;
        });
          // 背景图
        this.$api.axiosGet('/index/index/getImg/location/1',{},function (data) {
          // console.log(data);
          that.detailImg = data.data.img;
        });
        // 创新技术
        this.$api.axiosGet('/index/index/getTechnology/location/1',{},function (data) {
          // console.log(data);
          that.videoList = data.data.technology;
          // that.videoList = that.videoList.slice(0,1);
          var length = data.data.technology.length;
          if(length<4){
            var l = 139*(4-length);
            // console.log(l);
            $('.swiperHome03').css({
              '-webkit-transform': 'translateX('+l+'px)',
              '-moz-transform': 'translateX('+l+'px)',
              '-ms-transform': 'translateX('+l+'px)',
              '-o-transform': 'translateX('+l+'px)',
              'transform': 'translateX('+l+'px)',
              // 'margin-left': -w/2+'px'
            })
          }
          setTimeout(function () {
            var swiperHome03 = new Swiper('.swiperHome03',{
              slidesPerView:4,
              spaceBetween:15,
              observer:true
            });
          },50);
        })
        // 招商加盟
        this.$api.axiosGet('/index/index/getJoin/location/1',{},function (data) {
          // console.log(data);
          that.slideJoin = data.data.join;
          setTimeout(function () {
            var swiperHome04 = new Swiper('.swiperHome04',{
              slidesPerView:3,
              // centeredSlides:true,
              spaceBetween:50,
              prevButton: '.prevHome04',
              nextButton: '.nextHome04',
              // loop:true,
              observer:true
            });
          },10)
        })
        // 获取活动信息
        this.$api.axiosPost('/index/About/activity',0,{},function (data) {
          that.awList = data.data.data;
          // console.log(that.awList.length);
          if(that.awList.length == 0) {
            that.activeStatus = false;
          }else{
            var date = new Date();
            var day = date.getDate();
            var countNum = 1;
            if(localStorage.getItem('day') == null && localStorage.getItem('countNum') == null){
              localStorage.setItem('day',day);
              localStorage.setItem('countNum',countNum);
            }else{
              var d = parseInt(localStorage.getItem('day'));
              var count = parseInt(localStorage.getItem('countNum'));
              var dayNow = new Date().getDate();
              // console.log(d);
              if(dayNow == d){
                if(count<3){
                  that.activeStatus = true;
                  count++
                  localStorage.setItem('countNum',count);
                }else{
                  that.activeStatus = false;
                }
              }else{
                that.activeStatus = true;
                var date1 = new Date();
                var day1 = date1.getDate();
                // console.log(day1)
                count = 1;
                localStorage.setItem('countNum',count);
                localStorage.setItem('day',day1);
              }
            }
          }
          var data1 = data.data.data;
          setTimeout(function () {
            that.aw = new Swiper('.aw',{
              autoplay:2500,
              speed:1000,
              loop:true,
              observer:true,
              observeParents:true,
              prevButton:'.prevaw',
              nextButton:'.nextaw',
              onInit:function (swiper) {

              }
            });
            // console.log(data1)
            if(data1.length>1){
              that.aw.unlockSwipes();
              $('.prevaw').show();
              $('.nextaw').show();
            }else{
              that.aw.lockSwipes();
              $('.prevaw').hide();
              $('.nextaw').hide();
            }
          },10)
        })
        // 获取管理员qq号
        this.$api.axiosPost('/index/About/zx',0,{},function (data) {
          // console.log(data);
          that.qqNum = data.data.data[0].name;
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/homePage.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
