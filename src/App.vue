<template>
  <div id="app">
    <header class="header">
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
    <section class="main">
    <router-view/>
      <!--<keep-alive>-->
        <!--<router-view v-if="$route.meta.keepAlive">-->
          <!--&lt;!&ndash; 这里是会被缓存的视图组件，比如 page1,page2 &ndash;&gt;-->
        <!--</router-view>-->
      <!--</keep-alive>-->
      <!--<router-view v-if="!$route.meta.keepAlive">-->
        <!--&lt;!&ndash; 这里是不被缓存的视图组件，比如 page3 &ndash;&gt;-->
      <!--</router-view>-->
    </section>
    <footer class="footer">
      <div class="footer-wrap">
        <div class="clearfloat">
          <div class="footer-left floatl">
            <div class="logo01">
              <img src="../static/img/logo01.png" alt="">
            </div>
            <ul v-if="bottomDetail.length != 0">
              <li>客服热线：{{bottomDetail[0].tel}}&nbsp;&nbsp;&nbsp;&nbsp;公司邮箱：{{bottomDetail[0].email}}</li>
              <li>官方网站：{{bottomDetail[0].code}}</li>
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
        {text:'关于雅洁',url:'/aboutUs',tags:[{tagsText:'企业简介',url:'/aboutUs/aboutUsIntro'},{tagsText:'发展历程',url:'/aboutUs/aboutUsCourse'},{tagsText:'品牌荣誉',url:'/aboutUs/aboutUsHonor'},{tagsText:'工程案例',url:'/aboutUs/aboutUsCase'},{tagsText:'联系我们',url:'/aboutUs/aboutUsContact'}]},
        {text:'产品中心',url:'/productCenter',tags:[]},
        {text:'雅洁资讯',url:'/information',tags:[]},
        {text:'雅洁服务',url:'/service',tags:[{tagsText:'全国门店',url:'/service/serviceShop'},{tagsText:'在线留言',url:'/black'}]},
        {text:'加入雅洁',url:'/invite',tags:[{tagsText:'人才招聘',url:'/invite/inviteInfo'},{tagsText:'招商加盟',url:'/inviteJoin'}]},
        {text:'合作商专区',url:'/partner',tags:[{tagsText:'政策文档',url:'/partner/partnerPolicy'},{tagsText:'安装视频',url:'/partner/partnerInstall'}]},
      ],
      bottomDetail:[]
    }
  },
  methods:{
    nav2Btn(i){
      // console.log(i);
      $('.nav-btn>li').removeClass('sel');
      $('.nav-btn>li').eq(i).addClass('sel');
    }
  },
  watch:{
    '$route':function (to, form) {
      const that = this;
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
          this.selStatus = 2;
          break;
        case '/productCenter/ProductList':
          this.selStatus = 2;
          break;
        case '/productDetail':
          this.selStatus = 2;
          break;
        case "/information/informationNews":
          this.selStatus = 3;
          break;
        case '/information/informationDetail':
          this.selStatus = 3;
          break;
        case "/service/serviceShop":
          this.selStatus = 4;
          break;
        case '/service/serviceMessage':
          this.selStatus = 4;

          break;
        case "/invite/inviteInfo":
          this.selStatus = 5;
          break;
        case '/invite/inviteDetail':
          this.selStatus = 5;
          break;
        case '/inviteJoin':
          this.selStatus = 5;
          break;
        case "/partner/partnerPolicy":
          this.selStatus = 6;
          break;
        case '/partner/partnerInstall':
          this.selStatus = 6;
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
      // console.log(this.selStatus)
    }
  },
  mounted(){
    const that = this;
    console.log('pc格式图片获取方式：路径拼接/location/1');
    // 导航栏样式
    $('.nav-btn>li a').on('click',function () {
      $('.nav-btn>li').removeClass('sel');
      $(this).parent('li').addClass('sel')
    });
    var to = this.$router.history.current;
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
        this.selStatus = 2;
        break;
      case '/productCenter/ProductList':
        this.selStatus = 2;
        break;
      case '/productDetail':
        this.selStatus = 2;
        break;
      case "/information/informationNews":
        this.selStatus = 3;
        break;
      case '/information/informationDetail':
        this.selStatus = 3;
        break;
      case "/service/serviceShop":
        this.selStatus = 4;
        break;
      case '/service/serviceMessage':
        this.selStatus = 4;
        break;
      case "/invite/inviteInfo":
        this.selStatus = 5;
        break;
      case '/invite/inviteDetail':
        this.selStatus = 5;
        break;
      case '/inviteJoin':
        this.selStatus = 5;
        break;
      case "/partner/partnerPolicy":
        this.selStatus = 6;
        break;
      case '/partner/partnerInstall':
        this.selStatus = 6;
        break;
    }
    // 获取底部信息
    this.$api.axiosGet('/index/about/getLink',{},function (data) {
      // console.log(data);
      that.bottomDetail = data.data.link;
    })
    // console.log(this.selStatus)
  }
}
</script>

<style scoped>
@import "../static/css/public.css";
</style>
