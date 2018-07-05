<template>
  <div id="productCenter">
    <div class="list1">
      <div class="title_1">{{title.t1}}</div>
      <div class="title_2">{{title.t2}}</div>
    </div>
    <div class="list2">
      <div class="l2-1">
        <ul class="clearfloat">
          <li @click="navbtn(index,item.id)" v-for="(item,index) in navBtn" :key="index" :class="{sel:index == idx}">{{item.name}}</li>
        </ul>
      </div>
      <div class="l2-2">
        <div class="swiper-container swiper02">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :class="{sel:index == 0}" v-for="(item,index) in iconDetail" :key="index" @click="select(index)">
              <router-link :to="'/productCenter/ProductList'+item.id">
                <div class="slide1" :class="{default:item.path == ''}">
                  <img :src="item.path" alt="">
                </div>
                <div class="slide2">
                  <span>{{item.name}}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "productCenter",
      data(){
        return {
          title:{
            t1:'国内少数拥有指纹锁核心技术',
            t2:'雅洁五金，80道工序全数合格检验，国家安防认真，超强精准识别。'
          },
          navBtn:[],
          idx:0, //智能门锁 家用五金 切换
          iconDetail:[],
          swiper02:null
        }
      },
      methods:{
        navbtn(i,id){
          const that = this;
          this.idx = i;
          console.log(id);
          // 获取默认二级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+id,{},function (data) {
            console.log(data);
            that.iconDetail = data.data.cates.all;
          })
        },
        select(i){
          $('.l2-2 .swiper-slide').removeClass('sel');
          $('.l2-2 .swiper-slide').eq(i).addClass('sel');
        }
      },
      updated(){
        // 初始化
        const that = this;
        that.swiper02 = null;
        setTimeout(function () {
          that.swiper02 = new Swiper('.swiper02',{
            slidesPerView: 8,
            spaceBetween: 10
          })
        },50)
      },
      mounted(){
        const that = this;
        // 获取一级标签
        this.$api.axiosGet('/index/product/getCates/pid/0',{},function (data) {
          console.log(data);
          that.navBtn = data.data.cates;
          // 获取默认二级标签
          that.$api.axiosGet('/index/product/getCates/pid/'+data.data.cates[0].id,{},function (data) {
            console.log(data);
            that.iconDetail = data.data.cates.all;
            console.log(that.iconDetail);
            //初始化
            setTimeout(function () {
              that.swiper02 = new Swiper('.swiper02',{
                slidesPerView: 8,
                spaceBetween: 10
              })
            },50)
          })
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/productCenter.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
