<template>
    <div id="information">
      <div class="banner">
        <img src="../../static/img/banner04.png" alt="">
      </div>
      <div class="wrap">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
      name: "information"
    }
</script>

<style scoped>
@import "../../static/css/information.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
