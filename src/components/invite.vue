<template>
  <div id="invite">
    <div class="banner">
      <img src="../../static/img/banner01.png" alt="">
    </div>
    <div class="zhankai sel">
      <div class="icon23">
        <img src="../../static/img/icon23.png" alt="">
      </div>
    </div>
    <div class="nav01 sel">
      <ul>
        <li v-for="(item,index) in nav01List" :class="{sel:index == selStatus2}" :key="index">
          <router-link :to="item.to">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
    <div class="main-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
      name: "invite",
      data(){
        return{
          swiperInvite:'',
          selStatus2:1,
          nav01List:[
            {text:'招商加盟',to:'/inviteJoin'},
            {text:'人才招聘',to:'/invite/inviteInfo'}
          ],
        }
      },
      mounted(){
        $('#invite .nav01 li a').on('click',function () {
          $('#invite .nav01 li').removeClass('sel');
          $(this).parent('li').addClass('sel');
        });
        $('.zhankai').on('click',function () {
          if($(this).hasClass('sel')){
            $(this).removeClass('sel');
            $('.nav01').removeClass('sel');
          }else{
            $(this).addClass('sel');
            $('.nav01').addClass('sel');
          }
        });
      }
    }
</script>

<style scoped>
@import "../../static/css/invite.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
