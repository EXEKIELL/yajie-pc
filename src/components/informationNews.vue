<template>
    <div id="informationNews">
      <div class="list1">
        <div class="l1-1">品牌终端<span>一体化</span></div>
        <div class="l1-2">雅洁通过产品和服务，努力营造一种和谐氛围，引领一种生活方式</div>
        <div class="l1-3">BRAND TERMINAL INTEGRATION</div>
        <div class="l1-4">YAJIE STRIVES TO CREATE A HARMONIOUS ATMOSPHERE AND LEAD A LIFESTYLE THROUGH PRODUCTS AND SERVICES.</div>
      </div>
      <div class="list2-wrap">
        <div class="list" v-for="(item,index) in listData" :key="index">
          <div class="listImg" v-if="index%2 == 0">
            <img :src="item.img" alt="">
          </div>
          <div class="listText" v-if="index%2 == 0">
            <div class="text1">{{item.title}}</div>
            <div class="text2">
              <p>{{item.desc}}</p>
            </div>
            <div class="text3">
              <div class="more">MORE <span class="jiantou"></span></div>
              <div class="date">
                <span>{{item.date[0]}}</span><span>/{{item.date[1]}}</span>
              </div>
            </div>
          </div>
          <div class="listText" v-if="index%2 != 0">
            <div class="text1">{{item.title}}</div>
            <div class="text2">
              <p>{{item.desc}}</p>
            </div>
            <div class="text3">
              <div class="more">MORE <span class="jiantou"></span></div>
              <div class="date">
                <span>{{item.date[0]}}</span><span>/{{item.date[1]}}</span>
              </div>
            </div>
          </div>
          <div class="listImg" v-if="index%2 != 0">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div>
      <div class="list3-pagin">
        <span v-for="(item,index) in pagin" :class="{sel:index == 0}" :key="index" @click="change(index+1)">{{index+1}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "informationNews",
      data(){
        return {
          pagin:3,
          listData:[
            {
              img:'./static/img/img05.png',
              title:'Archie雅洁，走品牌代理的新外贸之路',
              desc:'Archie雅洁，走品牌代理的新外贸之路Archie雅洁，走品牌代理牌代理的新外贸之路Archie雅洁，走品牌代理的新外贸',
              date:[22,'Nov']
            },
            {
              img:'./static/img/img06.png',
              title:'Archie雅洁，走品牌代理的新外贸之路',
              desc:'Archie雅洁，走品牌代理的新外贸之路Archie雅洁，走品牌代理牌代理的新外贸之路Archie雅洁，走品牌代理的新外贸',
              date:[22,'Nov']
            },
            {
              img:'./static/img/img07.png',
              title:'Archie雅洁，走品牌代理的新外贸之路',
              desc:'Archie雅洁，走品牌代理的新外贸之路Archie雅洁，走品牌代理牌代理的新外贸之路Archie雅洁，走品牌代理的新外贸',
              date:[22,'Nov']
            },
            {
              img:'./static/img/img08.png',
              title:'Archie雅洁，走品牌代理的新外贸之路',
              desc:'Archie雅洁，走品牌代理的新外贸之路Archie雅洁，走品牌代理牌代理的新外贸之路Archie雅洁，走品牌代理的新外贸',
              date:[22,'Nov']
            },
            {
              img:'./static/img/img07.png',
              title:'Archie雅洁，走品牌代理的新外贸之路',
              desc:'Archie雅洁，走品牌代理的新外贸之路Archie雅洁，走品牌代理牌代理的新外贸之路Archie雅洁，走品牌代理的新外贸',
              date:[22,'Nov']
            },
            {
              img:'./static/img/img08.png',
              title:'Archie雅洁，走品牌代理的新外贸之路',
              desc:'Archie雅洁，走品牌代理的新外贸之路Archie雅洁，走品牌代理牌代理的新外贸之路Archie雅洁，走品牌代理的新外贸',
              date:[22,'Nov']
            }
          ]
        }
      },
      methods:{
        change(i){
          $('.list3-pagin span').removeClass('sel');
          $('.list3-pagin span').eq(i-1).addClass('sel');
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/informationNews.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
