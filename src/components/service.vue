<template>
  <div id="service">
    <div class="wrap">
      <div class="nav01">
        <ul>
          <li v-for="(item,index) in nav01List" :class="{sel:index == 0}" :key="index">
            <router-link :to="item.to">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
      <div class="conts">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "service",
      data(){
        return {
          nav01List:[
            {text:'全国门店',to:'/service/serviceShop'},
            {text:'在线咨询',to:'###'},
            {text:'在线留言',to:'/service/serviceMessage'},
          ]
        }
      },
      mounted(){
        $('#service .nav01 li a').on('click',function () {
          $('#service .nav01 li').removeClass('sel');
          $(this).parent('li').addClass('sel');
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/service.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
