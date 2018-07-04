<template>
  <div id="productCenter">
    <div class="list1">
      <div class="title_1">{{title.t1}}</div>
      <div class="title_2">{{title.t2}}</div>
    </div>
    <div class="list2">
      <div class="l2-1">
        <ul class="clearfloat">
          <li @click="navbtn(index)" v-for="(item,index) in navBtn" :key="index" :class="{sel:index == idx}">{{item}}</li>
        </ul>
      </div>
      <div class="l2-2">
        <div class="swiper-container swiper02">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :class="{sel:index == 0}" v-for="(item,index) in iconDetail" :key="index" @click="select(index)">
              <router-link :to="item.url">
                <div class="slide1" :class="{default:item.icon == ''}">
                  <img :src="item.icon" alt="">
                </div>
                <div class="slide2">
                  <span>{{item.text}}</span>
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
          navBtn:['智能门锁','家用五金'],
          idx:0, //智能门锁 家用五金 切换
          iconDetail:[
            {icon:'../../static/img/img01.png',url:'/productCenter/ProductList',text:'门锁'},
            {icon:'',url:'/productCenter/ProductList',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
            {icon:'',url:'',text:'门锁'},
          ]
        }
      },
      methods:{
        navbtn(i){
          this.idx = i;
        },
        select(i){
          $('.l2-2 .swiper-slide').removeClass('sel');
          $('.l2-2 .swiper-slide').eq(i).addClass('sel');
        }
      },
      mounted(){
        var swiper02 = new Swiper('.swiper02',{
          slidesPerView: 8,
          spaceBetween: 10
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
