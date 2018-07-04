<template>
  <div id="serviceShop">
    <div class="list1">
      <img src="../../static/img/map01.png" alt="">
      <div class="title02">
        <img src="../../static/img/title02.png" alt="">
      </div>
    </div>
    <div class="list2">
      <div class="l2-1">
        <div class="l21-1">一个更舒适的家</div>
        <div class="l21-2">A MORE COMFORTABLE HOME</div>
      </div>
      <div class="l2-2">
        <div>
          <div class="province">
            <el-select v-model="province" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="city">
            <el-select v-model="city" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="district">
            <el-select v-model="district" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="search">
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
        <li class="listInfo" v-for="(item,index) in shopList" :key="index">
          <div class="l1 info-1">{{item.name}}</div>
          <div class="l2 info-2">{{item.addr}}</div>
          <div class="l3 info-3">{{item.date}}</div>
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
          options1:[
            {
              value: '选项1',
              label: '黄金糕'
            },
            {
              value: '选项2',
              label: '双皮奶'
            },
          ],
          options2:[
            {
              value: '选项1',
              label: '黄金糕'
            },
            {
              value: '选项2',
              label: '双皮奶'
            },
          ],
          options3:[
            {
              value: '选项1',
              label: '黄金糕'
            },
            {
              value: '选项2',
              label: '双皮奶'
            },
          ],
          shopList:[
            {name:'北京北四环雅洁五金专卖店',addr:'北京市朝阳区北四环北沙滩桥“红星美凯龙”负一层雅洁五金',date:'10：00—21:00'},
            {name:'北京北四环雅洁五金专卖店',addr:'北京市朝阳区北四环北沙滩桥“红星美凯龙”负一层雅洁五金',date:'10：00—21:00'},
            {name:'北京北四环雅洁五金专卖店',addr:'北京市朝阳区北四环北沙滩桥“红星美凯龙”负一层雅洁五金',date:'10：00—21:00'},
            {name:'北京北四环雅洁五金专卖店',addr:'北京市朝阳区北四环北沙滩桥“红星美凯龙”负一层雅洁五金',date:'10：00—21:00'},
            {name:'北京北四环雅洁五金专卖店',addr:'北京市朝阳区北四环北沙滩桥“红星美凯龙”负一层雅洁五金',date:'10：00—21:00'},
            {name:'北京北四环雅洁五金专卖店',addr:'北京市朝阳区北四环北沙滩桥“红星美凯龙”负一层雅洁五金',date:'10：00—21:00'}
          ]
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/serviceShop.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
