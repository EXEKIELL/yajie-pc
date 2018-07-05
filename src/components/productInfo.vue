<template>
    <div id="productInfo">
      <div class="list3">
        <div class="l3-title">
          <span>门锁</span>
        </div>
        <div class="l3-cont clearfloat">
          <div class="cont-1 floatl">
            <div class="listCont">
              <div class="lc1">
                <div>
                  <img src="../../static/img/product01_big.png" alt="">
                </div>
                <button class="search"></button>
              </div>
              <div class="lc2">
                <div>
                  <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                  <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                  <div class="lc2-3">
                    <button @click="moreBtn">MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cont-2 floatr">
            <div class="listCont">
              <div class="lc1">
                <div>
                  <img src="../../static/img/product02.png" alt="">
                </div>
                <button class="search"></button>
              </div>
              <div class="lc2">
                <div>
                  <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                  <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                  <div class="lc2-3">
                    <button>MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="listCont listContSmall">
              <div class="lc1">
                <div>
                  <img src="../../static/img/product03.png" alt="">
                </div>
                <button class="search"></button>
              </div>
              <div class="lc2">
                <div>
                  <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                  <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                  <div class="lc2-3">
                    <button>MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l3-button">
          <button>MORE</button>
        </div>
      </div>
      <div class="list3">
        <div class="l3-title">
          <span>门锁</span>
        </div>
        <div class="l3-cont clearfloat">
          <div class="cont-1 floatr">
            <div class="listCont big">
              <div class="lc1">
                <div>
                  <img src="../../static/img/product01_big.png" alt="">
                </div>
                <button class="search"></button>
              </div>
              <div class="lc2">
                <div>
                  <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                  <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                  <div class="lc2-3">
                    <button>MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cont-2 floatl">
            <div class="listCont">
              <div class="lc1">
                <div>
                  <img src="../../static/img/product02.png" alt="">
                </div>
                <button class="search"></button>
              </div>
              <div class="lc2">
                <div>
                  <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                  <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                  <div class="lc2-3">
                    <button>MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="listCont listContSmall">
              <div class="lc1">
                <div>
                  <img src="../../static/img/product03.png" alt="">
                </div>
                <button class="search"></button>
              </div>
              <div class="lc2">
                <div>
                  <div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>
                  <div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>
                  <div class="lc2-3">
                    <button>MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l3-button">
          <button>MORE</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "productInfo",
      data(){
        return {
          tag01:[]//顶级标签
        }
      },
      methods:{
        moreBtn(){
          this.$router.push('/productDetail');
        }
      },
      mounted(){
        const that = this;

      }
    }
</script>

<style scoped>
@import "../../static/css/productInfo.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
