<template>
  <div id="inviteDetail">
    <div class="list1 clearfloat">
      <div class="l1-title floatl">
        <div class="l1-title1">国内少数拥有指纹锁核心技术</div>
        <div class="l1-title2">雅洁五金，80道工序全数合格检验，国家安防认真，超强精准识别。</div>
      </div>
      <div class="l1-search floatr">
        <form action="search01" class="clearfloat">
          <div class="input floatl">
            <input type="text" placeholder="输入关键字">
          </div>
          <div class="btn floatl">
            <button></button>
          </div>
        </form>
      </div>
      <div class="l1-return">
        <span class="icon"></span><span>返回</span>
      </div>
    </div>
    <div class="list2">
      <div>
        <div class="l2-info">
          <div class="info-1">
            <span>运营总监</span><span class="small">Director of Operations</span>
          </div>
          <div class="info-2 clearfloat">
            <div class="i2-1">
              <i></i><span>1人</span>
            </div>
            <div class="i2-2">
              <i></i><span>广州市番禺区</span>
            </div>
            <div class="i2-3">
              <i></i><span>2017-11-25</span>
            </div>
          </div>
        </div>
        <div class="l2-button">
          <button @click="showPop">立即申请</button>
        </div>
      </div>
    </div>
    <div class="list3">
      <div class="l3-1">
        <div class="l31-title">职位描述：</div>
        <ul>
          <li>1、深入了解互联网行业，对行业趋势和发展有自己的见解，收集、整理及分析行业信息和市场趋势；</li>
          <li>2、负责网站整体运营、推广运维及日常运营管理工作，制定网站运营策略、方案和计划并执行；</li>
          <li>3、负责业务运营团队营销产品的创新与策划，基于对用户和产品的了解，提出活动策划及运营的方案，并组织实施；</li>
          <li>4、通过数据分析，对市场线上线下活动进行实施并跟踪效果；</li>
          <li>5、根据公司现有数据资源、品牌资源及商品资源，制定有效的多方位营销策略，提升公司品牌整体竞争力；</li>
        </ul>
      </div>
      <div class="l3-2">
        <img src="../../static/img/img26.png" alt="">
      </div>
    </div>
    <div class="list4">
      <div class="l3-2">
        <img src="../../static/img/img27.png" alt="">
      </div>
      <div class="l3-1">
        <div class="l31-title">任职要求：</div>
        <ul>
          <li>1、3年以上的互联网行业从业经验，1年以上互联网运营团队管理经验；</li>
          <li>2、了解互联网各类产品，有成功的网站策划、推广和管理个案，熟悉电商网站的整体运作；</li>
          <li>3、熟悉运营发展趋势，熟悉基于数据分析的运营管理模式和工作流程；</li>
          <li>4、具有业务运营把控能力,出色的商业判断力,敏锐的商业触觉；对运营，营销产品敏感，善于数据分析、归纳总结；</li>
        </ul>
      </div>
    </div>
    <div class="list5">
      <div class="l5-1">
        <div class="l5-bj"></div>
        <div class="l5-bj02"></div>
      </div>
      <div class="l5-2">
        <div class="swiper-container swiper09">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slide-img">
                <img src="../../static/img/img28.png" alt="">
                <div class="img-bottom"></div>
              </div>
              <div class="slide-info">
                <div class="info-title">薪酬福利：</div>
                <ul>
                  <li>1、薪资8-12万，薪资构成=基本工资+绩效工资+提成+全勤奖+工龄奖+活动奖励+年终奖</li>
                  <li>2、享有带薪休假、婚假、产假、生日礼物等各项福利；</li>
                  <li>3、晋升空间：公司提供完善的员工职业生涯规划和晋升机制，定期公平竞聘。</li>
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-img">
                <img src="../../static/img/img28.png" alt="">
                <div class="img-bottom"></div>
              </div>
              <div class="slide-info">
                <div class="info-title">薪酬福利：</div>
                <ul>
                  <li>1、薪资8-12万，薪资构成=基本工资+绩效工资+提成+全勤奖+工龄奖+活动奖励+年终奖</li>
                  <li>2、享有带薪休假、婚假、产假、生日礼物等各项福利；</li>
                  <li>3、晋升空间：公司提供完善的员工职业生涯规划和晋升机制，定期公平竞聘。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev09"></div>
        <div class="swiper-button-next next09"></div>
      </div>
    </div>
    <div class="popUp" v-if="popUp01">
      <div class="popUpWrap">
        <div class="wrapList">
          <div class="list-left">
            <img src="../../static/img/bj10.png" alt="">
          </div>
          <div class="list-right">
            <div>
              <div class="close01" @click="close"></div>
              <div class="data-1">
                <div class="d1-1">
                  <span class="name01">姓名</span>
                  <input type="text" placeholder="请输入姓名" v-model="formData.name">
                </div>
                <div class="d1-2">
                  <span class="name01">性别</span>
                  <div class="select-1">
                    <div class="cir">
                      <input type="radio" @click="selInput" name="sex" value="男士" v-model="formData.sex">
                    </div>
                    <div class="text-1 name01">男士</div>
                  </div>
                  <div class="select-1">
                    <div class="cir">
                      <input type="radio" @click="selInput" name="sex" value="女士" v-model="formData.sex">
                    </div>
                    <div class="text-1 name01">女士</div>
                  </div>
                </div>
              </div>
              <div class="data-1">
                <div class="d1-1">
                  <span class="name01">手机号</span>
                  <input type="text" placeholder="请输入手机号" v-model="formData.phone">
                </div>
                <div class="d1-1">
                  <span class="name01">地区</span>
                  <input type="text" placeholder="请选择地区" v-model="formData.addr">
                </div>
              </div>
              <div class="data-1 data-3">
                <div class="d1-1">
                  <span class="name01">自我描述</span>
                  <input type="text" placeholder="请输入自我描述" v-model="formData.desc">
                </div>
              </div>
              <div class="data-4">
                <div class="d4-text name01">上传附件</div>
                <div class="d4-upload">
                  <div class="showBtn">选择文件
                    <input class="file" type="file" @change="updata">
                  </div>
                  <div class="showData">
                    <input class="text" disabled type="text" v-model="formData.upload">
                  </div>
                </div>
              </div>
              <div class="data-5">
                <button @click="btn">确认提交</button>
              </div>
              <div class="bj01">
                <img src="../../static/img/popImg01.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "inviteDetail",
      data(){
        return {
          popUp01:false,
          formData:{
            name:'',
            phone:'',
            addr:'',
            desc:'',
            sex:'',
            upload:''
          }
        }
      },
      methods:{
        close(){
          this.popUp01 = false;
        },
        updata(e){
          console.log(e.target.files);
          this.formData.upload = e.target.files[0].name;
          console.log(this.formData.upload);
        },
        btn(){
          console.log(this.formData)
        },
        selInput(e){
          console.log(e);
          $('.cir').removeClass('sel');
          $(e.target).parent('.cir').addClass('sel');
        },
        showPop(){
          this.popUp01 = true;
        }
      },
      mounted(){
        var swiper09 = new Swiper('.swiper09',{
          prevButton:'.prev09',
          nextButton:'.next09'
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/inviteDetail.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
