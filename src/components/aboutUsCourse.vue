<template>
  <div id="aboutUsCourse">
    <div class="title">
      <div class="title-1">
        <span>发展</span><span class="color">历程</span>
      </div>
      <div class="title-2"><span>DEVELOPMENT PATH</span></div>
    </div>
    <div class="list2">
      <div class="swiper-container swiper07">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background: #ffffff"  v-for="(item,index) in detailData">
            <div class="slide1">
              <img :src="$baseLink+item.pic" alt="">
            </div>
            <div class="slide2">
              <div class="s2-wrap">
                <div>
                  <div class="s2-cont">
                    <p class="s2Time">{{item.time}}</p>
                    <p class="title textEllipsis">{{item.title}}</p>
                    <p >{{item.desc|lowText}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mask">
              <div>
                <div class="mTime">{{item.time}}</div>
                <div class="mCont">
                  <div class="mcTitle">{{item.title}}</div>
                  <div class="mcInfo">
                    <p>{{item.desc}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="swiper-button-prev prev07"></div>-->
      <!--<div class="swiper-button-next next07"></div>-->
      <div class="xiushi">
        <img src="../../static/img/img46.png" alt="">
      </div>
    </div>
    <div class="list1" style="margin-bottom: 0;">
      <div class="swiper-container swiper-container-year" >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in detailData">
            <div class="listBox" :class="{'listBox1':index==lbx}">
              <p @click="year(index)">{{item.time}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev prevYear"></div>
      <div class="swiper-button-next nextYear"></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "aboutUsCourse",
      data(){
        return{
          lbx:0,
          prodata:[
            {
              year: '2017',
              path:'',
              content: [

                '雅洁HI-SYSTEM智能家居被确定为公司发展战略部署，召开雅洁智能家居第一届全国招商会，面向全国诚邀加盟商。',
                '雅洁智能家居十大产品系统成型，旗舰体验馆落成。']
            },
            {
              year: '2016',
              path:'',
              content:['在湖南怀化市建成全国第一家雅洁智能家居体验馆。']
            },
            {
              year: '2015',
              path:'',
              content: ['雅洁触屏指纹锁荣获“高新技术产品”称号，雅洁指纹多点防盗锁荣获“广东省高新技术产品”称号。',
                '研发出雅洁X5三空间轨迹槽防盗锁头——首款获得世界纪录的防盗锁头，并成为“世界上密钥量最大的防盗锁头。',
                '雅洁五金通过全国卫生产业企业管理协会抗菌产业分会专家委员会的专家审核，获准使用抗菌标志。经权威机构检测，雅洁抗菌产品抗菌率高达99％。']
            },
            {
              year: '2014',
              path:'',
              content: ['雅洁不断以创新改变生活， 研发出HI-System智慧住宅配套五金系统、主动安防智能门锁、磁性锁室内门锁、指纹锁、全进口100%意大利原创设计产品等全新技术、产品。',
                '雅洁HI-system智慧住宅配套五金系统，是雅洁五金开辟智慧五金时代的创举。']
            },
            {
              year: '2013',
              path:'',
              content: ['推出首款雅洁智能抗菌指纹锁J2011，新型高科技的融入，让“智能”更显人性化；雅洁被评为“中国五金锁具行业科技创新企业”获得广东省著名商标证书、2012年佛山市纳税超千万企业、南海民营企业五十强等称号。',
                '投入研发酒店联网锁技术平台，深入研究ZigBee无线技术在智能家居中的价值。']
            },
            {
              year: '2012',
              path:'',
              content: ['年生产规模达到2000多万套产品，以持续创新和优质服务的品牌实力荣获“中国十大锁王”称号。',
                '雅洁智能家居立项孵化，确立Hi-system VI形象。']
            },
            {
              year: '2011',
              path:'',
              content: ['成功组建“广东省智能锁具工程技术研究开发中心”，荣获“广东省优势传统产业升级示范企业”称号。']
            },
            {
              year: '2010',
              path:'',
              content: ['推出雅洁J1051别墅智能锁，开创行业首款专为豪宅定制的高端指纹锁。']
            },
            {
              year: '2009',
              path:'',
              content: ['销售商数量超过700家，专卖店超过1000家，销售网络覆盖70%地级以上城市。']
            },
            {
              year: '2008',
              path:'',
              content: ['获得“广东省名牌产品”、“广东省著名商标”、“广东省出口名牌”称号。']
            },
            {
              year: '2007',
              path:'',
              content: ['实现了ISO9001质量管理体系认证、ISO14001环境管理体系认证、OHSAS18001 职业健康安全管理体系认证三体系认证合一运行，并全面实施ERP系统管理。']
            },
            {
              year: '2006',
              path:'',
              content: ['雅洁推出的国内首款滑盖设计指纹锁，并获得2008年广东省“省长杯”工业设计奖。']
            },
            {
              year: '2005',
              path:'',
              content: ['获得“广东省用户满意企业”、“广东省用户满意产品”和“中国锁具十大质量品牌”称号。']
            },
            {
              year: '2004',
              path:'',
              content: ['获得“中国优秀锁具企业”和“广东百强民营企业”称号。']
            },
            {
              year: '2003',
              path:'',
              content: ['推出国内第一款福字造型设计门锁，开创锁具行业含有中国元素的新古典主义锁具产品。']
            },
            {
              year: '2002',
              path:'',
              content: ['全面申请产品专利，雅洁的商标在150多个国家和地区进行注册。']
            },
            {
              year: '2001',
              path:'',
              content: ['首创使用不锈钢精加工工艺制作不锈钢门锁，带动了国内不锈钢精铸锁的发展；原创“猪耳”玻璃门锁，在行业内第一次将插芯门锁应用到玻璃门锁上。']
            },
            {
              year: '2000',
              path:'',
              content: ['在广州建立雅洁第一间产品展示中心；内销额大幅增长，出口额以三位数的百分比增长，雅洁进入稳定高速的发展阶段。']
            },
            {
              year: '1999',
              path:'',
              content: ['推出国内首款铝合金材质铝锁，带动了业内门锁材质多元化的发展。']
            },
            {
              year: '1998',

              content: ['在业内率先采用间色表面处理工艺，引领起行业潮流；开发出户内锌合金中锁雅洁T010门锁，填补了行业市场空白。']
            },
            {
              year: '1997',
              path: '',
              content: ['雅洁多项产品荣获中国建筑装饰五金行业协会“优秀产品”。']
            },
            {
              year: '1996',
              path: '',
              content: ['开创性采用锌合金材质，推出第一代插芯门锁，推动了国内锌合金材质插芯门锁产品的发展。']
            },
            {
              year: '1994',
              path:'',
              content:['创立雅洁品牌。']
            },
            {
              year: '1990',
              path:'',
              content:['广东雅洁五金有限公司开始创办。']
            }
          ],
          swiper1:'',
          swiper2:'',
          detailData:[]
        }
      },
      filters:{
        time01:function (val) {
          var Y,M,D,month;
          var date = new Date(val * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          Y = date.getFullYear();
          M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
          D = date.getDate();
          return Y;
        },
        lowText:function (val) {
          var text = val;
          if(val.length>60){
            text = val.slice(0,60)+'...';
          }
          return text;
        }
      },
      mounted(){
        var _this = this;
        var swiper_02 = new Swiper('.swiper_02',{

        });

        // 获取历程数据
        this.$api.axiosGet('/index/about/getDevelop',{},function (data) {
          // console.log(data);
          _this.detailData = data.data.develop;
        });
        setTimeout(function () {
          _this.swiper1 = new Swiper('.swiper07',{
            prevButton:'.prev07',
            nextButton:'.next07',
            centeredSlides : true,
            slidesPerView:1.3,
            autoplay:3000,
            speed:1000,
            // loop:true,
            loopAdditionalSlides : 0,
            spaceBetween:50,
            // autoHeight: true,
            observer:true,
            onInit:function(swiper){
              $('.swiper07').on('mouseenter',function () {
                swiper.stopAutoplay();
              })
              $('.swiper07').on('mouseleave',function () {
                swiper.startAutoplay();
              })
            },
            onSlideChangeStart:function (swiper) {
              // console.log(swiper.activeIndex);
              if(_this.swiper2!='')
              {
                _this.swiper2.slideTo(swiper.activeIndex);
                _this.lbx = swiper.activeIndex;
              }
            }
          });
          setTimeout(function () {
            _this.swiper2 = new Swiper('.swiper-container-year',{
              slidesPerView : 5,
              speed:1000,
              observer:true,
              prevButton:'.prevYear',
              nextButton:'.nextYear',
              onInit:function (swiper) {
                swiper.slideTo(0);
              }
            })
          },30);
        },200);

      },
      methods:{
        year:function (index) {
          var _this = this;
          if(_this.swiper1 != '')
          {
            _this.swiper1.slideTo(index);
          }
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/aboutUsCourse.css";
  .xiushi{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 100;
  }
</style>
<style>
  @import "../../static/css/public.css";
</style>
