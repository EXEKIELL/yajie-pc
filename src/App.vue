<template>
  <div id="app">
    <header class="header" v-if="loginStatus">
      <div class="header-wrap">
        <div class="logo">
          <img src="../static/img/logo.png" alt="">
        </div>
        <nav class="header-nav">
          <ul class="nav-btn clearfloat">
            <li v-for="(item,index) in navList" :key="index" :class="{sel:index == selStatus}">
              <router-link :to="item.url">{{item.text}}</router-link>
              <ul class="nav-tags">
                <li v-for="(item1,index1) in item.tags" :key="index1" @click="nav2Btn(index)">
                  <router-link :to="item1.url">{{item1.tagsText}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section class="main" :class="{mainLogin:loginStatus == false}">
    <router-view/>
      <!--<keep-alive>-->
        <!--<router-view v-if="$route.meta.keepAlive">-->
          <!--&lt;!&ndash; 这里是会被缓存的视图组件，比如 page1,page2 &ndash;&gt;-->
        <!--</router-view>-->
      <!--</keep-alive>-->
      <!--<router-view v-if="!$route.meta.keepAlive">-->
        <!--&lt;!&ndash; 这里是不被缓存的视图组件，比如 page3 &ndash;&gt;-->
      <!--</router-view>-->
      <!--侧边咨询-->
      <div class="cebian">
        <div>
          <div class="l9_wrap">
            <div class="w_1">
              <div class="head">
                <div class="img">
                  <img src="../static/img/head01.jpg" alt="">
                </div>
                <span class="icon"></span>
              </div>
            </div>
            <div class="w_2">
              <button @click="zixun">在线咨询</button>
              <a ref="kefu" id="kefu" style="display: none;width: 100%;height: 100%;opacity: 0;" :href="'tencent://message/?uin='+qqNum+'&Site=http://vps.shuidazhe.com&Menu=yes'">PC版</a>
            </div>
          </div>
        </div>
      </div>
      <div class="toTop" @click="toTop" v-if="loginStatus"></div>
    </section>
    <footer class="footer" v-if="loginStatus">
      <div class="footer-wrap">
        <div class="clearfloat">
          <div class="footer-left floatl">
            <div class="logo01">
              <img src="../static/img/logo01.png" alt="">
            </div>
            <ul v-if="bottomDetail.length != 0">
              <li>客服热线：{{bottomDetail[0].tel}}&nbsp;&nbsp;&nbsp;&nbsp;公司邮箱：{{bottomDetail[0].email}}</li>
              <!--<li>官方网站：{{bottomDetail[0].code}}</li>-->
              <li>公司地址：{{bottomDetail[0].address}}</li>
            </ul>
          </div>
          <div class="footer-right floatr clearfloat">
            <div class="code01 floatl">
              <div class="img" v-if="bottomDetail.length != 0">
                <img :src="$baseLink+bottomDetail[0].pics"/>
              </div>
              <div>微信公众号</div>
            </div>
            <div class="code02 floatl">
              <div class="img" v-if="bottomDetail.length != 0">
                <img :src="$baseLink+bottomDetail[0].pic"/>
              </div>
              <div>微信服务号</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-wrap1" v-if="bottomDetail.length != 0">
        <span>Copyright ©2000-2011 广东雅洁五金有限公司, {{bottomDetail[0].record}} All Rights Reserved</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      selStatus:0,
      navList:[
        {text:'首页',url:'/homePage',tags:[]},
        {text:'关于雅洁',url:'/aboutUs',tags:[{tagsText:'企业简介',url:'/aboutUs/aboutUsIntro'},{tagsText:'发展历程',url:'/aboutUs/aboutUsCourse'},{tagsText:'品牌荣誉',url:'/aboutUs/aboutUsHonor'},{tagsText:'工程案例',url:'/aboutUs/aboutUsCase'},{tagsText:'创新技术',url:'/aboutUs/aboutUsInnovate'},{tagsText:'联系我们',url:'/aboutUs/aboutUsContact'}]},
        {text:'产品中心',url:'/productCenter/productInfo?id=40',tags:[]},
        {text:'智能家居',url:'/productCenter/productInfo?id=41',tags:[]},
        {text:'雅洁资讯',url:'/information',tags:[]},
        {text:'雅洁服务',url:'/service',tags:[{tagsText:'全国门店',url:'/service/serviceShop'},{tagsText:'在线留言',url:'/black'}]},
        {text:'加入雅洁',url:'/inviteJoin',tags:[{tagsText:'招商加盟',url:'/inviteJoin'},{tagsText:'人才招聘',url:'/invite/inviteInfo'}]},
        {text:'伙伴下载区',url:'/partner',tags:[{tagsText:'政策文档',url:'/partner/partnerPolicy'},{tagsText:'安装视频',url:'/partner/partnerInstall'}]},
      ],
      bottomDetail:[],
      tags:[],
      //智能家居
      jj:{},
      // 传统五金
      wj:{},
      // 智能安防
      af:{},
      loginStatus:true,
      qqNum:''
    }
  },
  methods:{
    nav2Btn(i){
      // console.log(i);
      this.selStatus = i;
    },
    toTop(){
      $("html,body").animate({scrollTop:0}, 500);
    },
    zixun(){
      document.getElementById("kefu").click();
    }
  },
  watch:{
    '$route':function (to, form) {
      const that = this;
      // console.log(to);
      switch (to.path) {
        case "/homePage":
          this.selStatus = 0;
          break;
        case "/aboutUs/aboutUsIntro":
          this.selStatus = 1;
          break;
        case '/aboutUs/aboutUsCourse':
          this.selStatus = 1;
          break;
        case '/aboutUs/aboutUsHonor':
          this.selStatus = 1;
          break;
        case '/aboutUs/aboutUsCase':
          this.selStatus = 1;
          break;
        case '/aboutUs/aboutUsContact':
          this.selStatus = 1;
          break;
        case "/productCenter/productInfo":
          if(to.query.id){
            if(to.query.id == 41){
              this.selStatus = 3;

            }else{
              this.selStatus = 2;

            }
          }
          break;
        case '/productCenter/ProductList':
          if(to.query.item.pid == 41){
            this.selStatus = 3;
          }else{
            this.selStatus = 2;
          }
          break;
        case '/productDetail':
          this.selStatus = 2;
          break;
        case "/information/informationNews":
          this.selStatus = 4;
          break;
        case '/information/informationDetail':
          this.selStatus = 4;
          break;
        case "/service/serviceShop":
          this.selStatus = 5;
          break;
        case '/service/serviceMessage':
          this.selStatus = 5;

          break;
        case "/invite/inviteInfo":
          this.selStatus = 6;
          break;
        case '/invite/inviteDetail':
          this.selStatus = 6;
          break;
        case '/inviteJoin':
          this.selStatus = 6;
          break;
        case "/partner/partnerPolicy":
          this.selStatus = 7;
          break;
        case '/partner/partnerInstall':
          this.selStatus = 7;
          setTimeout(function () {
            that.load = that.$loading({
              lock: true,
              text: '智能加载...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
          },10);
          setTimeout(() => {
            that.load.close();
          }, 4000);
          break;
      }
      if(to.path == '/login'){
        this.loginStatus = false;
      }else{
        this.loginStatus = true;
      }
      // console.log(this.selStatus)
    },
    selStatus:function (i) {
      sessionStorage.setItem('selStatus',i)
    }
  },
  mounted(){
    const that = this;
    // console.log('pc格式图片获取方式：路径拼接/location/1');
    // console.log($('#kefu'))
    // 监听滚动条滚动
    $(window).scroll(function(event){
      if($(window).scrollTop()>1000){
        $('.toTop').show();
        $('.cebian').show();
      }else{
        $('.toTop').hide();
        $('.cebian').hide();
      }
    });
    // 导航栏样式
    $('.nav-btn>li a').on('click',function () {
      $('.nav-btn>li').removeClass('sel');
      $(this).parent('li').addClass('sel')
    });
    var to = this.$router.history.current;
    // switch (to.path) {
    //   case "/homePage":
    //     this.selStatus = 0;
    //     break;
    //   case "/aboutUs/aboutUsIntro":
    //     this.selStatus = 1;
    //     break;
    //   case '/aboutUs/aboutUsCourse':
    //     this.selStatus = 1;
    //     break;
    //   case '/aboutUs/aboutUsHonor':
    //     this.selStatus = 1;
    //     break;
    //   case '/aboutUs/aboutUsCase':
    //     this.selStatus = 1;
    //     break;
    //   case '/aboutUs/aboutUsContact':
    //     this.selStatus = 1;
    //     break;
    //   case "/productCenter/productInfo":
    //     this.selStatus = 2;
    //     break;
    //   case '/productCenter/ProductList':
    //     this.selStatus = 2;
    //     break;
    //   case '/productDetail':
    //     this.selStatus = 2;
    //     break;
    //   case "/information/informationNews":
    //     this.selStatus = 3;
    //     break;
    //   case '/information/informationDetail':
    //     this.selStatus = 3;
    //     break;
    //   case "/service/serviceShop":
    //     this.selStatus = 4;
    //     break;
    //   case '/service/serviceMessage':
    //     this.selStatus = 4;
    //     break;
    //   case "/invite/inviteInfo":
    //     this.selStatus = 5;
    //     break;
    //   case '/invite/inviteDetail':
    //     this.selStatus = 5;
    //     break;
    //   case '/inviteJoin':
    //     this.selStatus = 5;
    //     break;
    //   case "/partner/partnerPolicy":
    //     this.selStatus = 6;
    //     break;
    //   case '/partner/partnerInstall':
    //     this.selStatus = 6;
    //     break;
    // }
    switch (to.path) {
      case "/homePage":
        this.selStatus = 0;
        break;
      case "/aboutUs/aboutUsIntro":
        this.selStatus = 1;
        break;
      case '/aboutUs/aboutUsCourse':
        this.selStatus = 1;
        break;
      case '/aboutUs/aboutUsHonor':
        this.selStatus = 1;
        break;
      case '/aboutUs/aboutUsCase':
        this.selStatus = 1;
        break;
      case '/aboutUs/aboutUsContact':
        this.selStatus = 1;
        break;
      case "/productCenter/productInfo":
        if(to.query.id){
          if(to.query.id == 41){
            this.selStatus = 3;

          }else{
            this.selStatus = 2;

          }
        }
        break;
      case '/productCenter/ProductList':
        if(to.query.item.pid == 41){
          this.selStatus = 3;
        }else{
          this.selStatus = 2;
        }
        break;
      case '/productDetail':
        this.selStatus = 2;
        break;
      case "/information/informationNews":
        this.selStatus = 4;
        break;
      case '/information/informationDetail':
        this.selStatus = 4;
        break;
      case "/service/serviceShop":
        this.selStatus = 5;
        break;
      case '/service/serviceMessage':
        this.selStatus = 5;

        break;
      case "/invite/inviteInfo":
        this.selStatus = 6;
        break;
      case '/invite/inviteDetail':
        this.selStatus = 6;
        break;
      case '/inviteJoin':
        this.selStatus = 6;
        break;
      case "/partner/partnerPolicy":
        this.selStatus = 7;
        break;
      case '/partner/partnerInstall':
        this.selStatus = 7;
        setTimeout(function () {
          that.load = that.$loading({
            lock: true,
            text: '智能加载...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        },10);
        setTimeout(() => {
          that.load.close();
        }, 4000);
        break;
    }
    // 获取底部信息
    this.$api.axiosGet('/index/about/getLink',{},function (data) {
      // console.log(data);
      that.bottomDetail = data.data.link;
    });
    // 获取管理员qq号
    this.$api.axiosPost('/index/About/zx',0,{},function (data) {
      // console.log(data);
      that.qqNum = data.data.data[0].name;
    })
    // 获取产品中心一级标签
    // this.$api.axiosGet('/index/product/getCates/pid/0',{},function (data) {
    //   console.log(data);
    //   that.tags = data.data.cates;
    //   for(var i = 0;i<data.data.cates;i++){
    //     if(data.data.cates[i].name == '智能家居'){
    //       that.jj = data.data.cates[i]
    //     }else if(data.data.cates[i].name == '传统五金'){
    //       that.wj = data.data.cates[i]
    //     }else{
    //       that.af = data.data.cates[i]
    //     }
    //   }
    // })
    // console.log(this.selStatus)
  }
}
</script>

<style scoped>
@import "../static/css/public.css";
</style>
