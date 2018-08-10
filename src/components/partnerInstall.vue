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
        <div class="l2left-1" v-for="(item,index) in videoLeft">
          <iframe height=340 width=558 :src='item.path' frameborder=0 ></iframe>
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>{{item.title}}</span>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="l2-left l2-right">
        <div class="l2left-1"  v-for="(item,index) in videoRight">
          <iframe height=340 width=558 :src='item.path' frameborder=0 ></iframe>
          <div class="downWrap">
            <div class="wrap">
              <div>
                <div class="wrap-title">
                  <div class="title-left">
                    <span>{{item.title}}</span>
                  </div>
                </div>
                <div class="wrap-info">
                  <p>{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="list3-pagin">-->
      <!--<span v-for="(item,index) in pagin" :class="{sel:index == 0}" :key="index" @click="change(index+1)">{{index+1}}</span>-->
    <!--</div>-->
    <el-pagination v-if="lastPage>=2"
      background
      layout="prev, pager, next"
      :page-size = 'page.per_page'
      :total="page.total"
      @current-change = "sizeChange"
      >
    </el-pagination>
  </div>
</template>

<script>
    export default {
      name: "partnerInstall",
      data(){
        return{
          videoLeft:[],
          videoRight:[],
          pagin:3,
          lastPage:0,
          page:{
            total:0,
            per_page:0
          },
          load:0
        }
      },
      methods:{
        change(i){
          $('.list3-pagin span').removeClass('sel');
          $('.list3-pagin span').eq(i-1).addClass('sel');
        },
        sizeChange:function (e) {
          var _this = this;
          _this.$api.axiosGet('/index/partner/getVideo/page/'+e,{},function (data) {
            _this.load = _this.$loading({
              lock: true,
              text: '智能加载...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              _this.load.close();
            }, 4000*data.data.list.data.length/6);
            var videoList = data.data.list.data;
            _this.videoLeft = [];
            _this.videoRight = [];
            for(var i=0;i<videoList.length;i++)
            {
              if(i%2==0)
              {
                _this.videoLeft.push(videoList[i]);
              }else{
                _this.videoRight.push(videoList[i])
              }
            }
            _this.lastPage = data.data.list.total;
            _this.page.total = data.data.list.total;
            _this.page.per_page = data.data.list.per_page;

          });
        }
      },
      mounted(){
        var _this = this;
        setTimeout(function () {
          _this.load = _this.$loading({
            lock: true,
            text: '智能加载...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        },50)
        setTimeout(() => {
          _this.load.close();
        }, 4000);
        _this.$api.axiosGet('/index/partner/getVideo/page/1',{},function (data) {
          var videoList = data.data.list.data;
          _this.videoLeft = [];
          _this.videoRight = [];
          for(var i=0;i<videoList.length;i++)
          {
            if(i%2==0)
            {
              _this.videoLeft.push(videoList[i]);
            }else{
              _this.videoRight.push(videoList[i])
            }
          }
          _this.lastPage = data.data.list.last_page;
          _this.page.total = data.data.list.total;
          _this.page.per_page = data.data.list.per_page;
        });

      },
      updated:function () {
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
  .el-pagination {
    text-align: center;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #604775;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover{
    color: #604775;
  }
  .el-loading-spinner i{
    color: white;
  }
  .el-loading-spinner .el-loading-text{
    color: white;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active:hover{
    color: white;
  }
</style>
