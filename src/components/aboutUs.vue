<template>
    <div id="aboutUs">
      <div class="banner">
        <img src="../../static/img/banner02.png" alt="">
      </div>
      <div class="wrap">
        <div class="nav01">
          <ul>
            <li v-for="(item,index) in nav01List" :class="{sel:index == selStatus2}" :key="index">
              <router-link :to="item.to">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="conts">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUs",
      data(){
        return {
          selStatus2:0,
          nav01List:[
            {text:'企业简介',to:'/aboutUs/aboutUsIntro'},
            {text:'发展历程',to:'/aboutUs/aboutUsCourse'},
            {text:'品牌荣誉',to:'/aboutUs/aboutUsHonor'},
            {text:'工程案例',to:'/aboutUs/aboutUsCase'},
            {text:'联系我们',to:'/aboutUs/aboutUsContact'},
          ]
        }
      },
      watch:{
        '$route':function (to, form) {
          switch (to.path) {
            case "/aboutUs/aboutUsIntro":
              this.selStatus2 = 0;
              break;
            case "/aboutUs/aboutUsCourse":
              this.selStatus2 = 1;
              break;
            case "/aboutUs/aboutUsHonor":
              this.selStatus2 = 2;
              break;
            case "/aboutUs/aboutUsCase":
              this.selStatus2 = 3;
              break;
            case "/aboutUs/aboutUsContact":
              this.selStatus2 = 4;
              break;
          }
        }
      },
      mounted(){
        $('#aboutUs .nav01 li a').on('click',function () {
          $('#aboutUs .nav01 li').removeClass('sel');
          $(this).parent('li').addClass('sel');
        })
        var to = this.$router.history.current;
        switch (to.path) {
          case "/aboutUs/aboutUsIntro":
            this.selStatus2 = 0;
            break;
          case "/aboutUs/aboutUsCourse":
            this.selStatus2 = 1;
            break;
          case "/aboutUs/aboutUsHonor":
            this.selStatus2 = 2;
            break;
          case "/aboutUs/aboutUsCase":
            this.selStatus2 = 3;
            break;
          case "/aboutUs/aboutUsContact":
            this.selStatus2 = 4;
            break;
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUs.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
