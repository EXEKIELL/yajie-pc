<template>
    <div id="informationNews">
      <div class="list1">
        <div class="l1-1">品牌终端<span>一体化</span></div>
        <div class="l1-2">雅洁通过产品和服务，努力营造一种和谐氛围，引领一种生活方式</div>
        <div class="l1-3">BRAND TERMINAL INTEGRATION</div>
        <div class="l1-4">YAJIE STRIVES TO CREATE A HARMONIOUS ATMOSPHERE AND LEAD A LIFESTYLE THROUGH PRODUCTS AND SERVICES.</div>
      </div>
      <div class="list2-wrap">
        <div class="list" v-for="(item,index) in listData" :key="index" @click="navTo(item.id)">
          <div class="listImg" v-if="index%2 == 0">
            <img :src="item.img" alt="">
          </div>
          <div class="listText" v-if="index%2 == 0">
            <div class="text1">{{item.title}}</div>
            <div class="text2">
              <p>{{item.desc}}</p>
            </div>
            <div class="text3">
              <div class="more">MORE <span class="jiantou"></span></div>
              <div class="date">
                <span>{{item.date[0]}}</span><span>/{{item.date[1]}}</span>
              </div>
            </div>
          </div>
          <div class="listText" v-if="index%2 != 0">
            <div class="text1">{{item.title}}</div>
            <div class="text2">
              <p>{{item.desc}}</p>
            </div>
            <div class="text3">
              <div class="more">MORE <span class="jiantou"></span></div>
              <div class="date">
                <span>{{item.date[0]}}</span><span>/{{item.date[1]}}</span>
              </div>
            </div>
          </div>
          <div class="listImg" v-if="index%2 != 0">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div>
      <!--<div class="list3-pagin">-->
        <!--<span v-for="(item,index) in pagin" :class="{sel:index == 0}" :key="index" @click="change(index+1)">{{index+1}}</span>-->
      <!--</div>-->
      <!--<el-pagination-->
        <!--background-->
        <!--layout="prev, pager, next"-->
        <!--:page-size = 'page.per_page'-->
        <!--:total="page.total"-->
          <!--@current-change = "sizeChange"-->
      <!--&gt;-->
      <!--</el-pagination>-->
      <div class="pagina" >
        <el-pagination
          background
          layout="prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          @current-change="sizeChange"
          :total="lastPage*10">
        </el-pagination>
      </div>
    </div>
</template>

<script>
  function timestampToTime(timestamp) {
    var Y,M,D,month;
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear();
    M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
    D = date.getDate();
    switch (parseInt(M)){
      case 1:
        month = 'Jan.';
        break;
      case 2:
        month = 'Feb.';
        break;
      case 3:
        month = 'Mar.';
        break;
      case 4:
        month = 'Apr.';
        break;
      case 5:
        month = 'May.';
        break;
      case 6:
        month = 'Jun.';
        break;
      case 7:
        month = 'Jul.';
        break;
      case 8:
        month = 'Aug.';
        break;
      case 9:
        month = 'Sept.';
        break;
      case 10:
        month = 'Oct.';
        break;
      case 11:
        month = 'Nov.';
        break;
      case 12:
        month = 'Dec.';
        break;
    }
    var attr = {
      'year':Y,
      'month':month,
      'day': D
    };
    return attr;
  }
    export default {
      name: "informationNews",
      data(){
        return {
          pagin:3,
          listData:[],
          lastPage:0,
          page:{
            total:0,
            per_page:0
          }
        }
      },
      mounted:function () {
        var _this = this;
        _this.$api.axiosGet('/index/news/getNewsList/page/0',{},function (data) {
          console.log(data);
          var list = data.data.list.data;
          _this.listData = [];
          _this.lastPage = data.data.list.last_page;
          _this.page.total = data.data.list.total;
          _this.page.per_page = data.data.list.per_page;
          for(var i=0; i<list.length; i++)
          {
            list[i].img = _this.$baseLink + list[i].pic;
            list[i].date = [];
            list[i].date.push(timestampToTime(list[i].time).day);
            list[i].date.push(timestampToTime(list[i].time).month);
            if(list[i].desc.length >= 46){
              list[i].desc = list[i].desc.substring(0,46)+'...';
            }
          }
          _this.listData = list;
        });
      },
      methods:{
        change(i){
          $('.list3-pagin span').removeClass('sel');
          $('.list3-pagin span').eq(i-1).addClass('sel');
        },
        sizeChange:function (e) {
          var _this = this;
          _this.$api.axiosGet('/index/news/getNewsList/page/'+e,{},function (data) {
            var list = data.data.list.data;
            _this.listData = [];
            _this.lastPage = data.data.list.last_page;
            _this.page.total = data.data.list.total;
            _this.page.per_page = data.data.list.per_page;
            // console.log(data)
            for(var i=0; i<list.length; i++)
            {
              list[i].img = _this.$baseLink + list[i].pic;
              list[i].date = [];
              list[i].date.push(timestampToTime(list[i].time).day);
              list[i].date.push(timestampToTime(list[i].time).month);
              if(list[i].desc.length >= 46){
                list[i].desc = list[i].desc.substring(0,46)+'...';
              }
            }
            _this.listData = list;
          });
        },
        navTo(i){
          // console.log(i);
          this.$router.push({
            path: '/information/informationDetail',
            query:{
              id:i
            }
          })
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/informationNews.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
