<template>
    <div id="down">
      <div class="titleWrap">
        <div class="cn"><span>产品APP</span>下载</div>
        <div class="en">SMART PRODUCT DOWNLOAD</div>
      </div>
      <div class="filtrate">
        <div>
          <div class="type">
            <el-select v-model="value7Type" placeholder="请选择对应的产品类型">
              <el-option-group
                v-for="group in options3Type"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
          </div>
          <div class="model">
            <el-select v-model="valueModel" placeholder="请选择对应的型号">
              <el-option
                v-for="item in optionsModel"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="innerText">
            <el-input v-model="inputInnerText" placeholder="请输入名称"></el-input>
          </div>
          <div class="searchBtn">
            <button>立即查询</button>
          </div>
        </div>
      </div>
      <div class="lists clearfloat">
        <template v-if="info.data">
          <ul v-if="info.data.length>0">
            <li v-for="(item,index) in info.data" :key="index" @click="toDetail(item.id)">
              <div>
                <div class="info_top">
                  <div class="infoWrap">
                    <div class="img">
                      <!--<img :src="$baseLink+item.pic" alt="">-->
                      <img :src="item.pic" alt="">
                    </div>
                    <div class="text">
                      <div class="name">{{item.title}}</div>
                      <div class="ver">型&emsp;&emsp;号：{{item.version}}</div>
                      <div class="downCount">下&ensp;载&ensp;量：{{item.number?item.number:0}}次</div>
                      <div class="time">上传时间：{{item.add_time}}</div>
                    </div>
                  </div>
                  <div class="downBtn">
                    <span>点击下载</span>
                  </div>
                </div>
                <div class="info_bottom">
                  <p>{{item.desc|desc1}}</p>
                </div>
              </div>
            </li>
          </ul>
          <div v-else style="text-align: center;margin-bottom: 40px;">
            <span style="font-size: 24px;color: #604775;">暂无下载资源，敬请期待</span>
          </div>
        </template>
      </div>
      <template v-if="info.data">
        <div class="pagina" v-if="info.data.length>0">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            @current-change="change"
            :total="info.total*10">
          </el-pagination>
        </div>
      </template>
    </div>
</template>

<script>
    export default {
        name: "down",
        data(){
          return{
            lists:[
              {
                pic:'static/img/down_img01.png',
                title:'阿里智能',
                add_time:'2018-08-20',
                number:'1531',
                url:'###',
                id:0,
                desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
              },
              {
                pic:'static/img/down_img01.png',
                title:'阿里智能',
                add_time:'2018-08-20',
                number:'1531',
                url:'###',
                id:0,
                desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
              },
              {
                pic:'static/img/down_img01.png',
                title:'阿里智能',
                add_time:'2018-08-20',
                number:'1531',
                url:'###',
                id:0,
                desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
              },
              {
                pic:'static/img/down_img01.png',
                title:'阿里智能',
                add_time:'2018-08-20',
                number:'1531',
                url:'###',
                id:0,
                desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
              },
            ],
            info:{
              data:[
                {
                  pic:'static/img/down_img01.png',
                  title:'阿里智能',
                  add_time:'2018-08-20',
                  number:'1531',
                  url:'###',
                  id:0,
                  version:'MS111-01',
                  desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
                },
                {
                  pic:'static/img/down_img01.png',
                  title:'阿里智能',
                  add_time:'2018-08-20',
                  number:'1531',
                  url:'###',
                  id:0,
                  version:'1.0',
                  desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
                },
                {
                  pic:'static/img/down_img01.png',
                  title:'阿里智能',
                  add_time:'2018-08-20',
                  number:'1531',
                  url:'###',
                  id:0,
                  version:'1.0',
                  desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
                },
                {
                  pic:'static/img/down_img01.png',
                  title:'阿里智能',
                  add_time:'2018-08-20',
                  number:'1531',
                  url:'###',
                  id:0,
                  version:'1.0',
                  desc:' 新一代多用户，全国智能家居系统，新一代多用户APP, 产品线丰富，支持全球首款配套全屋无线智能家居系统的智能语音操...'
                },
              ]
            },
            options3Type: [{
              label: '热门城市',
              options: [{
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }]
            }, {
              label: '城市名',
              options: [{
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }]
            }],
            value7Type: '',
            optionsModel: [{
              value: '选项1',
              label: '黄金糕'
            }],
            valueModel: '',
            inputInnerText:''
          }
        },
      filters:{
        desc1(val){
          var str = val;
          if(str.length>75){
            str = str.slice(0,75)+'...'
          }
          return str
        }
      },
      methods:{
        change(val){
          this.getData(val);
        },
        toDetail(id){
          // console.log(id)
          this.$router.push({
            path:'/downDetail',
            query:{
              id:id
            }
          })
        },
        getData(page){
          const _this = this;
          _this.$api.axiosGet('/index/service/downloadarea', {
            page:page
          }, function (data) {
            // console.log(data);
            _this.info = data.data.data;
            // console.log(_this.info)
          });
        }
      },
      created() {
          // this.getData(0);
      }
    }
</script>

<style scoped>
  @import "../../static/css/down.css";

</style>
<style>
  @import "../../static/css/public.css";
  .el-select-group__title{
    font-size: 14px;
    padding-left: 15px;
  }
  .el-select-group .el-select-dropdown__item{
    padding-left: 26px;
  }
</style>

