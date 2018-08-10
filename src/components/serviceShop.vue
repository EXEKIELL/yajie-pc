<template>
  <div id="serviceShop">
    <div class="list1" style="display: none;">
      <img src="../../static/img/map01.png" alt="">
      <div class="area">

      </div>
      <div class="title02">
        <img src="../../static/img/title02.png" alt="">
      </div>
    </div>
    <div class="list2">
      <div class="l2-1">
        <div class="l21-1">国内少数指纹锁核心技术拥有者</div>
        <div class="l21-2">雅洁智能锁，80道工序全数合格检验，超强精准识别，权威体系认证。</div>
      </div>
      <div class="l2-2">
        <div>
          <div class="province" style="margin-left: 90px;">
            <el-select v-model="province" placeholder="请选择省" @change = "selectProvice()">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="city">
            <el-select v-model="city" placeholder="请选择市" @change = "selectCity()">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="district" style="display: none">
            <el-select v-model="district" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="search" style="display: none">
            <div class="input">
              <input type="text" placeholder="输入关键字">
            </div>
            <div class="searchBtn">
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list3">
      <ul>
        <li class="listTitle">
          <div class="l1 title-1">门店名称</div>
          <div class="l2 title-2">门店地址</div>
          <div class="l3 title-3">营业时间</div>
        </li>
        <li class="listInfo" v-for="(item,index) in shopList" :key="index" v-if="showShop==true">
          <div class="l1 info-1">{{item.title}}</div>
          <div class="l2 info-2">{{item.addr}}</div>
          <div class="l3 info-3">{{item.time}}</div>
        </li>
        <li class="listInfo noListInfo"v-if="showShop==false">
            <p>请搜索省、市查询门店</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "serviceShop",
      data(){
        return {
          province: '',
          city:'',
          district:'',
          options1:[],
          options2:[],
          options3:[
            {
              value: '1',
              label: '黄金糕'
            },
            {
              value: '2',
              label: '双皮奶'
            },
          ],
          shopList:[],
          showShop:false
        }
      },
      mounted:function () {
        var _this = this;
        //获取省
        _this.$api.axiosGet('/index/service/getRegion/type/1',{},function (data) {
          var list = [];
          _this.options1 = [];
          for(var i=0; i<data.data.list.length; i++)
          {
            list.push({
              label:data.data.list[i].name,
              value:data.data.list[i].id
            })
          }
          _this.options1 = list;
        });
      },
      methods:{
        selectProvice:function () {
          var _this = this;
          _this.options2 = [];
          _this.$api.axiosGet('/index/service/getNetwork/province/' + _this.province, {}, function (data) {

            if(data.data.list.length>0)
            {
              _this.showShop = true;
              _this.shopList = data.data.list;
            }else{
              _this.showShop = false;
            }
          });
          //获取市
          _this.city = '';
          _this.$api.axiosGet('/index/service/getRegion/type/2/id/'+_this.province,{},function (data) {
            var list = [];
            for(var i=0; i<data.data.list.length; i++)
            {
              list.push({
                label:data.data.list[i].name,
                value:data.data.list[i].id
              })
            }
            _this.options2 = list;
          });
        },
        selectCity:function () {
          var _this = this;
          _this.$api.axiosGet('/index/service/getNetwork/province/' + _this.province+'/city/'+_this.city, {}, function (data) {

            // console.log(_this.city);
            if (_this.city==52||_this.city==321||_this.city==394||_this.city==343) {

            }else{
              _this.showShop = [];
              if (data.data.list.length > 0) {
                _this.showShop = true;
                _this.shopList = data.data.list;
              } else {
                _this.showShop = false;
              }
            }
          });
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/serviceShop.css";
  .noListInfo{
    min-height: 400px;
    font-size: 20px!important;


  }
.noListInfo p{
  width: 100%;
  text-align: center!important;
  color: #604775!important;
  font-weight: bold!important;
}
</style>
<style>
  @import "../../static/css/public.css";
</style>
