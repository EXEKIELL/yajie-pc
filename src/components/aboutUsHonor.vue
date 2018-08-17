<template>
    <div id="aboutUsHonor">
      <div class="list1">
        <div class="swiper-container swiper06">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item,index) in list">
              <div>
                <img :src="item.pics" alt="">
                <div class="detailText">
                  <div class="dt_wrap">
                    <p>{{item.title}}</p>
                    <span class="time">{{item.date}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev06"></div>
        <div class="swiper-button-next next06"></div>
      </div>
      <div class="listBottom">
      	<div class="lbBox" v-for="(item,index) in list" :key="index">
      		<div class="lbLeft">
      			<p>{{item.date}}</p>
      		</div>
      		<div class="lbRight">
      			<p>{{item.title}}</p>
      		</div>
      	</div>
      </div>
    </div>

</template>

<script>
    export default {
      name: "aboutUsHonor",
      data(){
        return{
          swiper06:'',
          list:[],
          listLength:0,
          pageIndex:0
        }
      },
      mounted(){
        var _this = this;
        _this.$api.axiosGet('/index/about/getHonor',{},function (data) {
          console.log(data);
          _this.list = data.data.honor;
          _this.listLength = _this.list.length;
          for(var i = 0;i<_this.list.length;i++)
          {
            _this.list[i].pics = _this.$baseLink + _this.list[i].pics;
          }
          setTimeout(function () {
            _this.swiper06 = new Swiper('.swiper06',{
              // speed:1000,
              loop:true,
//            autoplay:2000,
              slidesPerView:3,
              spaceBetween:50,
              centeredSlides:true,
              nextButton:'.next06',
              prevButton:'.prev06',
              pagination : '.swiper-pagination',
              paginationClickable:true
            })
          },100);
        });

      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsHonor.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
