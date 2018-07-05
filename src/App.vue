<template>
  <div id="app">
    <header class="header">
      <div class="header-wrap">
        <div class="logo">
          <img src="../static/img/logo.png" alt="">
        </div>
        <nav class="header-nav">
          <ul class="nav-btn clearfloat">
            <li v-for="(item,index) in navList" :key="index" :class="{sel:index == 0}">
              <router-link :to="item.url">{{item.text}}</router-link>
              <ul class="nav-tags">
                <li v-for="(item1,index1) in item.tags" :key="index1">
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
    </section>
    <footer class="footer">
      <div class="footer-wrap">
        <div class="clearfloat">
          <div class="footer-left floatl">
            <div class="logo01">
              <img src="../static/img/logo01.png" alt="">
            </div>
            <ul>
              <li>客服热线：4008 831 831&nbsp;&nbsp;&nbsp;&nbsp;公司邮箱：corp@archie.com.cn</li>
              <li>官方网站：www.archie.cm.cn</li>
              <li>公司地址：广东省佛山市南海区狮山长虹岭工业园长岗北路</li>
            </ul>
          </div>
          <div class="footer-right floatr clearfloat">
            <div class="code01 floatl">
              <div class="img">
                <img src="../static/img/er1.jpg"/>
              </div>
              <div>微信公众号</div>
            </div>
            <div class="code02 floatl">
              <div class="img">
                <img src="../static/img/er2.jpg"/>
              </div>
              <div>微信服务号</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-wrap1">
        <span>Copyright ©2000-2011 广东雅洁五金有限公司, All Rights Reserved</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      navList:[
        {text:'首页',url:'/homePage',tags:[]},
        {text:'关于雅洁',url:'/aboutUs',tags:[{tagsText:'企业简介',url:'/aboutUs/aboutUsIntro'},{tagsText:'发展历程',url:'/aboutUs/aboutUsCourse'},{tagsText:'品牌荣誉',url:'/aboutUs/aboutUsHonor'},{tagsText:'工程案例',url:'/aboutUs/aboutUsCase'},{tagsText:'联系我们',url:'/aboutUs/aboutUsContact'}]},
        {text:'产品中心',url:'/productCenter',tags:[]},
        {text:'雅洁资讯',url:'/information',tags:[]},
        {text:'雅洁服务',url:'/service',tags:[{tagsText:'全国门店',url:''},{tagsText:'在线留言',url:''}]},
        {text:'加入雅洁',url:'/invite',tags:[{tagsText:'人才招聘',url:''},{tagsText:'招商加盟',url:'/inviteJoin'}]},
        {text:'合作商专区',url:'/partner',tags:[{tagsText:'政策文档',url:'/partner/partnerPolicy'},{tagsText:'安装视频',url:'/partner/partnerInstall'}]},
      ]
    }
  },
  mounted(){
    // 导航栏样式
    $('.nav-btn>li a').on('click',function () {
      $('.nav-btn>li').removeClass('sel');
      $(this).parent('li').addClass('sel')
    });

  }
}
</script>

<style scoped>
@import "../static/css/public.css";
</style>
