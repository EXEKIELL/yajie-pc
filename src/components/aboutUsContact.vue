<template>
  <div id="aboutUsContact">
    <div class="list1">
      <div class="l1-map" id="companyMap">

      </div>
      <div class="l1-info">
        <div>
          <div class="info-1">
            <ul>
              <li><span class="s1">客服热线：</span><span>4008 831 831</span></li>
              <li><span class="s1">公司邮箱：</span><span>corp@archie.com.cn</span></li>
              <li><span class="s1">官方网站：</span><span>www.archie.cm.cn</span></li>
              <li><span class="s1">公司地址：</span><span>广东省佛山市南海区狮山长虹岭工业园长岗北路</span></li>
            </ul>
          </div>
          <!--<div class="info-2">-->
            <!--<ul>-->
              <!--<li>网址： http://www.archie.com.cn</li>-->
              <!--<li>Email： (把#改为@)</li>-->
              <!--<li>客户服务：services#archie.com.cn</li>-->
              <!--<li>公司邮箱：corp#archie.com.cn</li>-->
            <!--</ul>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <div class="list2">
      <div class="l2-title">
        <span>乘车路线</span>
      </div>
      <div class="l2-wrap">
        <div class="list-tag">
          <div class="tag-title">广州方向：</div>
          <ul>
            <li>广州滘口汽车站→转乘小塘公交车（230路、263路）至狮山长虹岭工业园路口前行200米</li>
            <li>广州省汽车站至大沥汽车站转乘小塘公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>
            <li>广州坑口地铁站乘座275路至长虹岭工业园路口前行200米</li>
          </ul>
        </div>
        <div class="list-tag">
          <div class="tag-title">佛山方向：</div>
          <ul>
            <li>桂城乘坐211路公交车至狮山长虹岭工业园路口前行200米</li>
            <li>汾江路乘座259路公交车至大沥公园转乘小塘方向公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>
            <li>佛山大道乘座236路公交车至大沥公园转乘小塘方向公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>
            <li>佛山火车站乘座333路公交车至大沥公园转乘小塘方向公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "aboutUsContact",
        data(){
          return{
            map:'',
            marker:''
          }
        },
        mounted:function () {
          var link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = 'http://cache.amap.com/lbs/static/main1119.css'   // 高德地图
          document.body.appendChild(link);
          var script1 = document.createElement('script')
          script1.type = 'text/javascript'
          script1.src = 'http://cache.amap.com/lbs/static/es5.min.js'   // 高德地图
          document.body.appendChild(script1);
          var script2 = document.createElement('script')
          script2.type = 'text/javascript'
          script2.src = 'http://webapi.amap.com/maps?v=1.3&key=5433dcc2bc76f4bfae5b9b20179efac5'   // 高德地图
          document.body.appendChild(script2);
          var script3 = document.createElement('script')
          script3.type = 'text/javascript'
          script3.src = 'http://cache.amap.com/lbs/static/addToolbar.js'   // 高德地图
          document.body.appendChild(script3);
          var _this = this;
          setTimeout(function () {
            _this.map = new AMap.Map('companyMap', {
              resizeEnable: true,
              zoom:19,
              center: [113.049546,23.128268]
            });
            _this.marker = new AMap.Marker({
              position: _this.map.getCenter(),
              draggable: true,
              cursor: 'move',
            });
            // icon: "../../static/img/addressIcon.png"
            _this.marker.setMap(_this.map);
            // 设置点标记的动画效果，此处为弹跳效果
            _this.marker.setAnimation('AMAP_ANIMATION_BOUNCE');
            _this.marker.setTitle('点击我，打开地图，雅洁五金欢迎您的到来！');
            _this.marker.on('click',function(e){
              marker.markOnAMAP({
                name:'雅洁五金有限公司',
                position:_this.marker.getPosition()
              })
            })
          },1000);
        }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsContact.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
