<template>
    <div id="productList">
      <div class="list1">
        <div class="l1-1">
          <span>{{title01}}</span>
        </div>
        <div class="l1-2">
          <div class="tags">
            <span class="sel" @click="tagsBtn(-1,-1)">全部</span><span v-for="(item,index) in tags" @click="tagsBtn(index,item.id)" :key="index">{{item.name}}</span>
          </div>
          <div class="search" v-if="search">
            <div class="input">
              <input type="text" placeholder="请输入搜索内容">
            </div>
            <div class="button" >
              <button>搜索</button>
            </div>
          </div>
        </div>
      </div>
      <div class="list2 clearfloat" v-if="productList.data">
        <div style="cursor: pointer;" @click="navTo(item.id)" class="l2-wrap" v-for="(item,index) in productList.data" :key="index">
          <div class="wrapImg">
            <div class="img01">
              <img :src="$baseLink+item.pic" alt="">
            </div>
            <div class="hoverWrap">
              <button class="search" @click="navTo(item.id)"></button>
            </div>
          </div>
          <div class="wrapText">
            <div class="text-1">{{item.name}}</div>
            <div class="text-2">适用范围：{{item.range}}</div>
            <div class="text-3"></div>
          </div>
        </div>
      </div>
      <div class="list3" v-if="productList.current_page == productList.last_page">
        <img src="../../static/img/nomore01.png" alt="">
      </div>
      <div v-if="productList.data">
        <div class="list3" v-if="productList.data.length == 0">
          <img src="../../static/img/nomore01.png" alt="">
        </div>
      </div>
      <div class="pagina" v-if="productList.last_page >= 2">
        <el-pagination
          background
          layout="prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          @current-change="change"
          :total="productList.last_page*10">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    export default {
      name: "productList",
      data(){
        return {
          tags:[],
          productList:[],
          id:null,
          search:false,
          title01:'',
          pageId:null,
          twoId:null,//二级分类id
          allId:0//分类全部的id
        }
      },
      watch:{
        '$route':function (to, from) {
          const that = this;
          // console.log(to);
          var id = to.query.item.id;
          // console.log(id);
          that.id = id;
          that.twoId = id;
          // console.log(id);
          this.title01 = to.query.item.name;
          //获取默认二级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+that.id,{},function (data) {
            // console.log(data);
            that.tags = data.data.cates.all;
           // 获取产品列表
            that.$api.axiosGet('/index/product/getProductList/type/limit9/id/'+id,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
              $('.tags span').removeClass('sel');
              $('.tags span').eq(0).addClass('sel');
            })
          })
        }
      },
      methods:{
        tagsBtn(i,id){
          const that = this;
          $('.tags span').removeClass('sel');
          $('.tags span').eq(i+1).addClass('sel');
          if(i == -1 && id == -1){
            this.allId = 0;
            // 获取产品列表
            that.$api.axiosGet('/index/product/getProductList/type/limit9/id/'+that.twoId,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
            })
          }else{
            this.allId = 1;
            this.pageId = id;
            // 获取产品列表
            that.$api.axiosGet('/index/product/getProductList/type/limit9/id/'+id,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
            })
          }
        },
        change(val){
          const that = this;
          if(this.allId == 0){
            // 获取产品列表
            that.$api.axiosGet('/index/product/getProductList/type/limit9/id/'+that.twoId+'/page/'+val,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
            })
          }else{
            // 获取产品列表
            that.$api.axiosGet('/index/product/getProductList/type/limit9/id/'+that.pageId+'/page/'+val,{},function (data) {
              // console.log(data);
              that.productList = data.data.list;
            })
          }
        },
        navTo(i){
          // console.log(i);
          this.$router.push({path:'/productDetail',query:{id:i}});
        }
      },
      mounted(){
        const that = this;
        var id = this.$router.history.current.query.item.id;
        this.twoId = id;
        this.title01 = this.$router.history.current.query.item.name;
        // 获取默认二级标签
        that.$api.axiosGet('/index/product/getCates/pid/'+id,{},function (data) {
          // console.log(data);
          that.tags = data.data.cates.all;
          let tagId = data.data.cates.all[0].id;
          // 获取产品列表
          that.$api.axiosGet('/index/product/getProductList/type/limit9/id/'+id,{},function (data) {
            // console.log(data);
            that.productList = data.data.list;
          })
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/productList.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
