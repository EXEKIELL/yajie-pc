<template>
    <div id="myMap"></div>
</template>

<script>
  // import AMap from 'AMap'
    export default {
      name: "myMap",
      data(){
        return{
          map:'',
          marker:''
        }
      },
      methods:{
        init(){
          const _this = this;
          _this.map = new AMap.Map('companyMap', {
            resizeEnable: true,
            zoom:19,
            center: [x,y]
          });
          _this.marker = new AMap.Marker({
            position: _this.map.getCenter(),
            draggable: true,
            cursor: 'pointer',
          });
          // icon: "../../static/img/addressIcon.png"
          _this.marker.setMap(_this.map);
          // 设置点标记的动画效果，此处为弹跳效果
          _this.marker.setAnimation('AMAP_ANIMATION_BOUNCE');
          _this.marker.setTitle('点击我，打开地图，雅洁五金欢迎您的到来！');
          _this.marker.on('click',function(e){
            _this.marker.markOnAMAP({
              name:'雅洁五金有限公司',
              position:_this.marker.getPosition()
            })
          })
        }
      },
      mounted(){
        this.init();
      }
    }
</script>

<style scoped>

</style>
