<template>
    <div id="downDetail">
      <div class="info_1">
        <div class="wrap">
          <div class="info1_left">
            <div>
              <div class="info_title">{{info.title}}</div>
              <div class="info_desc">{{info.quotations}}</div>
              <div class="info_enTitle">{{info.quotations1}}</div>
              <div class="info_btns">
                <div class="" v-for="(item,index) in urls" :key="index">
                  <a :href="item.url">{{item.name}}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="info1_right">
            <img :src="imgs" alt="">
          </div>
        </div>
      </div>
      <div class="info_2">
        <div class="wrap">
          <div class="info2_left">
            <img src="../../static/img/downDetail_img01.png" alt="">
          </div>
          <div class="info2_right">
            <p>{{info.function}}</p>
          </div>
        </div>
      </div>
      <div class="info_3">
        <div class="title">
          <img src="../../static/img/downDetail_img03.png" alt="">
        </div>
        <div class="richText">
          <div class="wrap">
            <div v-html="info.content"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "downDetail",
      data(){
        return{
          info:{
            add_time: "2019-02-01",
            content: "<p>312321321123</p>",
            desc: "测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1",
            desc1: "测试1",
            function: "测试1",
            id: 2,
            number: 4,
            pic: "/uploads/Service/app/20190201/3a4692d755067d1d8d5bbad6507121b4.png",
            status: 1,
            title: "测试1",
            url1: "http://www.hengdikeji.com/",
            url2: "http://www.hengdikeji.com/",
            url3: "http://www.hengdikeji.com/",
            url4: "http://www.hengdikeji.com/",
          },
          urls:[
            {
              name:'IOS版v1',
              url:'http://www.hengdikeji.com/'
            },
            {
              name:'Android版V1',
              url:'http://www.hengdikeji.com/'
            },
            {
              name:'ISO版PAD',
              url:'http://www.hengdikeji.com/'
            },
            {
              name:'Android版PAD',
              url:'http://www.hengdikeji.com/'
            },
          ],
          imgs:'static/img/downDetail_img02.png'
        }
      },
      created(){
        var id = this.$router.history.current.query.id;
        this.getData(id);
      },
      methods:{
        getData(id){
          const _this = this;
          _this.$api.axiosGet('/index/service/dinfo', {
            id:id
          }, function (data) {
            // console.log(data);
            _this.info = data.data.data;
            // console.log(_this.info)
          });
        }
      }
    }
</script>

<style scoped>
  @import "../../static/css/down.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
