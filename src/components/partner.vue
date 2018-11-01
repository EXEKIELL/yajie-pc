<template>
    <div id="partner">
      <div class="banner">
        <img src="../../static/img/banner03.png" alt="">
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
      name: "partner",
      data(){
        return {
          selStatus2:0,
          nav01List:[
            {text:'政策文档',to:'/partner/partnerPolicy'},
            {text:'安装视频',to:'/partner/partnerInstall'}
          ]
        }
      },
      watch:{
        '$route':function (to, form) {
          switch (to.path) {
            case "/partner/partnerPolicy":
              this.selStatus2 = 0;
              break;
            case "/partner/partnerInstall":
              this.selStatus2 = 1;
              break;
          }
        }
      },
      mounted(){
        $('#partner .nav01 li a').on('click',function () {
          $('#partner .nav01 li').removeClass('sel');
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
          case "/partner/partnerPolicy":
            this.selStatus2 = 0;
            break;
          case "/partner/partnerInstall":
            this.selStatus2 = 1;
            break;
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/partner.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
