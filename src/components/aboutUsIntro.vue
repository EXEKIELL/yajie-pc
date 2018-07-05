<template>
    <div id="aboutUsIntro">
      <div class="list1 clearfloat">
        <div class="img01"><img  src="../../static/img/img02.jpg" alt=""></div>
        <div class="img02"><img src="../../static/img/img03.jpg" alt=""></div>
        <div class="img03"><img src="../../static/img/img04.png" alt=""></div>
        <div class="info_1">
          <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。同时远销欧美、中东和东南亚等50多个国家和地区。</p>
        </div>
        <div class="info_1 info_2">
          <p>雅洁五金位于中国广东佛山，占地面积近120000平方米。拥有各类中、高级技术人员100多名，员工约1000名，1000多台/条国内外先进的生产设备或自动化生产线，建有电子、模具、压铸、机加、抛光、喷粉、包装、维修等九大现代化车间及配套齐全的生产、生活设施。</p>
        </div>
      </div>
      <div class="list2">
        <div class="swiper-container swiper03">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperBox">
              <div class="slideBox">
                  <div class="sildeLeft">
                    <img src="../../static/img/brief3.jpg"/>
                  </div>
                  <div class="sildeRight">
                    <div class="srTitle"><p>0{{index+1}} {{item.title}}</p></div>
                    <p v-for="(its,i) in item.content">{{its}}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev03"></div>
        <div class="swiper-button-next next03"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUsIntro",
      data(){
        return{
          swiperBox:[
            {
              title:'打造恒久精工品质，传承中国工匠精神',
              content:[
                '雅洁五金以敏锐的目光、鲜明的个性，寻求与客户心与心的沟通，致力于通过严谨的技术开发，严格的质量监控，永不停歇地推出恒久一生的精工品质、为普天广厦提供优质的满意产品，在社会各界嬴得了良好的口碑：',
                '“高新技术企业”“广东省著名商标”“广东省清洁生产企业”“广东省知识产权优势企业”“广东省名牌产品”“广东省高新技术产品”“广东省“省长杯”优良工业设计奖”等。'
              ]
            },
            {
              title:'推行企业品牌战略，坚持走自主研发之路',
              content:[
                '成立“广东省智能锁具工程技术研究开发中心”，申请国家专利500余项。创建在全国锁具及五金企业中居先进地位的“国家认可认证实验室（CNAS）”（是国内极少数具备机械锁、电子锁同时也具备美标、欧标、澳标锁具检测能力的实验室之一）。致力于智能科技产品的创新与研发，为用户提供更优质的产品、更专业的服务、更先进的体验。'
              ]
            },
            {
              title:'全面实施创新战略，携手共赢新时代',
              content:[
                '雅洁五金以强大的技术优势，深耕五金行业，不断突破竞争红海，始终走在行业潮头。2005年，智能锁具产品诞生，成功将先进的指纹传感技术、指纹识别算法、全套的机械结构专利等科技创新与优越的表面处理技术完美结合；2015年雅洁智能家居系统隆重面市，远程操控家居设备，实现传统五金行业与智能时代的成功对接；2012年雅洁首批抗菌产品全线铺开，智能抗菌五金走进千家万户，成功将抗菌技术应用在五金产品上。'
              ]
            },
            {
              title:'延续中国文化精髓，推行雅洁文化战略',
              content:[
                '秉承“立足中华 放眼全球 创立名牌 实现腾飞”的发展理念，雅洁五金将继续以强大的企业实力和源源不断的创造力，打造行业优势品牌，向着“与全球每个家庭共享美好未来”的愿景践行。'
              ]
            }
          ],
          swiper03:''
        }
      },
      mounted(){
        var _this = this;
        setTimeout(function () {
          _this.swiper03 = new Swiper('.swiper03',{
              prevButton:'.prev03',
              nextButton:'.next03',
              autoplay:3000,
              // loop:true
            });
        },100);
      }
    }
</script>
<style scoped>
@import "../../static/css/aboutUsIntro.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
