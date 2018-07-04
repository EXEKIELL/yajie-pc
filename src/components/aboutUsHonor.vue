<template>
    <div id="aboutUsHonor">
      <div class="bj"></div>
      <div class="list1">
        <div class="swiper-container swiper06">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../static/img/honor01.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../static/img/honor01.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../static/img/honor01.png" alt="">
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev06"></div>
        <div class="swiper-button-next next06"></div>
        <div class="detailText">
          <p>重点培育和发展的广东省出口名牌</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUsHonor",
      mounted(){
        var swiper06 = new Swiper('.swiper06',{
          // speed:1000,
          loop:true,
          slidesPerView:3,
          centeredSlides:true,
          nextButton:'.next06',
          prevButton:'.prev06',
          pagination : '.swiper-pagination',
          paginationClickable:true
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsHonor.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
