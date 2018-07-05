<template>
  <div id="invite">
    <div class="banner">
      <img src="../../static/img/banner01.png" alt="">
    </div>
    <div class="main-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
      name: "invite",
      data(){
        return{
          swiperInvite:''
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
@import "../../static/css/invite.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
