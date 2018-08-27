<template>
    <div id="informationDetail">
      <!--<div class="list1">
        <img src="../../static/img/bj01.png" alt="">
        <div class="lt-bottom" v-if="list.info">
          <img :src="list.info.pic" />
        </div>
        <div class="l1-title">
          <div>
            <div class="l1-1"><span v-if="list.info">{{list.info.title}}</span><span class="time" v-if="list.info" >{{list.info.time}}</span></div>
            <p class="l1-2" v-if="list.info">{{list.info.desc}}</p>
          </div>
        </div>
      </div>
      <div class="list2" v-html="list.info.content1"  v-if="list.info">

      </div>-->
      <!--<div class="list3">-->
        <!--<div class="l3-text">-->
          <!--<p>雅洁一直保持着健康、稳定、持续的增长，在国内外市场上取得骄人成绩，为企业在社会各界赢得了良好口碑，已获得政府、行业和社会各方面荣誉，包括“全国质量信得过产品”、“中国名优产品”、“中国优秀制锁企业”、“广东省用户满意产品”、“广东省百强民营企业”、“全国用户满意产品”、“中国质量500强”、“中国十大五金质量品牌”、连续七年“守合同重信用企业”、广东省“知识产权优势企业”和连续2年“佛山市纳税超1000万元企业”等。雅洁已于2001年通过了ISO9001质量管理体系认证，2007年通过了中检认证集团（CCIC）ISO14001环境管理体系和OHSAS18001职业健康安全管理体系认证。“雅洁”商标已被认定为“中国驰名商标”和“广东省著名商标”，雅洁锁具产品已于2008年获得“广东省名牌产品”称号。</p>-->
          <!--<p>自2007年开始，雅洁开始实施全新的品牌战略，通过导入现代专业的品牌管理模式，提升内部销售实力，建立在装饰五金行业具有竞争强势的专业营销团队和营销体系，研发具有市场竞争优势的产品体系和打造企业精益、高效、准时的产品供应体系，实现市场占有目标和销售目标，在三至五年内，把雅洁打造成中国乃至全球领先的品牌。</p>-->
        <!--</div>-->
        <!--<div class="l3-img">-->
          <!--<img src="../../static/img/bj02.png" alt="">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="list4">
        <div v-for="(item,index) in list.min"  v-if="list.info">
          <img :src="item.pic" alt="">
        </div>
      </div>-->
     	 <div class="inforIn" v-if="list.info">
     	 	<div class="inforTitle">
     	 		<p>{{list.info.title}}</p>
     	 	</div>
     	 	<div class="inforDate">
     	 		<p><span>日期：{{list.info.time}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>浏览：{{list.info.browse}}人</span></p>
     	 	</div>
     	 	<div class="inforContent" v-html="list.info.content1"></div>
    	</div>
    	<div class="prevNext clearfloat">
    		<div class="prev" v-if="list.front" @click="btn(0)">
    			<p>上一篇&nbsp;&nbsp;&nbsp;&nbsp;{{list.front.title}}</p>
    		</div>
    		<div class="next" v-if="list.after" @click="btn(1)">
    			<p><span class="textEllipsis" style="width: 82%">{{list.after.title}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>下一篇</span></p>
    		</div>
    	</div>
      <!--侧边咨询-->
      <div class="l9">
        <div>
          <div class="l9_wrap">
            <div class="w_1">
              <div class="head">
                <div class="img" v-if="bottomDetail.length">
                  <img :src="$baseLink+bottomDetail[0].pics" alt="">
                </div>
              </div>
            </div>
            <div class="w_2">
              <div>微信扫一扫</div>
              <div>关注该公众号</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  function timestampToTime(timestamp) {
    var Y,M,D,month;
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear();
    M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
    D = date.getDate();
    return Y+'-'+M+'-'+D;
  }
    export default {
      name: "informationDetail",
      data(){
        return {
          id:null,
          list:{},
          bottomDetail:[]
        }
      },
      methods:{
        btn(i){
          const _this = this;
          if(i == 0){
            //上一篇
            var id0 = this.list.front.id;
            _this.$api.axiosGet('/index/news/getNewsinfo/id/'+id0,{},function (data) {
              console.log(data);
              _this.list = data.data;
              _this.list.info.pic = _this.$baseLink + _this.list.info.pic;

              for(var i = 0; i<_this.list.min.length; i++)
              {
                _this.list.min[i].pic = _this.$baseLink + _this.list.min[i].pic;
              }
              _this.list.info.time = timestampToTime(_this.list.info.time);
              // console.log(_this.list);
            });
          }else{
            //下一篇
            var id1 = this.list.after.id;
            _this.$api.axiosGet('/index/news/getNewsinfo/id/'+id1,{},function (data) {
              console.log(data);
              _this.list = data.data;
              _this.list.info.pic = _this.$baseLink + _this.list.info.pic;

              for(var i = 0; i<_this.list.min.length; i++)
              {
                _this.list.min[i].pic = _this.$baseLink + _this.list.min[i].pic;
              }
              _this.list.info.time = timestampToTime(_this.list.info.time);
              // console.log(_this.list);
            });
          }
        }
      },
      mounted(){
        var _this = this;
        let id = this.$router.history.current.query.id;
        _this.id = id;
        _this.$api.axiosGet('/index/news/getNewsinfo/id/'+id,{},function (data) {
          console.log(data);
          _this.list = data.data;
          _this.list.info.pic = _this.$baseLink + _this.list.info.pic;

          for(var i = 0; i<_this.list.min.length; i++)
          {
            _this.list.min[i].pic = _this.$baseLink + _this.list.min[i].pic;
          }
          _this.list.info.time = timestampToTime(_this.list.info.time);
          // console.log(_this.list);
        });
        // 获取底部信息
        this.$api.axiosGet('/index/about/getLink',{},function (data) {
          console.log(data);
          _this.bottomDetail = data.data.link;
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/informationDetail.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
