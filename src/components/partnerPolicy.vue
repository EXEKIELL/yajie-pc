<template>
    <div id="partnerPolicy">
      <div class="list1">
        <div class="l1-1"><span>{{title1_1}}</span>{{title1}}</div>
        <div class="l1-2">{{title2}}</div>
        <div class="l1-3">{{title3}}</div>
        <div class="l1-4">{{title4}}</div>
      </div>
      <div class="list2">
        <div class="l2list" v-for="(item,index) in wordList">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <!--<div>{{item.title}}</div>-->
          </div>
          <div class="listDetail">
            <div class="d_1">{{item.title}}</div>
            <div class="d_2">
              <div>上传时间：{{item.time|time}}</div>
              <div>下  载 量：{{item.number}}次</div>
            </div>
            <div class="d_3" @click="download(item.id)">
              <a :href="item.path">立即下载</a>
            </div>
          </div>
          <!--<div class="download">-->
            <!--<img src="../../static/img/down01.png" alt="">-->
            <!--<div><a :href="item.path">立即下载</a></div>-->
          <!--</div>-->
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
      name: "partnerPolicy",
      data(){
        return {
          pagin:3,
          wordList:[],
          page:{
            total:0,
            per_page:0
          },
          number:0,
          lastPage:0,
          title1:'于创导',
          title1_1:'未来在',
          title2:'我们与您一起共同创导未来生活。我们坚信创导赢得未来。',
          title3:'THE FUTURE LIES IN CREATING',
          title4:'WE WORK WITH YOU TO CREATE THE FUTURE OF LIFE. WE FIRMLY BELIEVE THAT CHUANG TU WON THE FUTURE.'
        }
      },
      filters:{
        time:function (val) {
          // console.log(val);
          var val = val;
          if(val.length == 10){
            val = parseInt(val)*1000;
          }else{
            val = parseInt(val);
          }
          var date = new Date(val);
          var yy  = date.getFullYear();
          var mm = date.getMonth()+1;
          var dd = date.getDate();
          if(mm<10){
            mm = '0'+mm;
          }
          if(dd<10){
            dd = '0'+dd;
          }
          // console.log(date);
          // console.log(yy,mm,dd)
          return yy+'-'+mm+'-'+dd
        }
      },
      mounted:function () {
        var _this = this;
        _this.$api.axiosGet('/index/partner/getDocument/page/1',{},function (data) {
          // console.log(data)
          _this.wordList = data.data.list.data;
          for(var i=0; i<_this.wordList.length; i++)
          {
            _this.wordList[i].path = _this.$baseLink + _this.wordList[i].path;
          }
          _this.lastPage = data.data.list.last_page;
          _this.page.total = data.data.list.total;
          _this.page.per_page = data.data.list.per_page;
        });
        // 获取标题内容
        this.$api.axiosPost('/index/Partner/posthztitle',0,{},function (data) {
          console.log(data);
          var data1 = data.data.data;
          _this.title1_1 = data1.title1.slice(0,2);
          _this.title1 = data1.title1.slice(2);
          _this.title2 = data1.title2;
          _this.title3 = data1.etitle1;
          _this.title4 = data1.etitle2;
        })
      },
      methods:{
        change(i){
          $('.list3-pagin span').removeClass('sel');
          $('.list3-pagin span').eq(i-1).addClass('sel');
        },
        sizeChange:function (e) {
          var _this = this;
          _this.$api.axiosGet('/index/partner/getDocument/page/'+e,{},function (data) {
            _this.wordList = data.data.list.data;
            for(var i=0; i<_this.wordList.length; i++)
            {
              _this.wordList[i].path = _this.$baseLink + _this.wordList[i].path;
            }
            _this.lastPage = data.data.list.last_page;
            _this.page.total = data.data.list.total;
            _this.page.per_page = data.data.list.per_page;
          });
        },
        download:function (id) {
          // console.log(id);
          const _this = this;
          this.$api.axiosPost('/index/Partner/number',0,{
            id:id
          },function (data) {
            console.log(data);
            _this.number = data.data.number;
          })
          _this.$api.axiosGet('/index/partner/getDocument/page/1',{},function (data) {
            // console.log(data)
            _this.wordList = data.data.list.data;
          });
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/partnerPolicy.css";
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
