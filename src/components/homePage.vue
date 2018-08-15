<template>
  <div id="homePage">
    <div class="list1 l1">
      <div class="swiper-container swiperHome">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerImg" :key="index">
            <img :src="$baseLink+item.pics" alt="">
            <!--<div class="button"></div>-->
          </div>
        </div>
        <div class="swiper-button-prev prevHome"></div>
        <div class="swiper-button-next nextHome"></div>
        <div class="swiper-wrap2">
          <div class="video" v-if="bannerVideo">
            <a :href="bannerVideoSrc">
              <span></span><span>视频</span>
            </a>
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
            <li v-for="(item,index) in tags02" :class="{sel:index == 0}" :key="index" @click="tags2(index,item.id)">{{item.name}}</li>
          </ul>
        </div>
        <div class="cont-3">
          <div class="swiper-container swiperHome02">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in productList.data" :key="index">
                <div>
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
          <div class="noList" v-if="productList.data" style="padding: 20px 0;">
            <div v-if="productList.data.length < 1" style="text-align: center;font-size: 16px;color: #604775;">暂未有产品推荐哦~</div>
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
            <div class="swiper-slide" v-for="(item,index) in videoList" :key="index">
              <div>
                <div class="st03-top">
                  <img :src="$baseLink+item.pic" alt="">
                  <!--<iframe height='178' allowfullscreen="true" allowtransparency="true" width='273' :src='item.path' frameborder=0></iframe>-->
                  <!--<iframe height='178' allowfullscreen="true" allowtransparency="true" width='273' src='http://player.youku.com/embed/XMzcwODE2OTg4NA==' frameborder=0></iframe>-->
                  <!--<iframe height='178' allowfullscreen="true" allowtransparency="true" width='273' src='http://player.youku.com/embed/XMzcwODE3NjA0NA==' frameborder=0></iframe>-->
                  <div class="st03-topMask">
                    <button class="bofang" @click="videobofang(item.path)"></button>
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
            <div class="swiper-slide" v-for="(item,index) in slideJoin" :key="index">
              <div class="slide_1">
                <div class="s1-title textEllipsis">{{item.title}}</div>
                <div class="s1-desc">
                  <p>{{item.desc}}</p>
                </div>
              </div>
              <div class="slide_2">
                <img :src="$baseLink+item.pic" alt="">
              </div>
              <div class="slide_3">
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prevHome04"></div>
        <div class="swiper-button-next nextHome04"></div>
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
        <img src="../../static/img/title01.png" alt="">
      </div>
      <div class="newsBoxes">
      	<div class="newsLeft">
      		<div class="newsLeftIn">
      			<div class="swiper-container swiperHome05">
		          <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="(item,index) in newsList" :key="index" style="cursor: pointer" @click="moveTo01(item.id)">
		              <div class="slideImg">
		                <img :src="'http://archie.web.hengdikeji.com'+item.pic" alt="">
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
                    <p>12-07</p>
                    <div class="moreRead"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      		<!--<div class="nrBox">-->
      			<!--<div class="nrTitle">-->
      					<!--<p>雅洁五金新闻资讯雅洁新闻资讯</p>-->
      			<!--</div>-->
      			<!--<div class="nrContent">-->
      					<!--<p>好的设计一定是特殊的，当你看到它的时候，你的内心就会告诉自己想不想要。好的设计一定是特殊...</p>-->
      			<!--</div>-->
      			<!--<div class="nrDate">-->
      				<!--<p>12-07</p>-->
      				<!--<div class="moreRead"></div>-->
      			<!--</div>-->
      		<!--</div>-->
      		<!--<div class="nrBox">-->
      			<!--<div class="nrTitle">-->
      					<!--<p>雅洁五金新闻资讯雅洁新闻资讯</p>-->
      			<!--</div>-->
      			<!--<div class="nrContent">-->
      					<!--<p>好的设计一定是特殊的，当你看到它的时候，你的内心就会告诉自己想不想要。好的设计一定是特殊...</p>-->
      			<!--</div>-->
      			<!--<div class="nrDate">-->
      				<!--<p>12-07</p>-->
      				<!--<div class="moreRead"></div>-->
      			<!--</div>-->
      		<!--</div>-->
      		<!--<div class="nrBox">-->
      			<!--<div class="nrTitle">-->
      					<!--<p>雅洁五金新闻资讯雅洁新闻资讯</p>-->
      			<!--</div>-->
      			<!--<div class="nrContent">-->
      					<!--<p>好的设计一定是特殊的，当你看到它的时候，你的内心就会告诉自己想不想要。好的设计一定是特殊...</p>-->
      			<!--</div>-->
      			<!--<div class="nrDate">-->
      				<!--<p>12-07</p>-->
      				<!--<div class="moreRead"></div>-->
      			<!--</div>-->
      		<!--</div>-->
      	</div>
      </div>
      <!--<div class="cont-5">
        <div class="swiper-container swiperHome05">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in newsList" :key="index" style="cursor: pointer" @click="moveTo01(item.id)">
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
              <img :src="$baseLink+item.pic" alt="">
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
          <div class="p5Button">
            <div>
              <div class="swiper-button-prev prev05"></div>
              <div class="shu"></div>
              <div class="swiper-button-next next05"></div>
            </div>
          </div>
        </div>
      </div>-->
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
    <div class="l8">
      <ul>
        <li class="li1" @click="bottomBtn(1)"></li>
        <li class="li2" @click="bottomBtn(2)">
          <!--<a style="display: block;width: 100%;height: 100%;opacity: 0;" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=164992537&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=392563086" alt="点击联系在线客服" title="点击联系在线客服"/></a>-->
          <a id="kefu" style="display: block;width: 100%;height: 100%;opacity: 0;" href="tencent://message/?uin=392563086&Site=http://vps.shuidazhe.com&Menu=yes">PC版</a>
        </li>
        <li class="li3" @click="bottomBtn(3)"></li>
        <li class="li4">
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
                <img src="../../static/img/head01.png" alt="">
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
  </div>
