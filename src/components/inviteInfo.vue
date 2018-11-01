<template>
  <div id="inviteInfo">
    <div class="list1 clearfloat">
      <div class="l1-title floatl">
        <div class="l1-title1">诚聘英才，共创未来</div>
        <div class="l1-title2">望有志之士，莫失良机，我们等你加入！</div>
      </div>
      <div class="post" style="float: right;position: absolute;right: 24%;">
        <el-select v-model="value1" placeholder="职位类型" @change = "selectProvice()">
          <el-option  value="">
            <span>全部</span>
          </el-option>
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="l1-search floatr" style="display: block;">
        <!--<form action="###" class="clearfloat">-->
          <div class="input floatl">
            <input type="text" placeholder="输入岗位名称" v-model="searchText">
          </div>
          <div class="btn floatl">
            <button @click="search"></button>
          </div>
        <!--</form>-->
      </div>
    </div>
    <div class="list2">
      <div class="swiper-bj"></div>
      <div class="swiper-more">
        <button @click = 'getMore'>MORE</button>
      </div>
      <!--<div class="swiper-button-prev prevInvite"></div>-->
      <!--<div class="swiper-button-next nextInvite"></div>-->
      <div class="swiper-container swiper-invite">
        <div class="swiper-wrapper">
          <div class="swiper-slide clearfloat" v-for="(item,index) in jobData" :key="index">
            <div class="swiperImg floatl">
              <img :src="$baseLink+item.pic" alt="">
            </div>
            <div class="swiperInfo floatl">
              <div class="info-1">
                <span>{{item.name}}</span><span class="small">{{item.ename}}</span>
              </div>
              <div class="info-2 clearfloat">
                <div class="i2-1">
                  <i></i><span>{{item.num}}人</span>
                </div>
                <div class="i2-2">
                  <i></i><span>{{item.address}}</span>
                </div>
                <div class="i2-3">
                  <i></i><span>{{item.time|time02}}</span>
                </div>
              </div>
              <div v-if="index == index1" class="info-3" style="display: block" v-for="(item1,index1) in desc01" :key="index1">
                <p>{{item1}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list3">
      <div class="swiper-container swiper-invite01">
        <div class="swiper-wrapper">
          <div @click="change(index)" class="swiper-slide" v-for="(item,index) in jobData" :class="{'swiper-slide-hover':index==swiperIndex}">
            <a href="###">
              <div>
                <div class="slide1">
                  <span>{{item.name}}</span><span class="small">{{item.ename}}</span>
                </div>
                <div class="slide2">
                  <span style="margin-right: 5px;">{{item.work|work}}</span><span>{{item.degree}}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!--<div class="swiper-pagination pagin01"></div>-->
      </div>
      <div class="swiper-button-prev prevInvite01"></div>
      <div class="swiper-button-next nextInvite01"></div>
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
          value1:'',
          desc01:[],
          options1:[
            {
              value: '设计部',
              label: '设计部'
            },
            {
              value: '技术部',
              label: '技术部'
            },
            {
              value: '运营部',
              label: '运营部'
            },
          ],
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
          ],
          jobData:[],
          searchText:''
        }
      },
      filters:{
        time02(val){
          var Y,M,D,month;
          var date = new Date(val * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          Y = date.getFullYear();
          M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
          D = date.getDate();
          return Y+'-'+M+'-'+D;
        },
        work(val){
          // console.log(val)
          var regPos = / ^\d+$/; // 非负整数
          var regNeg = /^\-[1-9][0-9]*$/; // 负整数
          // if(regPos.test(val) || regNeg.test(val)){
          //   val = val+'年';
          //   return val;
          // }else{
          //   return val;
          // }
          if(val == '不限'){
            return val
          }else{
            return val+'年'
          }
        }
      },
      mounted:function () {
          var _this = this;
          // 获取职位数据
        this.$api.axiosGet('/index/join/getJob/location/1',{},function (data) {
          // console.log(data);
          _this.jobData = data.data.job;
          var desc01 = data.data.job;
          var arr01 = [];
          for(var i = 0;i<desc01.length;i++){
            _this.desc01.push(desc01[i].content.slice(0,90)+'...')
          }
        });
        setTimeout(function () {
          _this.swiperInvite01 = new Swiper('.swiper-invite01',{
            pagination : '.pagin01',
            slidesPerView: 4,
            spaeed:1000,
            paginationClickable: true,
            spaceBetween: 10,
            prevButton:'.prevInvite01',
            nextButton:'.nextInvite01',
            observer:true,
            onInit:function (swiper) {
              setTimeout(function () {
                swiper.slideTo(0)
              },500);
              $('.swiper-invite01').on('mouseenter',function () {
                swiper.stopAutoplay();
              })
              $('.swiper-invite01').on('mouseleave',function () {
                swiper.startAutoplay();
              })
            }
          })
          // swiper轮播初始化
          _this.swiperInvite = new Swiper('.swiper-invite',{
            // effect: 'fade',
            // prevButton:'.prevInvite',
            // nextButton:'.nextInvite',
            autoplay:2500,
            speed:1000,
            observer:true,
            onInit:function (swiper) {
              $('.swiper-invite01 .swiper-wrapper >div').on('click',function () {
                var index = $(this).index();
                swiper.slideTo(index);
              });
              $('.swiper-invite').on('mouseenter',function () {
                swiper.stopAutoplay();
              })
              $('.swiper-invite').on('mouseleave',function () {
                swiper.startAutoplay();
              })
            },
            onSlideChangeStart:function (swiper) {
              _this.swiperIndex = swiper.activeIndex;
              _this.swiperInvite01.slideTo(swiper.activeIndex);
              $('.swiper-invite01 .swiper-wrapper >div').removeClass('swiper-slide-hover');
              $('.swiper-invite01 .swiper-wrapper >div').eq(swiper.activeIndex).addClass('swiper-slide-hover');
            }
          });
        },100);
        this.$api.axiosPost('/index/Join/key',0,{},function (data) {
          console.log(data);
          _this.options1 = [];
          var arr = data.data.type;
          for(var i = 0;i<arr.length;i++){
            var info = {};
            info.value = arr[i].type;
            info.label = arr[i].type;
            _this.options1.push(info);
          }
        })

      },
      methods:{
        getMore:function () {
          var _this = this;
          // console.log(this.jobData);
          // _this.$alert('您可以在智联，boss直聘等求职网站上搜索我司该职位进行投递，感谢您的关注！','温馨提示', {
          //   confirmButtonText: '确定',
          //   showClose:false
          // });
          var id = this.jobData[this.swiperIndex].id;
          this.$router.push({
            path: '/invite/inviteDetail',
            query:{
              id:id
            }
          })
        },
        change:function (i) {
          const _this = this;
          this.swiperInvite.slideTo(i);
          this.swiperInvite01.slideTo(i);
          this.swiperIndex = i;
        },
        search:function () {
          const _this = this;
          var text = this.searchText.replace(/\s+/g,"");
          this.$api.axiosPost('/index/Join/namekey',0,{
            name:text
          },function (data) {
            console.log(data);
            if(data.data.key.length>0){
              _this.jobData = data.data.key;
            }else{
              _this.$alert('暂无此职业，敬请期待', '温馨提示', {
                confirmButtonText: '确定',
                // callback: action => {
                //
                // }
              });
            }
            setTimeout(function () {
              _this.swiperInvite01.slideTo(0)
            },100)
          })
          return false
        },
        selectProvice:function () {
          const _this = this;
          var id = this.value1;
          if(id == ''){
            id = 0
          }
          // console.log(id);
          this.$api.axiosPost('/index/Join/keyid',0,{
            keyid:id
          },function (data) {
            // console.log(data);
            _this.jobData = data.data.type;
          })
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
