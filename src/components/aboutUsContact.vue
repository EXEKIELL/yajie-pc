<template>
  <div id="aboutUsContact">
    <div class="list1">
      <div class="l1-map" id="companyMap">
          <!--<my-map></my-map>-->
      </div>
      <div class="l1-info">
        <div>
          <div class="info-1">
            <ul v-if="detailData.length != 0">
              <li><span class="s1">客服热线：</span><span>{{detailData[0].tel}}</span></li>
              <li><span class="s1">公司邮箱：</span><span>{{detailData[0].email}}</span></li>
              <li><span class="s1">官方网站：</span><span>{{detailData[0].code}}</span></li>
              <li><span class="s1">公司地址：</span><span>{{detailData[0].address}}</span></li>
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
          <!--<div class="tag-title">广州方向：</div>-->
          <ul v-if="detailData.length != 0">
            <li class="liDetail" v-html="detailData[0].content"></li>
            <!--<li>广州滘口汽车站→转乘小塘公交车（230路、263路）至狮山长虹岭工业园路口前行200米</li>-->
            <!--<li>广州省汽车站至大沥汽车站转乘小塘公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>-->
            <!--<li>广州坑口地铁站乘座275路至长虹岭工业园路口前行200米</li>-->
          </ul>
        </div>
        <!--<div class="list-tag">-->
          <!--<div class="tag-title">佛山方向：</div>-->
          <!--<ul>-->
            <!--<li>桂城乘坐211路公交车至狮山长虹岭工业园路口前行200米</li>-->
            <!--<li>汾江路乘座259路公交车至大沥公园转乘小塘方向公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>-->
            <!--<li>佛山大道乘座236路公交车至大沥公园转乘小塘方向公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>-->
            <!--<li>佛山火车站乘座333路公交车至大沥公园转乘小塘方向公交车（211路、230路、263路、256路）至长虹岭工业园路口前行200米</li>-->
          <!--</ul>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import { lazyAMapApiLoaderInstance } from 'vue-amap';
    export default {
        name: "aboutUsContact",
        data(){
          return{
            map:'',
            marker:'',
            detailData:[]
          }
        },
       created(){
         // var link = document.createElement('link');
         // link.rel = 'stylesheet';
         // link.href = 'http://cache.amap.com/lbs/static/main1119.css'; // 高德地图
         // document.body.appendChild(link);
         // var script2 = document.createElement('script');
         // script2.type = 'text/javascript';
         // script2.src = 'http://webapi.amap.com/maps?v=1.3&key=5433dcc2bc76f4bfae5b9b20179efac5'   // 高德地图
         // document.body.appendChild(script2);
         // var script1 = document.createElement('script');
         // script1.type = 'text/javascript';
         // script1.src = 'http://cache.amap.com/lbs/static/es5.min.js';   // 高德地图
         // document.body.appendChild(script1);
         // var script3 = document.createElement('script');
         // script3.type = 'text/javascript';
         // script3.src = 'http://cache.amap.com/lbs/static/addToolbar.js';   // 高德地图
         // document.body.appendChild(script3);
       },
        mounted:function () {
          var _this = this;
          this.VueAMap.initAMapApiLoader({
            key: '5433dcc2bc76f4bfae5b9b20179efac5',
            plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
            v: '1.4.4'
          });
          // 获取联系信息
          this.$api.axiosGet('/index/about/getLink',{},function (data) {
            console.log(data);

            _this.detailData = data.data.link;
            var x = data.data.link[0].x,
              y = data.data.link[0].y;
            lazyAMapApiLoaderInstance.load().then(() => {
              // your code ...
              _this.map = new AMap.Map('companyMap', {
                center: new AMap.LngLat(x, y),
                zoom: 19,
                resizeEnable: true,
              });
              _this.marker = new AMap.Marker({
                position: _this.map.getCenter(),
                draggable: true,
                cursor: 'move',
                icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png"
              });
              _this.map.add(_this.marker);
              _this.marker.setTitle('点击我，打开地图，雅洁五金欢迎您的到来！');
              console.log(_this.marker.getPosition())
              console.log(_this.marker);
              _this.marker.on('click',function(e){
                _this.marker.markOnAMAP({
                  name:'广东雅洁五金科技有限公司',
                  position:_this.marker.getPosition()
                })
              })
            });
          })
        }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsContact.css";
  .liDetail p{
    line-height: 45px;
  }
</style>
<style>
  @import "../../static/css/public.css";
</style>
