<template>
    <div id="partnerPolicy">
      <div class="list1">
        <div class="l1-1"><span>未来在</span>于创导</div>
        <div class="l1-2">我们与您一起共同创导未来生活。我们坚信创导赢得未来。</div>
        <div class="l1-3">THE FUTURE LIES IN CREATING</div>
        <div class="l1-4">WE WORK WITH YOU TO CREATE THE FUTURE OF LIFE. WE FIRMLY BELIEVE THAT CHUANG TU WON THE FUTURE.</div>
      </div>
      <div class="list2">
        <div class="l2list" v-for="(item,index) in wordList">
          <div class="listWrap">
            <img src="../../static/img/icon05.png" alt="">
            <div>{{item.title}}</div>
          </div>
          <div class="download">
            <img src="../../static/img/down01.png" alt="">
            <div><a :href="item.path">立即下载</a></div>
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
      name: "partnerPolicy",
      data(){
        return {
          pagin:3,
          wordList:[],
          page:{
            total:0,
            per_page:0
          },
          lastPage:0
        }
      },
      mounted:function () {
        var _this = this;
        _this.$api.axiosGet('/index/partner/getDocument/page/1',{},function (data) {
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
