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
      mounted(){
        // swiper轮播初始化
        var swiperInvite = new Swiper('.swiper-invite',{
          // effect: 'fade',
          prevButton:'.prevInvite',
          nextButton:'.nextInvite',
        });
        var swiperInvite01 = new Swiper('.swiper-invite01',{
          pagination : '.pagin01',
          slidesPerView: 5,
          paginationClickable: true,
          spaceBetween: 10
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/invite.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
