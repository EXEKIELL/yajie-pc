<template>
  <div id="inviteInfo">
    <div class="list1 clearfloat">
      <div class="l1-title floatl">
        <div class="l1-title1">国内少数拥有指纹锁核心技术</div>
        <div class="l1-title2">雅洁五金，80道工序全数合格检验，国家安防认真，超强精准识别。</div>
      </div>
      <div class="l1-search floatr" style="display: none">
        <form action="search01" class="clearfloat">
          <div class="input floatl">
            <input type="text" placeholder="输入关键字">
          </div>
          <div class="btn floatl">
            <button></button>
          </div>
        </form>
      </div>
    </div>
    <div class="list2">
      <div class="swiper-bj"></div>
      <div class="swiper-more">
        <button @click = 'getMore'>MORE</button>
      </div>
      <div class="swiper-button-prev prevInvite"></div>
      <div class="swiper-button-next nextInvite"></div>
      <div class="swiper-container swiper-invite">
        <div class="swiper-wrapper">
          <div class="swiper-slide clearfloat" v-for="(item,index) in job">
            <div class="swiperImg floatl">
              <img src="../../static/img/img01.png" alt="">
            </div>
            <div class="swiperInfo floatl">
              <div class="info-1">
                <span>{{item.title}}</span><span class="small">{{item.enTitle}}</span>
              </div>
              <div class="info-2 clearfloat">
                <div class="i2-1">
                  <i></i><span>{{item.num}}人</span>
                </div>
                <div class="i2-2">
                  <i></i><span>{{item.address}}</span>
                </div>
                <div class="i2-3">
                  <i></i><span>{{item.time}}</span>
                </div>
              </div>
              <div class="info-3" style="display: none">
                <p>负责业务运营团队营销产品的创新与策划，基于对用户和产品的了解，提出活动策划及运营的方案，并组织...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list3">
      <div class="swiper-container swiper-invite01">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in job" :class="{'swiper-slide-hover':index==swiperIndex}">
            <a href="###">
              <div>
                <div class="slide1">
                  <span>{{item.title}}</span><span class="small">{{item.enTitle}}</span>
                </div>
                <div class="slide2">
                  <span>{{item.exp}}年</span><span>{{item.study}}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="swiper-pagination pagin01"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "inviteInfo",
      data(){
        return{
          swiperInvite:'',
          swiperInvite01:'',
          swiperIndex:0,
          job:[
            {
              title:"智能家居销售经理",
              enTitle:"SMART HOME SALES MANAGER",
              num:1,
              address:"广州佛山",
              time:"2017-10-10",
              study:"大专以上学历",
              exp:"2年以上"
            }
            ,{
              title:"培训师",
              enTitle:"TRAINER",
              num:1,
              address:"广州佛山",
              time:"2017-10-10",
              study:"大专以上学历",
              exp:"1年以上"
            },
            {
              title:"智能家居销售工程师",
              enTitle:"SMART HOME SALES ENGINEER",
              num:1,
              address:"广州佛山",
              time:"2017-10-10",
              study:"大专以上学历",
              exp:"1年以上"
            },
            {
              title:"高级硬件工程师",
              enTitle:"ADVANCED HARDWARE ENGINEER",
              num:1,
              address:"广州佛山",
              time:"2017-10-10",
              study:"大专以上学历",
              exp:"3年以上"
            }
          ]
        }
      },
      mounted:function () {
          var _this = this
        setTimeout(function () {
          _this.swiperInvite01 = new Swiper('.swiper-invite01',{
            pagination : '.pagin01',
            slidesPerView: 5,
            paginationClickable: true,
            spaceBetween: 10
          })
          // swiper轮播初始化
          _this.swiperInvite = new Swiper('.swiper-invite',{
            // effect: 'fade',
            prevButton:'.prevInvite',
            nextButton:'.nextInvite',
            onInit:function (swiper) {
              $('.swiper-invite01 .swiper-wrapper >div').on('click',function () {
                var index = $(this).index();
                swiper.slideTo(index);
              });
            },
            onSlideChangeEnd:function (swiper) {
              _this.swiperIndex = swiper.activeIndex;
              _this.swiperInvite01.slideTo(swiper.activeIndex);
              $('.swiper-invite01 .swiper-wrapper >div').removeClass('swiper-slide-hover');
              $('.swiper-invite01 .swiper-wrapper >div').eq(swiper.activeIndex).addClass('swiper-slide-hover');
            }
          });
        },100);

      },
      methods:{
        getMore:function () {
          var _this = this;
          _this.$alert('您可以在智联，boss直聘等求职网站上搜索我司该职位进行投递，感谢您的关注！','温馨提示', {
            confirmButtonText: '确定',
            showClose:false
          });
        }

      }

    }
</script>

<style scoped>
@import "../../static/css/inviteInfo.css";

</style>
<style>
  @import "../../static/css/public.css";
  .el-button--primary{
    background-color: #604775!important;
    border-color: #604775!important;
  }
  .el-button--primary:hover{
    background-color: #604775!important;
    border-color: #604775!important;
  }
  .el-message-box__title{
    text-align: center;
  }
  .el-message-box__content{
    text-align: center;
  }
</style>
