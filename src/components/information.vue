<template>
    <div id="information">
      <div class="banner" v-if="idx">
        <img src="../../static/img/banner04.png" alt="">
      </div>
      <div class="wrap">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
      name: "information",
      data(){
        return{
          idx:true
        }
      },
      watch:{
        $route:function (to) {
          console.log(to);
          if(to.name == 'informationDetail'){
            this.idx = false;
          }else{
            this.idx = true;
          }
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/information.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
