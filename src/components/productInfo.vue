<template>
    <div id="productInfo">
      <div class="list3">
        <div class="l3-title">
          <span>{{title01}}</span>
        </div>
        <div class="l3-cont clearfloat" v-if="listData.data">
          <!--<div class="cont-1 floatl">-->
            <!--<div class="listCont">-->
              <!--<div class="lc1">-->
                <!--<div>-->
                  <!--<img src="../../static/img/product01_big.png" alt="">-->
                <!--</div>-->
                <!--<button class="search"></button>-->
              <!--</div>-->
              <!--<div class="lc2">-->
                <!--<div>-->
                  <!--<div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>-->
                  <!--<div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>-->
                  <!--<div class="lc2-3">-->
                    <!--<button @click="moreBtn">MORE</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div class="cont-2 floatl" v-if="listData.data.length !=0">
            <div style="cursor:pointer;" @click="navTo(item.id)" class="listCont" v-for="(item,index) in listData.data" :key="index">
              <div class="lc1">
                <div class="imgWrap">
                  <img :src="$baseLink+item.pic" alt="">
                </div>
                <div class="hoverWrap">
                  <button class="search" @click="navTo(item.id)"></button>
                </div>
              </div>
              <div class="lc2">
                <div>
                  <div class="lc2-1">{{item.name}}</div>
                  <div class="lc2-2 textEllipsis">{{item.desc}}</div>
                  <div class="lc2-3">
                    <button @click="navTo(item.id)">MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <!--<div class="listCont">-->
              <!--<div class="lc1">-->
                <!--<div>-->
                  <!--<img src="../../static/img/product03.png" alt="">-->
                <!--</div>-->
                <!--<button class="search"></button>-->
              <!--</div>-->
              <!--<div class="lc2">-->
                <!--<div>-->
                  <!--<div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>-->
                  <!--<div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>-->
                  <!--<div class="lc2-3">-->
                    <!--<button>MORE</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="listCont">-->
              <!--<div class="lc1">-->
                <!--<div>-->
                  <!--<img src="../../static/img/product03.png" alt="">-->
                <!--</div>-->
                <!--<button class="search"></button>-->
              <!--</div>-->
              <!--<div class="lc2">-->
                <!--<div>-->
                  <!--<div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>-->
                  <!--<div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>-->
                  <!--<div class="lc2-3">-->
                    <!--<button>MORE</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="listCont">-->
              <!--<div class="lc1">-->
                <!--<div>-->
                  <!--<img src="../../static/img/product03.png" alt="">-->
                <!--</div>-->
                <!--<button class="search"></button>-->
              <!--</div>-->
              <!--<div class="lc2">-->
                <!--<div>-->
                  <!--<div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>-->
                  <!--<div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>-->
                  <!--<div class="lc2-3">-->
                    <!--<button>MORE</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          </div>
          <div class="noneList" v-else style="padding: 55px 0;">
            <span>暂无产品推荐~</span>
          </div>
          <!--<div class="cont-2 floatr">-->
            <!--<div class="listCont">-->
              <!--<div class="lc1">-->
                <!--<div>-->
                  <!--<img src="../../static/img/product02.png" alt="">-->
                <!--</div>-->
                <!--<button class="search"></button>-->
              <!--</div>-->
              <!--<div class="lc2">-->
                <!--<div>-->
                  <!--<div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>-->
                  <!--<div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>-->
                  <!--<div class="lc2-3">-->
                    <!--<button>MORE</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="listCont listContSmall">-->
              <!--<div class="lc1">-->
                <!--<div>-->
                  <!--<img src="../../static/img/product03.png" alt="">-->
                <!--</div>-->
                <!--<button class="search"></button>-->
              <!--</div>-->
              <!--<div class="lc2">-->
                <!--<div>-->
                  <!--<div class="lc2-1">雅洁智能门锁雅洁ahtyifh 智能门锁</div>-->
                  <!--<div class="lc2-2 textEllipsis">雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门锁雅洁ahtyifh 智能门锁雅洁智能门...</div>-->
                  <!--<div class="lc2-3">-->
                    <!--<button>MORE</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <!--<div v-if="listData.data">-->
          <!--<div class="l3-button" v-if="listData.data.length !=0">-->
            <!--<button>MORE</button>-->
          <!--</div>-->
        <!--</div>-->
        <div class="pagina" style="margin-top: 50px;">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            @current-change="sizeChange"
            :total="listData.last_page*10">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "productInfo",
      data(){
        return {
          tag01:[],//顶级标签
          listData:{},
          title01:'',//标题
          id:40
        }
      },
      methods:{
        moreBtn(){
          this.$router.push('/productDetail');
        },
        navTo(i){
          // console.log(i);
          this.$router.push({path:'/productDetail',query:{id:i}});
        },
        sizeChange(i){
          const that = this;
          // console.log(i);
          // 获取
          this.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+that.id+'/page/'+i,{},function (data) {
            // console.log(data);
            that.listData = data.data.list;
          })
        }
      },
      watch:{
        '$route': function (to, from) {
          const that = this;
          // console.log(to);
          var id = to.query.id;
          if(id == 40){
            this.title01 = '传统五金'
          }else if(id == 41){
            this.title01 = '智能家居'
          }else if(id == 42){
            this.title01 = '智能安防'
          }
          this.id = id;
          // 获取
          this.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+id,{},function (data) {
            // console.log(data);
            that.listData = data.data.list;
          })
        }
      },
      mounted(){
        const that = this;
        var id = this.$router.history.current.query.id;
        // console.log(this.$router)
        if(id == 40){
          this.title01 = '传统五金'
        }else if(id == 41){
          this.title01 = '智能家居'
        }else if(id == 42){
          this.title01 = '智能安防'
        }
        // 获取
        this.$api.axiosGet('/index/product/getProductList/type/limit3/id/'+that.id,{},function (data) {
          // console.log(data);
          that.listData = data.data.list;
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/productInfo.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
