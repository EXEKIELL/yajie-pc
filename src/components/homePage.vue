<template>
  <div id="homePage">
    <div class="list1 l1">
      <div class="swiper-container swiperHome">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../static/img/banner05.png" alt="">
            <!--<div class="button"></div>-->
          </div>
          <div class="swiper-slide">
            <img src="../../static/img/banner05.png" alt="">
            <!--<div class="button"></div>-->
          </div>
          <div class="swiper-slide">
            <img src="../../static/img/banner05.png" alt="">
            <!--<div class="button"></div>-->
          </div>
        </div>
        <div class="swiper-button-prev prevHome"></div>
        <div class="swiper-button-next nextHome"></div>
        <div class="swiper-wrap2">
          <div class="video">
            <span></span><span>视频</span>
          </div>
          <div class="swiper-pagination paginHome"></div>
        </div>
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
            <div :id="item.id" :class="{sel:index == 0,c1List1:index == 0,c1List2:index == 1,c1List3:index == 2}" v-for="(item,index) in tags01" :key="index" @click="tags01Btn(index,item.id)">
              <div class="list1"></div>
              <div class="list2">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="cont-2">
          <ul>
            <li v-for="(item,index) in tags02" :class="{sel:index == 0}" :key="index" @click="tags2(index)">{{item.name}}</li>
          </ul>
        </div>
        <div class="cont-3">
          <div class="swiper-container swiperHome02">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-top">
                  <img src="../../static/img/img29.png" alt="">
                  <button class="search"></button>
                </div>
                <div class="slide-bottom">
                  <div>
                    <div class="slide-title">雅洁五金产品名称产品名称产品名称</div>
                    <div class="slide-desc textEllipsis">雅洁五金产品名称产品名称</div>
                  </div>
                </div>
                <div class="slide-mask">
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-top">
                  <img src="../../static/img/img29.png" alt="">
                  <button class="search"></button>
                </div>
                <div class="slide-bottom">
                  <div>
                    <div class="slide-title">雅洁五金产品名称产品名称产品名称</div>
                    <div class="slide-desc textEllipsis">雅洁五金产品名称产品名称</div>
                  </div>
                </div>
                <div class="slide-mask">
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-top">
                  <img src="../../static/img/img29.png" alt="">
                  <button class="search"></button>
                </div>
                <div class="slide-bottom">
                  <div>
                    <div class="slide-title">雅洁五金产品名称产品名称产品名称</div>
                    <div class="slide-desc textEllipsis">雅洁五金产品名称产品名称</div>
                  </div>
                </div>
                <div class="slide-mask">
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-top">
                  <img src="../../static/img/img29.png" alt="">
                  <button class="search"></button>
                </div>
                <div class="slide-bottom">
                  <div>
                    <div class="slide-title">雅洁五金产品名称产品名称产品名称</div>
                    <div class="slide-desc textEllipsis">雅洁五金产品名称产品名称</div>
                  </div>
                </div>
                <div class="slide-mask">
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-top">
                  <img src="../../static/img/img29.png" alt="">
                  <button class="search"></button>
                </div>
                <div class="slide-bottom">
                  <div>
                    <div class="slide-title">雅洁五金产品名称产品名称产品名称</div>
                    <div class="slide-desc textEllipsis">雅洁五金产品名称产品名称</div>
                  </div>
                </div>
                <div class="slide-mask">
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev prevHome02"></div>
          <div class="swiper-button-next nextHome02"></div>
        </div>
      </div>
      <div class="moreButton">
        <button>MORE</button>
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
            <div class="swiper-slide">
              <div class="st03-top">
                <img src="../../static/img/img30.png" alt="">
                <div class="st03-topMask">
                  <button class="bofang"></button>
                </div>
              </div>
              <div class="st03-bottom">
                <div class="st03-wrap">
                  <div class="st03-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                  <div class="st03-desc textEllipsis">雅洁五金产品名称产品名称</div>
                </div>
                <div class="jiantou"></div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="st03-top">
                <img src="../../static/img/img30.png" alt="">
                <div class="st03-topMask">
                  <button class="bofang"></button>
                </div>
              </div>
              <div class="st03-bottom">
                <div class="st03-wrap">
                  <div class="st03-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                  <div class="st03-desc textEllipsis">雅洁五金产品名称产品名称</div>
                </div>
                <div class="jiantou"></div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="st03-top">
                <img src="../../static/img/img30.png" alt="">
                <div class="st03-topMask">
                  <button class="bofang"></button>
                </div>
              </div>
              <div class="st03-bottom">
                <div class="st03-wrap">
                  <div class="st03-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                  <div class="st03-desc textEllipsis">雅洁五金产品名称产品名称</div>
                </div>
                <div class="jiantou"></div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="st03-top">
                <img src="../../static/img/img30.png" alt="">
                <div class="st03-topMask">
                  <button class="bofang"></button>
                </div>
              </div>
              <div class="st03-bottom">
                <div class="st03-wrap">
                  <div class="st03-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                  <div class="st03-desc textEllipsis">雅洁五金产品名称产品名称</div>
                </div>
                <div class="jiantou"></div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="st03-top">
                <img src="../../static/img/img30.png" alt="">
                <div class="st03-topMask">
                  <button class="bofang"></button>
                </div>
              </div>
              <div class="st03-bottom">
                <div class="st03-wrap">
                  <div class="st03-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                  <div class="st03-desc textEllipsis">雅洁五金产品名称产品名称</div>
                </div>
                <div class="jiantou"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="moreButton">
        <button>MORE</button>
      </div>
    </div>
    <div class="l3 l4">
      <div class="title">
        <div class="title-1">
          <span>招商</span><span class="color">加盟</span>
        </div>
        <div class="title-2"><span>MERCHANTS JOINING</span></div>
      </div>
      <div class="cont">
        <div class="swiper-container swiperHome04">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slide_1">
                <div class="s1-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                <div class="s1-desc">
                  <p>雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产...</p>
                </div>
              </div>
              <div class="slide_2">
                <img src="../../static/img/img31.png" alt="">
              </div>
              <div class="slide_3">
                <span>名称名称01</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide_1">
                <div class="s1-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                <div class="s1-desc">
                  <p>雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产...</p>
                </div>
              </div>
              <div class="slide_2">
                <img src="../../static/img/img31.png" alt="">
              </div>
              <div class="slide_3">
                <span>名称名称01</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide_1">
                <div class="s1-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                <div class="s1-desc">
                  <p>雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产...</p>
                </div>
              </div>
              <div class="slide_2">
                <img src="../../static/img/img31.png" alt="">
              </div>
              <div class="slide_3">
                <span>名称名称01</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide_1">
                <div class="s1-title textEllipsis">雅洁五金产品名称产品名称产品名称</div>
                <div class="s1-desc">
                  <p>雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产品名称产品名称产品名称雅洁五金产...</p>
                </div>
              </div>
              <div class="slide_2">
                <img src="../../static/img/img31.png" alt="">
              </div>
              <div class="slide_3">
                <span>名称名称01</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prevHome04"></div>
        <div class="swiper-button-next nextHome04"></div>
      </div>
    </div>
    <div class="l5">
      <div class="title l5-title">
        <div class="title-1">
          <span class="color">新闻</span><span>动态</span>
        </div>
        <div class="title-2"><span>NEWS</span></div>
      </div>
      <div class="title01">
        <img src="../../static/img/title01.png" alt="">
      </div>
      <div class="cont-5">
        <div class="swiper-container swiperHome05">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in newsList" :key="index">
              <div class="slideImg">
                <img :src="'http://archie.web.hengdikeji.com'+item.pic" alt="">
              </div>
              <div class="slideInfo">
                <div>
                  <div class="info1">
                    <div class="i1-1">{{item.title}}</div>
                    <div class="i1-2">{{item.time|time01}}</div>
                  </div>
                  <div class="info2">
                    <p>{{item.desc}}</p>
                  </div>
                  <div class="info3">
                    <span class="more">MORE</span><span class="moreJT">&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagin05">
          <div class="p5Slide s1 " :class="{sel:newsIndex == index,s1:index == 0,s2:index == 1,s3:index == 2,s4:index == 3}" v-for="(item,index) in newsList" :key="index">
            <div class="slide-img">
              <img :src="'http://archie.web.hengdikeji.com'+item.pic" alt="">
            </div>
            <div class="mask" @click="newBtn(index)">
              <div>
                <div class="mask1 textEllipsis">{{item.title}}</div>
                <div class="mask2">
                  <p>{{item.desc|newDesc02}}</p>
                </div>
                <div class="mask3">0{{index}}.</div>
              </div>
            </div>
          </div>
          <!--<div class="p5Slide s2 " :class="{sel:newsIndex == 1}" >-->
            <!--<div class="slide-img">-->
              <!--<img src="../../static/img/img32.png" alt="">-->
            <!--</div>-->
            <!--<div class="mask" @click="newBtn(1)">-->
              <!--<div>-->
                <!--<div class="mask1 textEllipsis">雅洁五金新闻资讯</div>-->
                <!--<div class="mask2">-->
                  <!--<p>好的设计一定是特殊的，当你看到它的时候，你的内心就会告诉自己...</p>-->
                <!--</div>-->
                <!--<div class="mask3">01.</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="p5Slide s3 " :class="{sel:newsIndex == 2}" >-->
            <!--<div class="slide-img">-->
              <!--<img src="../../static/img/img32.png" alt="">-->
            <!--</div>-->
            <!--<div class="mask" @click="newBtn(2)">-->
              <!--<div>-->
                <!--<div class="mask1 textEllipsis">雅洁五金新闻资讯</div>-->
                <!--<div class="mask2">-->
                  <!--<p>好的设计一定是特殊的，当你看到它的时候，你的内心就会告诉自己...</p>-->
                <!--</div>-->
                <!--<div class="mask3">01.</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="p5Slide s4 " :class="{sel:newsIndex == 3}" >-->
            <!--<div class="slide-img">-->
              <!--<img src="../../static/img/img32.png" alt="">-->
            <!--</div>-->
            <!--<div class="mask" @click="newBtn(3)">-->
              <!--<div>-->
                <!--<div class="mask1 textEllipsis">雅洁五金新闻资讯</div>-->
                <!--<div class="mask2">-->
                  <!--<p>好的设计一定是特殊的，当你看到它的时候，你的内心就会告诉自己...</p>-->
                <!--</div>-->
                <!--<div class="mask3">01.</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div class="p5Button">
            <div>
              <div class="swiper-button-prev prev05"></div>
              <div class="shu"></div>
              <div class="swiper-button-next next05"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="moreButton">
        <button>MORE</button>
      </div>
    </div>
    <div class="l6">
      <img src="../../static/img/banner06.png" alt="">
      <div class="wrap">
        <div>
          <div class="title">
            <div class="title-1">
              <span>企业</span><span class="color">介绍</span>
            </div>
            <div class="title-2"><span>COMPANY INTRODUCTION</span></div>
          </div>
          <div class="cont">
            <p>{{companyInfo}}</p>
          </div>
          <div class="moreButton">
            <button style="width: 192px;">MORE</button>
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
        <div class="swiper-container swiperHome06">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :class="{sel:index == 0}" v-for="(item,index) in iconDetail" :key="index" @click="select(index)">
              <router-link :to="item.url">
                <div class="slide1" :class="{default:item.icon == ''}">
                  <img :src="item.icon" alt="">
                </div>
                <div class="slide2">
                  <span>{{item.text}}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="l8">
      <ul>
        <li class="li1"></li>
        <li class="li2"></li>
        <li class="li3"></li>
        <li class="li4">
          <div class="erwei">
            <img src="../../static/img/erwei01.png" alt="">
          </div>
        </li>
        <li class="li5" @click="toTop"></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "homePage",
      data(){
        return {
          tags01:[],//产品二级分类
          tags02:[],//产品三级分类
          productList:[],//产品列表
          newsList:[],//新闻动态列表
          companyInfo:'广东雅洁五金有限公司，始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、建筑门锁、卫浴五金、门用五金、家具五金等众多品类。',
          newsIndex:0,
          swiperHome05:null,
          iconDetail:[
            {icon:'../../static/img/img01.png',url:'',text:'全国联保'},
            {icon:'',url:'/productCenter/ProductList',text:'全国联保'},
            {icon:'',url:'',text:'全国联保'},
            {icon:'',url:'',text:'全国联保'},
            {icon:'',url:'',text:'全国联保'},
            {icon:'',url:'',text:'全国联保'},
            {icon:'',url:'',text:'全国联保'},
            {icon:'',url:'',text:'全国联保'},
            {icon:'',url:'',text:'全国联保'},
          ]
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
        }
      },
      methods:{
        tags2(i){
          $('.cont-2 li').removeClass('sel');
          $('.cont-2 li').eq(i).addClass('sel');
        },
        tags01Btn(i,id){
          const that = this;
          $('.l2 .cont-1>div>div').removeClass('sel');
          $('.l2 .cont-1>div>div').eq(i).addClass('sel');
          //获取产品三级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+id,{},function (data) {
            console.log(data);
            that.tags02 = data.data.cates.all;
          })
        },
        newBtn(i){
          this.newsIndex = i;
          this.swiperHome05.slideTo(this.newsIndex);
        },
        toTop(){
          $("html,body").animate({scrollTop:0}, 500);
        }
      },
      mounted(){
        const that = this;
        var swiperHome = new Swiper('.swiperHome',{
          pagination:'.paginHome',
          prevButton: '.prevHome',
          nextButton: '.nextHome',
          autoplay: 5000
        });
        var swiperHome02 = new Swiper('.swiperHome02',{
          slidesPerView:4,
          prevButton: '.prevHome02',
          nextButton: '.nextHome02'
        });
        var swiperHome03 = new Swiper('.swiperHome03',{
          slidesPerView:4,
          spaceBetween:15
        });
        var swiperHome04 = new Swiper('.swiperHome04',{
          slidesPerView:3.5,
          spaceBetween:10,
          prevButton: '.prevHome04',
          nextButton: '.nextHome04',
          loop:true
        });
        var swiperHome06 = new Swiper('.swiperHome06',{
          slidesPerView: 6,
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
        });

        //获取产品推荐
        //获取产品顶级标签
        this.$api.axiosGet('/index/product/getCates/pid/0',{},function (data) {
          console.log(data);
          that.tags01 = data.data.cates;
          //获取产品三级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+data.data.cates[0].id,{},function (data) {
            console.log(data);
            that.tags02 = data.data.cates.all;
            //获取产品列表
            that.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+data.data.cates.all[0].id,{},function (data) {
              console.log(data)
            })
          })
        })
        //获取新闻动态
        this.$api.axiosGet('/index/news/getNewsList/'+1,{},function (data) {
          console.log(data);
          that.newsList = data.data.list.data;
          //新闻资讯
          setTimeout(function () {
            that.swiperHome05 = new Swiper('.swiperHome05',{
              prevButton:'.prev05',
              nextButton:'.next05',
              effect : 'fade',//淡入效果
              onSlideChangeStart: function(swiper){
                that.newsIndex = swiper.activeIndex;
              }
            });
          },50)
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