</template>

<script>
    export default {
      name: "homePage",
      data(){
        return {
          bannerImg:[],//banner轮播图
          bannerVideo:false,//bannner视频
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
          slideJoin:[
            // {
            //   title:'五金名匠，认准雅洁',
            //   desc:'雅洁五金，集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、建筑门锁、卫浴五金、门用五金、家具五金等众多品类',
            //   pic:'static/img/joins1.png'
            // },
            // {
            //   title:'四大加盟优势，稳居前位',
            //   desc:'品牌文化浓厚，技术尖端，权威认证，市场广阔',
            //   pic:'static/img/joins2.jpg'
            // },
            // {
            //   title:'智能时代，智能未来',
            //   desc:'雅洁智能家居，公司战略发展重点方向，涵盖十大智能家居系统，为消费者提供一站式的全屋智能家居解决方案',
            //   pic:'static/img/joins3.jpg'
            // }
          ],
          // 企业介绍
          detailInfo:[],//内容
          detailImg:''//背景图
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
        tags2(i,id){
          const that = this;
          $('.cont-2 li').removeClass('sel');
          $('.cont-2 li').eq(i).addClass('sel');
          // console.log(i,id);
          //获取产品列表
          that.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+id,{},function (data) {
            // console.log(data);
            that.productList = data.data.list;
            // console.log(that.productList);
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
          $('.l2 .cont-1>div>div').removeClass('sel');
          $('.l2 .cont-1>div>div').eq(i).addClass('sel');
          //获取产品三级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+id,{},function (data) {
            // console.log(data);
            that.tags02 = data.data.cates.all;
            that.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+id,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
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
          console.log(i);
          this.$router.push({
            path: '/productDetail',
            query:{
              id:i
            }
          })
        },
        moveTo01(i){
          console.log(i);
          this.$router.push({
            path: '/information/informationDetail',
            query:{
              id:i
            }
          })
        },
        zixun(){
          console.log(1);
          document.getElementById("kefu").click()
        }
      },
      mounted(){
        const that = this;
        setTimeout(function () {
          // var swiperHome04 = new Swiper('.swiperHome04',{
          //   slidesPerView:3.5,
          //   spaceBetween:10,
          //   prevButton: '.prevHome04',
          //   nextButton: '.nextHome04',
          //   loop:true,
          //   // observer:true
          // });
        },100);
        var swiperHome03 = new Swiper('.swiperHome03',{
          slidesPerView:4,
          spaceBetween:15,
          observer:true
        });
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
          that.bannerVideoSrc = data.data.pics[0].path;
          that.bannerImg = data.data.pics;
          var swiperHome = new Swiper('.swiperHome',{
            pagination:'.paginHome',
            prevButton: '.prevHome',
            nextButton: '.nextHome',
            autoplay: 8000,
            observer:true,
            onSlideChangeStart:function (swiper) {
              // console.log(swiper.activeIndex);
              that.bannerVideoSrc = data.data.pics[swiper.activeIndex].path;
            }
          });
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
            that.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+id01,{},function (data) {
              console.log(data);
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
          console.log(data);
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
          console.log(data);
          that.videoList = data.data.technology;
        })
        // 招商加盟
        this.$api.axiosGet('/index/index/getJoin/location/1',{},function (data) {
          // console.log(data);
          that.slideJoin = data.data.join;
          setTimeout(function () {
            var swiperHome04 = new Swiper('.swiperHome04',{
              slidesPerView:3,
              centeredSlides:true,
              spaceBetween:10,
              prevButton: '.prevHome04',
              nextButton: '.nextHome04',
              loop:true,
              observer:true
            });
          },10)
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
