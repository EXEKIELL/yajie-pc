<template>
  <div id="aboutUsCase">
    <div class="list1">
      <p>雅洁产品的价值体现在著名的工程建筑，上海世博村、世博中心、北京大剧院、北京中国妇女活动中心、北京东方广场、广州新体育馆、郑州新郑国际机场、重庆高级人民法院、杭州香格里拉酒店以及山东高级人民检察院等等数千个建筑工程均采用雅洁产品。</p>
    </div>
    <div class="list2">
      <div class="swiper-container swiper-no-swiping swiper05">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <!--<div class="slide1">-->
              <!--<img src="../../static/img/img22.png" alt="">-->
              <!--<div class="detail">-->
                <!--<div class="time">2015-06</div>-->
                <!--<div class="detail-wrap">-->
                  <!--<div class="wrap-1">宁乡通程温泉大酒店</div>-->
                  <!--<div class="wrap-2">-->
                    <!--<p>项目地点:长沙宁乡县玉潭镇(近二环中路)所用产品:门锁、卫浴五金</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="slide2" v-for="(item,index) in listData.data" :key="index">
              <!--<div v-if="index%2 == 0" class="detail01 d2">
                <div class="time">{{item.time|time02}}</div>
                <div class="detail-wrap">
                  <div class="wrap-1">{{item.name}}</div>
                  <div class="wrap-2">
                    <p>项目地点:{{item.address}}</p>
                  </div>
                </div>
              </div>
              <div v-if="index%2 == 0" class="img01">
                <img :src="'http://archie.web.hengdikeji.com'+item.pic" alt="">
              </div>-->
              <div class="img01">
                <img :src="'http://archie.web.hengdikeji.com'+item.pic" alt="">
              </div>
              <div class="detail01 d1">
                <!--<div class="time">{{item.time|time02}}6</div>-->
                <div class="detail-wrap">
                  <div class="wrap-1">{{item.name}}</div>
                  <!--<div class="wrap-2">
                    <p>项目地点:{{item.address}}</p>
                  </div>-->
                </div>
              </div>
            </div>
            <!--<div class="slide2">-->
              <!--<div class="img01">-->
                <!--<img :src="'http://archie.web.hengdikeji.com'+item.pic" alt="">-->
              <!--</div>-->
              <!--<div class="detail01 d1">-->
                <!--<div class="time">{{item.time|time02}}6</div>-->
                <!--<div class="detail-wrap">-->
                  <!--<div class="wrap-1">{{item.name}}</div>-->
                  <!--<div class="wrap-2">-->
                    <!--<p>项目地点:{{item.address}}</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="slide2">-->
              <!--<div class="detail01 d2">-->
                <!--<div class="time">2015-06</div>-->
                <!--<div class="detail-wrap">-->
                  <!--<div class="wrap-1">宁乡通程温泉大酒店</div>-->
                  <!--<div class="wrap-2">-->
                    <!--<p>项目地点:长沙宁乡县玉潭镇(近二环中路)所用产品:门锁、卫浴五金</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="img01">-->
                <!--<img src="../../static/img/img24.png" alt="">-->
              <!--</div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
      <!--<div class="swiper-pagination pagin05"></div>-->
    </div>
    <div class="pagina">
      <el-pagination
        background
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        @current-change="change"
        :total="listData.last_page*10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      name: "aboutUsCase",
      data(){
        return {
          listData:[]
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
        }
      },
      methods:{
        change(val){
          const that = this;
          // 获取案例列表
          this.$api.axiosGet('/index/about/getProject/page/'+val,{},function (data) {
            // console.log(data);
            that.listData = data.data.project;
          })
        }
      },
      mounted(){
        const that = this;
        var swiper04 = new Swiper('.swiper05',{
          // pagination:'.pagin05',
          // paginationClickable: true,
        })
        // 获取案例列表
        this.$api.axiosGet('/index/about/getProject/'+0,{},function (data) {
          // console.log(data);
          that.listData = data.data.project;
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsCase.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
