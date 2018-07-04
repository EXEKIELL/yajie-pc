<template>
  <div id="inviteJoin">
    <div class="banner">
      <img src="../../static/img/banner07.png" alt="">
    </div>
    <div class="list2">
      <!--<img src="../../static/img/bj11.png" alt="">-->
      <div class="swiper-container swiper11">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide11">
            <div class="swiper-container swiper12">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide12">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination pagin11"></div>
      </div>
    </div>
    <div class="list3">
      <div class="l3-wrap">
        <div class="l3-title">
          <div class="title-1">雅洁五金X大加盟优势</div>
          <div class="title-2">YAJIE HARDWARE X JOINING ADVANTAGE</div>
        </div>
        <div class="l3-swiper">
          <div class="swiper-container swiper13">
            <div class="bj01"></div>
            <div class="swiper-wrapper">
              <div class="swiper-slide slide13">
                <div class="slide13-img">
                  <img src="../../static/img/img33.png" alt="">
                </div>
                <div class="slide13-info">
                  <div class="info13-1">
                    <div class="i13-title">雅洁五金加盟优势</div>
                    <div class="i13-title2">Yajie Hardware Joins Advantage</div>
                  </div>
                  <div class="info13-2">
                    <p>雅洁五金以强大的技术优势，深耕五金行业，不断突破竞争红海，始终走在行业潮头。2005年，智能锁具产品诞生，成功将先进的指纹传感技术、指纹识别算法、全套的机械结构专利等科技创新与优越的表面处理技术完美结合；2015年雅洁智能家居系统隆重面市，远程操控家居设备，实现传统五金行业与智能时代的成功对接；2012年雅洁首批抗菌产品全线铺开，智能抗菌五金走进千家万户，成功将抗菌技术应用在五金产品上。</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide slide13">
                <div class="slide13-img">
                  <img src="../../static/img/img33.png" alt="">
                </div>
                <div class="slide13-info">
                  <div class="info13-1">
                    <div class="i13-title">雅洁五金加盟优势</div>
                    <div class="i13-title2">Yajie Hardware Joins Advantage</div>
                  </div>
                  <div class="info13-2">
                    <p>雅洁五金以强大的技术优势，深耕五金行业，不断突破竞争红海，始终走在行业潮头。2005年，智能锁具产品诞生，成功将先进的指纹传感技术、指纹识别算法、全套的机械结构专利等科技创新与优越的表面处理技术完美结合；2015年雅洁智能家居系统隆重面市，远程操控家居设备，实现传统五金行业与智能时代的成功对接；2012年雅洁首批抗菌产品全线铺开，智能抗菌五金走进千家万户，成功将抗菌技术应用在五金产品上。</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide slide13">
                <div class="slide13-img">
                  <img src="../../static/img/img33.png" alt="">
                </div>
                <div class="slide13-info">
                  <div class="info13-1">
                    <div class="i13-title">雅洁五金加盟优势</div>
                    <div class="i13-title2">Yajie Hardware Joins Advantage</div>
                  </div>
                  <div class="info13-2">
                    <p>雅洁五金以强大的技术优势，深耕五金行业，不断突破竞争红海，始终走在行业潮头。2005年，智能锁具产品诞生，成功将先进的指纹传感技术、指纹识别算法、全套的机械结构专利等科技创新与优越的表面处理技术完美结合；2015年雅洁智能家居系统隆重面市，远程操控家居设备，实现传统五金行业与智能时代的成功对接；2012年雅洁首批抗菌产品全线铺开，智能抗菌五金走进千家万户，成功将抗菌技术应用在五金产品上。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiperRight">
            <div class="r1" :class="{sel:pagin13 == 0}" @click="btn13(0)">
              <div>
                <div class="r1-title">加盟优势</div>
                <div class="r1-title2">Advantages of joining</div>
              </div>
            </div>
            <div class="r1" :class="{sel:pagin13 == 1}" @click="btn13(1)">
              <div>
                <div class="r1-title">加盟优势</div>
                <div class="r1-title2">Advantages of joining</div>
              </div>
            </div>
            <div class="r1" :class="{sel:pagin13 == 2}" @click="btn13(2)">
              <div>
                <div class="r1-title">加盟优势</div>
                <div class="r1-title2">Advantages of joining</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "inviteJoin",
      data(){
        return {
          pagin13:0,
          swiper13:null
        }
      },
      methods:{
        btn13(i){
          this.pagin13 = i;
          this.swiper13.slideTo(i);
        }
      },
      mounted(){
        const that = this;
        var swiper11 = new Swiper('.swiper11',{
          // pagination: '.swiper-pagination',
          // paginationClickable: true,
          direction: 'vertical'
        });
        this.swiper13 = new Swiper('.swiper13',{
          onSlideChangeStart: function(swiper){
            that.pagin13 = swiper.activeIndex;
          }
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/inviteJoin.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
