<template>
    <div id="partner">
      <div class="banner">
        <img src="../../static/img/banner03.png" alt="">
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
        })
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
