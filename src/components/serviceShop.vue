<template>
  <div id="serviceShop">
    <div class="title">
      <div class="title-1">
        <span>全国</span><span class="color">门店</span>
      </div>
      <div class="title-2"><span>THE STORES</span></div>
    </div>
    <div class="list1" style="display: block;">
      <div class="map">
        <echarts :message="selectText" ref="echarts" @data="getData" @clickP="getClickP"></echarts>
      </div>
      <!--<div class="area"></div>-->
      <div class="title02">
        <img src="../../static/img/title02.png" alt="">
      </div>
    </div>
    <div class="list2">
      <div class="l2-1">
        <div class="l21-1">立足中华，放眼全球</div>
        <div class="l21-2">BASED ON CHINA, LOOKING AROUND THE WORLD</div>
      </div>
      <div class="l2-2">
        <div>
          <div class="province" style="">
            <el-select v-model="province" placeholder="请选择省" @change = "selectProvice($event)">
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
          <div class="district" style="display: none;">
            <el-select v-model="district" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="search" style="">
            <div class="input">
              <input type="text" placeholder="输入关键字" v-model="searchText">
            </div>
            <div class="searchBtn">
              <button @click="search"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list3">
      <ul>
        <li class="listTitle">
          <div class="l1 title-1"><i class="icon1_1"></i>门店名称</div>
          <div class="l2 title-2"><i class="icon2_1"></i>门店地址</div>
          <div class="l3 title-3"><i class="icon3_1"></i>营业时间</div>
        </li>
        <li class="listInfo" v-for="(item,index) in shopList" :key="index" v-if="showShop==true">
          <div class="l1 info-1"><i class="icon1"></i>{{item.title}}</div>
          <div class="l2 info-2"><i class="icon2"></i>{{item.addr}}</div>
          <div class="l3 info-3"><i class="icon3"></i>{{item.time}}</div>
        </li>
        <li style="background-color: #f6f6f6;" class="listInfo noListInfo" v-if="showShop==false">
            <p>
              <img style="margin: auto;margin-bottom: 15px;" src="../../static/img/nomore02.png" alt="">
              <span style="font-size: 16px;color: #555555;">暂无门店信息</span>
            </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import '../../static/js/lib/raphael-min'
  import echarts from './echarts'
    export default {
      name: "serviceShop",
      components:{
        echarts
      },
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
          searchText:'',
          shopList:[],
          showShop:false,
          selectText:''
        }
      },
      mounted:function () {
        console.log(this.$refs.echarts)
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
        selectProvice:function (val) {
          var _this = this;


          // 获取当前选择的省
          var arr1 = this.options1;
          for(var i = 0;i<arr1.length;i++){
            if(arr1[i].value == val){
              this.selectText = arr1[i].label;
            }
          }

          _this.options2 = [];
          _this.$api.axiosGet('/index/service/getNetwork/province/' + _this.province, {}, function (data) {
            console.log(data)
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
        },
        search:function () {
          const _this = this;
          console.log(this.searchText);
          if(this.searchText == ''){
            this.$alert('请输入关键字','温馨提示',{
              confirmButtonText: '确定'
            })
          }else{
            var text = this.searchText.replace(/\s+/g,"");
            _this.$api.axiosPost('/index/Service/key',0, {
              key:text
            }, function (data) {
              console.log(data);
              if (data.data.key.length > 0) {
                _this.showShop = true;
                _this.shopList = data.data.key;
              } else {
                _this.showShop = false;
              }
            });
          }
        },
        getData:function (data) {
          const _this = this;
          console.log(data);
          $("html,body").animate({scrollTop:1000}, 500);
          // _this.showShop = true;
          // _this.shopList = data.data.key;
          if (data.data.key.length > 0) {
            _this.showShop = true;
            _this.shopList = data.data.key;
          } else {
            _this.showShop = false;
          }
        },
        getClickP:function (clickP) {
          const _this = this;
          var add = clickP;
          var adds = this.options1;
          for(var i = 0;i<adds.length;i++){
            if(adds[i].label == add){
              var id = adds[i].value;
              _this.province = id;
            }
          }
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
