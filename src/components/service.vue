<template>
  <div id="service">
    <div class="banner" v-if="selStatus2 == 1" style="width: 100%;">
      <img style="width: 100%;" src="../../static/img/down_banner.png" alt="">
    </div>
    <div class="wrap">
      <div class="zhankai sel">
        <div class="icon23">
          <img src="../../static/img/icon23.png" alt="">
        </div>
      </div>
      <div class="nav01 sel">
        <ul>
          <li v-for="(item,index) in nav01List" :class="{sel:index == selStatus2}" :key="index">
            <router-link :to="item.to">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
      <div class="conts" style="width: 100%">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "service",
      data(){
        return {
          selStatus2:0,
          nav01List:[
            {text:'全国门店',to:'/service/serviceShop'},
            {text:'下载专区',to:'/service/down'},
            {text:'在线留言',to:'/service/serviceMessage'},
          ]
        }
      },
      watch:{
        '$route':function (to, form) {
          switch (to.path) {
            case "/service/serviceShop":
              this.selStatus2 = 0;
              break;
            case "/service/down":
              this.selStatus2 = 1;
              break;
            case "/service/serviceMessage":
              this.selStatus2 = 2;
              break;
          }
        }
      },
      mounted(){
        $('#service .nav01 li a').on('click',function () {
          $('#service .nav01 li').removeClass('sel');
          $(this).parent('li').addClass('sel');
        });
        $('.zhankai').on('click',function () {
          if($(this).hasClass('sel')){
            $(this).removeClass('sel');
            $('.nav01').removeClass('sel');
          }else{
            $(this).addClass('sel');
            $('.nav01').addClass('sel');
          }
        });
        var to = this.$router.history.current;
        switch (to.path) {
          case "/service/serviceShop":
            this.selStatus2 = 0;
            break;
          case "/service/down":
            this.selStatus2 = 1;
            break;
          case "/service/serviceMessage":
            this.selStatus2 = 2;
            break;
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/service.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
