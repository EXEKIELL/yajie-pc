<template>
  <div id="partnerInstall">
    <div class="list1">
      <div class="l1-1"><span>未来在</span>于创导</div>
      <div class="l1-2">我们与您一起共同创导未来生活。我们坚信创导赢得未来。</div>
      <div class="l1-3">THE FUTURE LIES IN CREATING</div>
      <div class="l1-4">WE WORK WITH YOU TO CREATE THE FUTURE OF LIFE. WE FIRMLY BELIEVE THAT CHUANG TU WON THE FUTURE.</div>
    </div>
    <div class="list2">
      <div class="l2-left">
        <div class="l2left-1">
          <img src="../../static/img/sp01.png" alt="">
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>安装视频</span><span class="icon"></span>
                  </div>
                  <div class="title-right">
                    <a href="###">立即下载</a>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l2left-1">
          <img src="../../static/img/sp02.png" alt="">
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>安装视频</span><span class="icon"></span>
                  </div>
                  <div class="title-right">
                    <a href="###">立即下载</a>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l2left-1">
          <img src="../../static/img/sp03.png" alt="">
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>安装视频</span><span class="icon"></span>
                  </div>
                  <div class="title-right">
                    <a href="###">立即下载</a>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="l2-left l2-right">
        <div class="l2left-1">
          <img src="../../static/img/sp04.png" alt="">
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>安装视频</span><span class="icon"></span>
                  </div>
                  <div class="title-right">
                    <a href="###">立即下载</a>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l2left-1">
          <img src="../../static/img/sp05.png" alt="">
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>安装视频</span><span class="icon"></span>
                  </div>
                  <div class="title-right">
                    <a href="###">立即下载</a>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l2left-1">
          <img src="../../static/img/sp06.png" alt="">
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>安装视频</span><span class="icon"></span>
                  </div>
                  <div class="title-right">
                    <a href="###">立即下载</a>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第十五届广州建博会专题——未来第...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list3-pagin">
      <span v-for="(item,index) in pagin" :class="{sel:index == 0}" :key="index" @click="change(index+1)">{{index+1}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "partnerInstall",
      data(){
        return{
          pagin:3
        }
      },
      methods:{
        change(i){
          $('.list3-pagin span').removeClass('sel');
          $('.list3-pagin span').eq(i-1).addClass('sel');
        }
      },
      mounted(){
        // 淡入效果
        $('.l2-left .l2left-1').hover(function () {
          $(this).find('.downWrap').show();
          var that = $(this);
          setTimeout(function () {
            that.find('.downWrap').addClass('slideleft')
          },10);
        },function () {
          $(this).find('.downWrap').removeClass('slideleft')
          var that = $(this);
          setTimeout(function () {
            that.find('.downWrap').hide();
          },10);
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/partnerInstall.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
