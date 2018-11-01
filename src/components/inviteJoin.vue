<template>
  <div id="inviteJoin">
    <div class="banner">
      <img src="../../static/img/banner07.png" alt="">
    </div>
    <div class="zhankai sel">
      <div class="icon23">
        <img src="../../static/img/icon23.png" alt="">
      </div>
    </div>
    <div class="nav01 sel">
      <ul>
        <li v-for="(item,index) in nav01List" :class="{sel:index == selStatus2}" :key="index">
          <router-link :to="item.to">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
    <div class="wrapButton">
      <ul>
        <li v-for="(item,index) in liBtn" :class="{sel:index == detailIdx-1}" :key="index" @click="btn01(index)">
          <div :class="{i1:index == 0,i2:index == 1,i3:index == 2}" class="icon"></div>
          <div>{{item}}</div>
        </li>
      </ul>
    </div>
    <div class="title">
      <img style="margin: auto;" src="../../static/img/title06.png" alt="">
    </div>
    <div class="list2">
      <!--<img src="../../static/img/bj11.png" alt="">-->
      <div class="swiper-container swiper11">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide11">
            <div>
              <div class="swiper-container swiper12">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slide12" v-for="(item,index) in join1" :key="index">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-2">
                      <div class="cnTitle">{{item.title}}</div>
                      <p>{{item.text}}</p>
                    </div>
                    <div class="s12-1"></div>
                  </div>
                </div>
              </div>
              <div class="swiper12_detail">
                <div>
                  <div class="w_1 wrap1" v-for="(item,index) in join1" :key="index" :class="{sel:index == index1}">
                    <div class="num">0{{index+1}}</div>
                    <div class="title1">{{item.title}}</div>
                  </div>
                  <div @click="index1Change(index)" :class="{wrap2:index == 0,wrap3:index == 1,wrap4:index == 2,sel:index == index1}" class="w_2" v-for="(item,index) in join1" :key="index">
                    <div class="num">0{{index+1}}</div>
                    <div class="title1">{{item.title}}</div>
                    <div class="mask"></div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev prev12" style="z-index: 1000;"></div>
              <div class="swiper-button-next next12" style="z-index: 1000;"></div>
              <!--<div class="swiper-pagination pagin12"></div>-->
            </div>
          </div>
        </div>
        <div class="swiper-pagination pagin11"></div>
      </div>
    </div>
    <div class="title">
      <img style="margin: auto;" src="../../static/img/title07.png" alt="">
    </div>
    <div class="list3">
      <div class="l3-wrap">
        <div class="l3-swiper">
          <!--<div class="prev13"></div>-->
          <!--<div class="next13"></div>-->
          <div class="swiper-container swiper13">
            <!--<div class="bj01"></div>-->
            <div class="swiper-wrapper">
              <div class="swiper-slide slide13" v-for="(item,index) in join2" :key="index">
                <div class="slide13-img">
                  <img :src="$baseLink+item.pic" alt="">
                </div>
                <div class="slide13-info">
                  <div class="num">0{{index+1}}.</div>
                  <div class="info13-1">
                    <div class="i13-title">{{item.title}}</div>
                    <!--<div class="i13-title2">{{item.chTitle}}</div>-->
                  </div>
                  <div class="info13-2">
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiperRight">
            <div class="swiper-container swiper17">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in join2">
                  <div class="r1" :class="{sel:pagin13 == index}" @click="btn13(index)">
                    <div>
                      <div class="r1-num">0{{index+1}}</div>
                      <div class="r1-title textEllipsis">优势{{index+1}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--传统五金-->
    <div class="wrap" v-if="detailIdx == 1">
      <div class="list4">
        <div class="l4-wrap">
          <div class="l4-title">
            <img src="../../static/img/title03.png" alt="">
          </div>
          <div class="l4-swiper">
            <div class="swiper-container swiper14">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide14" v-for="(item,index) in three1" :key="index">
                  <div class="slide14-1">
                    <img :src="$baseLink+item.pic" alt="">
                    <div class="imgDetail">
                      <p>{{item.text}}</p>
                    </div>
                  </div>
                  <div class="slide14-2">
                    <div class="cirImg">
                      <div><img src="../../static/img/img35.png" alt=""></div>
                    </div>
                    <div class="sl4-wrap">
                      <div class="s4-info1">{{item.title}}</div>
                      <div class="s4-info2">{{item.ntitle}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev prev14"></div>
            <div class="swiper-button-next next14"></div>
          </div>
        </div>
      </div>
      <div class="list5">
        <div class="l5-wrap">
          <div class="l5-title" style="margin-bottom: 0">
            <img src="../../static/img/title04.png" alt="">
          </div>
          <div class="l5-slide">
            <div class="" v-for="(item,index) in progress1" :key="index">
              <img :src="$baseLink+item.pic" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--智能家居-->
    <div class="wrap" v-if="detailIdx == 3">
      <div class="title" style="margin-bottom: 60px;">
        <img style="margin: auto;" src="../../static/img/title09.png" alt="">
      </div>
      <div class="list7">
        <div class="l7-wrap">
          <div class="l7-img">
            <img src="../../static/img/img44.png" alt="">
          </div>
          <div class="l7-info">
            <ul>
              <li v-for="(item,index) in condition" :key="index">
                <div class="xuhao center">{{index+1}}</div>
                <div class="text">
                  <div class="t0">{{item.title}}</div>
                  <!--<div class="t1" v-if="item.mes1">-->
                    <!--<div class="t1Text" v-for="(item1,index1) in item.mes1" :key="index1">-->
                      <!--<span class="xh">({{index1+1}})</span><span>{{item1}}</span>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="t2" v-if="item.mes2">-->
                    <!--<div class="t2Text" v-for="(item2,index2) in item.mes2" :key="'i'+index2">-->
                      <!--<span class="t-title">{{item2.label}}</span><span>{{item2.text}}</span>-->
                    <!--</div>-->
                  <!--</div>-->
                  <div class="t1">{{item.text}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="list4">
        <div class="l4-wrap">
          <div class="l4-title">
            <img src="../../static/img/title03.png" alt="">
          </div>
          <div class="l4-swiper">
            <div class="swiper-container swiper14">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide14" v-for="(item,index) in three1" :key="index">
                  <div class="slide14-1">
                    <img :src="$baseLink+item.pic" alt="">
                    <div class="imgDetail">
                      <p>{{item.text}}</p>
                    </div>
                  </div>
                  <div class="slide14-2">
                    <div class="cirImg">
                      <div><img src="../../static/img/img35.png" alt=""></div>
                    </div>
                    <div class="sl4-wrap">
                      <div class="s4-info1">{{item.title}}</div>
                      <div class="s4-info2">{{item.ntitle}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev prev14"></div>
            <div class="swiper-button-next next14"></div>
          </div>
        </div>
      </div>
      <div class="list5">
        <div class="l5-wrap">
          <div class="l5-title" style="margin-bottom: 0;">
            <img src="../../static/img/title04.png" alt="">
          </div>
          <div class="l5-slide">
            <div class="" v-for="(item,index) in progress1" :key="index">
              <img :src="$baseLink+item.pic" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--智能产品-->
    <div class="wrap" v-if="detailIdx == 2">
      <div class="list4">
        <div class="l4-wrap">
          <div class="l4-title">
            <img src="../../static/img/title03.png" alt="">
          </div>
          <div class="l4-swiper">
            <div class="swiper-container swiper14">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide14" v-for="(item,index) in three1" :key="index">
                  <div class="slide14-1">
                    <img :src="$baseLink+item.pic" alt="">
                    <div class="imgDetail">
                      <p>{{item.text}}</p>
                    </div>
                  </div>
                  <div class="slide14-2">
                    <div class="cirImg">
                      <div><img src="../../static/img/img35.png" alt=""></div>
                    </div>
                    <div class="sl4-wrap">
                      <div class="s4-info1">{{item.title}}</div>
                      <div class="s4-info2">{{item.ntitle}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev prev14"></div>
            <div class="swiper-button-next next14"></div>
          </div>
        </div>
      </div>
      <div class="list5">
        <div class="l5-wrap">
          <div class="l5-title" style="margin-bottom: 0;">
            <img src="../../static/img/title04.png" alt="">
          </div>
          <div class="l5-slide">
            <div class="" v-for="(item,index) in progress1" :key="index">
              <img :src="$baseLink+item.pic" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      <img style="margin: auto;" src="../../static/img/title08.png" alt="">
    </div>
    <div class="list6">
      <div class="l6-wrap">
        <img src="../../static/img/bj15.png" alt="">
        <div class="detail">
          <div>
            <div class="type">
              <div class="typeTitle">类型</div>
              <div class="typeTags">
                <span @click="detailIdx = index+1" :class="{sel:detailIdx-1 == index}" v-for="(item,index) in liBtn" :key="index">{{item}}</span>
              </div>
            </div>
            <div class="detail_1">
              <div class="name">
                <span class="label label1">姓名</span>
                <div class="input">
                  <input type="text" v-model="joinForm.name" placeholder="请输入姓名">
                </div>
              </div>
              <div class="phone">
                <span class="label label1">电话</span>
                <div class="input">
                  <input type="text" v-model="joinForm.phone" placeholder="请输入联系方式">
                </div>
              </div>
            </div>
            <div class="addr">
              <span class="label">地区</span>
              <div class="region">
                <div class="province" style="">
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
                <div class="district" style="display: block;">
                  <el-select v-model="district" placeholder="请选择区">
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <div class="message">
              <span class="label">留言</span>
              <div class="input">
                <textarea placeholder="请输入您的留言" v-model="joinForm.desc"></textarea>
              </div>
            </div>
            <div class="button">
              <button @click="btnForm">提交申请</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "inviteJoin",
      data(){
        return {
          selStatus2:0,
          nav01List:[
            {text:'招商加盟',to:'/inviteJoin'},
            {text:'人才招聘',to:'/invite/inviteInfo'}
          ],
          province: '',
          city:'',
          district:'',
          options1:[],
          options2:[],
          options3:[],


          tagChange:0,
          index1:0,
          pagin13:0,
          detailIdx:1,//1-传统五金 2-智能产品 3-智能家居
          swiper13:null,
          liBtn:['传统五金','智能产品','智能家居'],
          threeBtn:["雅洁五金招商","智能家居招商","智能门锁招商"],
          three1:[
            {
              title:'销售返利的支持',
              img:'static/img/support01.png',
              enTitle:'Sales rebate support',
              content:'根据年度销售目标，经销商可获得不同程度的返利最高可达5%。'
            },
            {
              title:'目标市场的支持和培养',
              img:'static/img/support02.png',
              enTitle:'Support and development of target markets',
              content:'公司会根据经销商所在地的市场情况，酌情分配客户资源到经销商。'
            },
            {
              title:'展厅的支持',
              img:'static/img/support03.png',
              enTitle:'Exhibition support',
              content:'公司会给予展厅、门面专柜费用进行补贴，最高补贴可达50%。样品和展板的支持，最高优惠50%。免费为经销商进行市场调研、展厅选址、店面布局和设计、品牌形象包装等一站式服务。'
            },
            {
              title:'店铺运营的支持',
              img:'static/img/support04.png',
              enTitle:'Store operation support',
              content:'公司对经销商进行运营指导，提供合理化的建议，结合公司的资源优势帮组经销商实现盈利，持续发展。'
            },
            {
              title:'广告的支持',
              img:'static/img/support05.png',
              enTitle:'Advertising support',
              content:'公司常年在互联网、电视媒体和专业报刊杂志、户外等大众媒体投放广告。同时，不定期与经销商一起商讨广告方案，并投放区域性广告。'
            },
            {
              title:'物料支持',
              enTitle:'Material support',
              img:'static/img/support06.png',
              content:'免费提供常规广告宣传物料（画册、海报等），免费提供节假日礼品。'
            },
            {
              title:'经销商管理培训',
              img:'static/img/support07.png',
              enTitle:'Dealer management training',
              content:'保姆式全方位终端培训。包括产品知识、营销知识、店面管理、终端导购技巧、技术安装指导、售后服务等，提升经销商服务水平和市场竞争力。'
            }
          ],
          three2:[
            {
              title:'销售返利的支持',
              enTitle:'Sales rebate support',
              content:'完成年度销售目标，可获公司返利。地产商样板间产品免费上样。店铺样板体验间及周边渠道门店样品可获50%支持。'
            },
            {
              title:'一站式开业支持',
              enTitle:'One-stop opening support',
              content:'协助店面选择规划、设计、样品规划、活动促销、咨询服务；用一对一的整合营销，力争在一定范围内产生爆炸性的影响力。并提供产品宣传画册，宣传海报、X展架、宣传折页等形象物料。'
            },
            {
              title:'装修支持',
              enTitle:'Decoration support',
              content:'提供标准门店形象设计方案，提供模块物料支持，装修费用补贴。'
            },
            {
              title:'运营指导支持',
              enTitle:'Operational guidance support',
              content:'整合优势资源、公司化运营指导；公司长期聘请专业咨询公司进行专家式指导培训，助力经销商实现盈利和持续发展。'
            },
            {
              title:'品牌广告支持',
              enTitle:'Brand advertising support',
              content:'公司统一品牌宣传推广，公司常年在各类大众媒体投放广告，并据市场情况投放当地区域宣传广告。'
            },
            {
              title:'宣传物料支持',
              enTitle:'Promotional material support',
              content:'免费提供常规广告宣传及促销物料等。'
            },
            {
              title:'管理培训支持',
              enTitle:'Management training support',
              content:'全方位保姆式终端培训，从产品知识、应用知识、营销知识、店面管理、终端导购技巧、技术安装指导、施工指导，到建立售后服务体系等，公司会有技术人员上门指导，提供技术咨询服务。'
            },
            {
              title:'技术支持',
              enTitle:'Technical support',
              content:'提供技术方案资料，免费培训产品安装调试人员，对大型工程、家装项目和重要客户，公司免费提供协助甚至直接参与洽谈合作，提供技术、解决方案，不断提高加盟合作商的业务技能，提升合作伙伴的服务水平。'
            },
            {
              title:'销售支持',
              enTitle:'Sales support',
              content:'公司定期安排区域经理下市场指导终端销售，协助合作伙伴开展工作，并有专门工程组协助合作伙伴开发工程客户。同时公司营销团队开发战略合作装饰公司、地产公司、建筑公司等，把客户引流至合作伙伴。'
            }
          ],
          three3:[
            {
              title:'销售返利的支持',
              enTitle:'Sales rebate support',
              content:'完成年度销售目标，可获公司返利2%。'
            },
            {
              title:'门店上样支持',
              enTitle:'Store loading support',
              content:'门店上样最高可获50%支持；新网点展板物料可获50%支持。'
            },
            {
              title:'运营指导支持',
              enTitle:'Operational guidance support',
              content:'进行运营指导，助力经销商实现盈利和持续发展。'
            },
            {
              title:'品牌广告支持',
              enTitle:'Brand advertising support',
              content:'公司常年在各类大众媒体投放广告，并有针对性进行区域性投放。'
            },
            {
              title:'宣传物料支持',
              enTitle:'Promotional material support',
              content:'免费提供常规广告宣传及促销物料等。'
            },
            {
              title:'管理培训支持',
              enTitle:'Management training support',
              content:'全方位终端培训。'
            }
          ],
          progress:'',
          progress1:[
            {
              title:'加盟洽谈',
              icon:'static/img/joinIcon/24-03.png',
              range:'01'
            },
            {
              title:'提交资料',
              icon:'static/img/joinIcon/25-03.png',
              range:'02'
            },
            {
              title:'资质审核',
              icon:'static/img/joinIcon/26-03.png',
              range:'03'
            },
            {
              title:'签订经销商合同',
              icon:'static/img/joinIcon/27-03.png',
              range:'04'
            },
            {
              title:'交付订金',
              icon:'static/img/joinIcon/28-03.png',
              range:'05'
            },
            {
              title:'店面设计',
              icon:'static/img/joinIcon/29-03.png',
              range:'06'
            },
            {
              title:'经营培训',
              icon:'static/img/joinIcon/30-03.png',
              range:'07'
            },
            {
              title:'店面装修',
              icon:'static/img/joinIcon/31-03.png',
              range:'08'
            },
            {
              title:'完工验收',
              icon:'static/img/joinIcon/24-03.png',
              range:'09'
            },
            {
              title:'培训和试运营',
              icon:'static/img/joinIcon/25-03.png',
              range:'10'
            },
            {
              title:'正式营业',
              icon:'static/img/joinIcon/26-03.png',
              range:'11'
            }
          ],
          progress2:[
            {
              title:'合作咨询',
              icon:'static/img/joinIcon/26-03.png',
              range:'01'
            },
            {
              title:'商务洽谈',
              icon:'static/img/joinIcon/27-03.png',
              range:'02'
            },
            {
              title:'加盟申请',
              icon:'static/img/joinIcon/28-03.png',
              range:'03'
            },
            {
              title:'资质审核',
              icon:'static/img/joinIcon/29-03.png',
              range:'04'
            },
            {
              title:'签订合同',
              icon:'static/img/joinIcon/30-03.png',
              range:'05'
            },
            {
              title:'缴纳费用',
              icon:'static/img/joinIcon/31-03.png',
              range:'06'
            },
            {
              title:'店面装修',
              icon:'static/img/joinIcon/26-03.png',
              range:'07'
            },
            {
              title:'总部培训',
              icon:'static/img/joinIcon/27-03.png',
              range:'08'
            },
            {
              title:'正式运营',
              icon:'static/img/joinIcon/28-03.png',
              range:'09'
            }
          ],
          progress3:[
            {
              title:'加盟洽谈',
              icon:'static/img/joinIcon/24-03.png',
              range:'01'
            },
            {
              title:'提交资料',
              icon:'static/img/joinIcon/25-03.png',
              range:'02'
            },
            {
              title:'资质审核',
              icon:'static/img/joinIcon/26-03.png',
              range:'03'
            },
            {
              title:'签订经销商合同',
              icon:'static/img/joinIcon/27-03.png',
              range:'04'
            },
            {
              title:'交付订金',
              icon:'static/img/joinIcon/28-03.png',
              range:'05'
            },
            {
              title:'店面设计',
              icon:'static/img/joinIcon/29-03.png',
              range:'06'
            },
            {
              title:'经营培训',
              icon:'static/img/joinIcon/30-03.png',
              range:'07'
            },
            {
              title:'店面装修',
              icon:'static/img/joinIcon/31-03.png',
              range:'08'
            },
            {
              title:'完工验收',
              icon:'static/img/joinIcon/26-03.png',
              range:'09'
            },
            {
              title:'培训和试运营',
              icon:'static/img/joinIcon/27-03.png',
              range:'10'
            },
            {
              title:'正式营业',
              icon:'static/img/joinIcon/28-03.png',
              range:'11'
            }
          ],
          join1:[
            {
              zhTitle:'智能家居将成大趋势',
              chTitle:'SMART HOME WILL BECOME A MAJOR TREND',
              img:'static/img/whyjoin01.png',
              content:'2012年起，雅洁已着手切入智能家居市场，以最新的科技成果、优势营销资源和全面发展战略搭建智能家居云平台。未来几年，消费者的生活品味会进一步提升，相关产业的利润随之提高，当家居智能化逐步普及时，智能家居行业会飞速发展，智能家居领域前景十分乐观。'
            },
            {
              zhTitle:'自主研发实力强劲',
              chTitle:'INDEPENDENT RESEARCH AND DEVELOPMENT STRENGTH',
              img:'static/img/whyjoin02.png',
              content:'雅洁拥有“广东省智能锁具工程技术研究开发中心”，创建在全国锁具及五金企业中居先进地位的“国家认可认证实验室（CNAS）”，目前已申请国家专利500余项。雅洁致力于智能科技产品的创新与研发，为用户提供更优质的产品、更专业的服务、更先进的体验。'
            },
            {
              zhTitle:'集团全方位支持',
              chTitle:'GROUP SUPPORT',
              img:'static/img/whyjoin03.png',
              content:'基于市场情况和加盟模式，雅洁集团提供运营、管理、广告、物料及客户资源等支持，助力提升经销商提升服务水平和市场竞争力。'
            }
          ],
          join2:[
            {
              zhTitle:'近三十年的传承与发展，品牌文化深厚',
              img:'static/img/youshi01.png',
              chTitle:'INHERITANCE AND DEVELOPMENT IN THE PAST 30 YEARS, PROFOUND BRAND CULTURE',
              content:'以“立足中华，放眼全球，创立名牌，实现腾飞”为经营理念，有良好的品牌意识与广大的品牌知名度。'
            },
            {
              zhTitle:'创新高效的人才与技术',
              img:'static/img/youshi02.png',
              chTitle:'INNOVATIVE AND EFFICIENT TALENT AND TECHNOLOGY',
              content:'创新高效的研发团队与国内外知名专家顾问作人才资源后盾，具备长期可持续发展能力。在业界，曾打造出了“改变行业100把锁”的传奇。'
            },
            {
              zhTitle:'权威认证，管理标准化',
              img:'static/img/youshi03.png',
              chTitle:'AUTHORITATIVE CERTIFICATION, MANAGEMENT STANDARDIZATION',
              content:'业内唯一同时获得ISO9001质量管理体系、ISO14001环境管理体系、OHSAS18001 职业健康安全管理体系三体系认证合一运行的企业，并且智能锁产品通过了中国公安部MA认证、欧洲CE认证和美国FCC认证，产品研发生产管理高度标准化。'
            },
            {
              zhTitle:'终端全覆盖，市场资源广阔',
              img:'static/img/youshi04.png',
              chTitle:'FULL COVERAGE OF TERMINALS, BROAD MARKET RESOURCES',
              content:'销售网络覆盖全国80%的地区，全国专卖店近两千家。自主品牌远销欧洲、北美、中东和东南亚等50多个国家和地区。同时已建立了完善的售后服务体系，“智能锁产品身份卡”让用户尊享2年保修、终身维护的服务。'
            }
          ],
          condition:[
            {
              title:'认同雅洁公司的经验理念、管理模式、品牌文化',
              mes1:[],
              mes2:[]
            },
            {
              title:'较好的商业信誉和有志开拓新事业的个人或企业',
              mes1:[],
              mes2:[]
            },
            {
              title:'有一定的终端市场营销与服务经验',
              mes1:['经营过终端店面，服务过终端市场','建材行业、家电行业、安防行业、家具行业等服务经验'],
              mes2:[]
            },
            {
              title:'拥有售后销售服务团队',
              mes1:[],
              mes2:[
                {
                  label:'体验专区：',
                  text:'至少1个技术专员，1个销售，1个售后，其中销售与售后可以共用先有服务团队'
                },
                {
                  label:'体验馆：',
                  text:'2个以上技术专员，2个以上销售，2个以上售后，其中销售与售后可以共用先有服务团队'
                },
                {
                  label:'',
                  text:'设计公司、定制家具、物业、地产公司等渠道拓展专员'
                }
              ]
            },
            {
              title:'有相应行业客户或项目资源',
              mes1:['设计装修公司资源','地产公司资源','政府或相关协会资源','建材类合作资源','物业服务资源'],
              mes2:[]
            },
            {
              title:'准备或拟定了符合总部要求的体验专区经营场所',
              mes1:[],
              mes2:[
                {
                  label:'体验专区：',
                  text:'15㎡以上的体验及展示区域'
                },
                {
                  label:'体验馆：',
                  text:'60㎡以上的体验及展示区域'
                }
              ]
            },
          ],
          joinForm:{
            name:'',
            phone:'',
            address:'',
            desc:''
          },
          swiper12:''
        }
      },
      methods:{
        btn13(i){
          this.pagin13 = i;
          this.swiper13.slideTo(i);
        },
        btn01(i){
          const that = this;
          $("html,body").animate({scrollTop:2500}, 500);
          // $('.wrapButton>ul>li').removeClass('sel');
          // $('.wrapButton>ul>li').eq(i).addClass('sel');
          this.detailIdx = i+1;
          // 获取加盟支持
          this.$api.axiosPost('/index/Join/support',0,{
            type:that.detailIdx
          },function (data) {
            that.three1 = data.data.data;
          });
          // 获取加盟流程
          this.$api.axiosPost('/index/Join/jmimg',0,{
            type:that.detailIdx
          },function (data) {
            that.progress1 = data.data.data;
          })
          if((i+1) == 3){
            // 获取加盟条件
            this.$api.axiosPost('/index/Join/requirement ',0,{},function (data) {
              that.condition = data.data.data;
            })
          }
        },
        btnForm(){
          const that = this;
          let formData = this.joinForm;
          var province = $('.province input').val();
          var city = $('.city input').val();
          var district = $('.district input').val();
          formData.address = province+city+district;
          // console.log(formData.address)
          if(formData.name == ''){
            that.$alert('姓名不能为空','温馨提示', {
              confirmButtonText: '确定',
              showClose:false
            });
          }else if(formData.phone == ''){
            that.$alert('电话不能为空','温馨提示', {
              confirmButtonText: '确定',
              showClose:false
            });
          }else if(formData.address == ''){
            that.$alert('地址不能为空','温馨提示', {
              confirmButtonText: '确定',
              showClose:false
            });
          }else{
            formData.address = province+'省'+city+'市'+district;
            // console.log(formData);
            formData.type = this.detailIdx;
            // 提交表单
            this.$api.axiosPost('http://archie.web.hengdikeji.com/index/join/postJoinOnline',0,formData,function (data) {
              // console.log(data);
              if(data.data.status == 1){
                that.$alert(data.data.msg,'温馨提示', {
                  confirmButtonText: '确定',
                  showClose:false
                });
              }else{
                that.$alert(data.data.msg,'温馨提示', {
                  confirmButtonText: '确定',
                  showClose:false
                });
              }
            })
          }
        },
        index1Change:function (i) {
          this.index1 = i;
          this.swiper12.slideTo(i);
        },
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
          //获取区
          _this.district = '';
          _this.$api.axiosGet('/index/service/getRegion/type/3/id/'+_this.city,{},function (data) {
            var list = [];
            for(var i=0; i<data.data.list.length; i++)
            {
              list.push({
                label:data.data.list[i].name,
                value:data.data.list[i].id
              })
            }
            _this.options3 = list;
          });
          _this.$api.axiosGet('/index/service/getNetwork/province/' + _this.province+'/city/'+_this.city, {}, function (data) {
            console.log(data)
            console.log(_this.city);
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
      },
      mounted(){
        const that = this;
        $('#inviteJoin .nav01 li a').on('click',function () {
          $('#inviteJoin .nav01 li').removeClass('sel');
          $(this).parent('li').addClass('sel');
        });
        $('.zhankai').on('click',function () {
          if($(this).hasClass('sel')){
            $(this).removeClass('sel');
            $('.nav01').removeClass('sel');
          }else{
            $(this).addClass('sel');
            $('.nav01').addClass('sel');
          }
        });
        var id = this.$router.history.current.query.id;
        console.log(id);
        if(id == undefined){
          this.detailIdx = 1;
          // 获取加盟支持
          this.$api.axiosPost('/index/Join/support',0,{
            type:that.detailIdx
          },function (data) {
            // console.log(data);
            that.three1 = data.data.data;
          })
          // 获取加盟流程
          this.$api.axiosPost('/index/Join/jmimg',0,{
            type:that.detailIdx
          },function (data) {
            // console.log(data);
            that.progress1 = data.data.data;
          })
        }else if(id == 3){
          this.detailIdx = id;
          // 获取加盟支持
          this.$api.axiosPost('/index/Join/support',0,{
            type:that.detailIdx
          },function (data) {
            // console.log(data);
            that.three1 = data.data.data;
          });
          // 获取加盟流程
          this.$api.axiosPost('/index/Join/jmimg',0,{
            type:that.detailIdx
          },function (data) {
            // console.log(data);
            that.progress1 = data.data.data;
          });
          // 获取加盟条件
          this.$api.axiosPost('/index/Join/requirement ',0,{},function (data) {
            that.condition = data.data.data;
          })
        }else{
          this.detailIdx = id;
          // 获取加盟支持
          this.$api.axiosPost('/index/Join/support',0,{
            type:that.detailIdx
          },function (data) {
            // console.log(data);
            that.three1 = data.data.data;
          });
          // 获取加盟流程
          this.$api.axiosPost('/index/Join/jmimg',0,{
            type:that.detailIdx
          },function (data) {
            // console.log(data);
            that.progress1 = data.data.data;
          })
        }
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
        // var swiper11 = new Swiper('.swiper11',{
        //   // pagination: '.swiper-pagination',
        //   // paginationClickable: true,
        //   direction: 'vertical',
        //   pagination:'.pagin11'
        // });
          this.swiper12 = new Swiper('.swiper12',{
            effect : 'flip',
            speed:1000,
            prevButton:'.prev12',
            nextButton:'.next12',
            pagination:'.pagin12',
            onSlideChangeStart: function(swiper){
              that.index1 = swiper.activeIndex;
            }
          });
        this.swiper13 = new Swiper('.swiper13',{
          autoplay:2500,
          speed:800,
          prevButton:'.prev13',
          nextButton:'.next13',
          onInit:function(swiper){
            $('.swiper13').on('mouseenter',function () {
              swiper.stopAutoplay();
            })
            $('.swiper13').on('mouseleave',function () {
              swiper.startAutoplay();
            })
          },
          onSlideChangeStart: function(swiper){
            that.pagin13 = swiper.activeIndex;
          }
        });
        var swiper14 = new Swiper('.swiper14',{
          slidesPerView:4,
          spaceBetween:15,
          prevButton:'.prev14',
          nextButton:'.next14',
          observer:true
        });
        var swiper17 = new Swiper('.swiper17',{
          slidesPerView:4,
          spaceBetween:15,
          prevButton:'.prev13',
          nextButton:'.next13',
        })
        // 获取品牌优势接口
        this.$api.axiosPost('/index/Join/brand',0,{},function (data) {
          // console.log(data);
          that.join1 = data.data.data;
        });
        // 获取加盟优势接口
        this.$api.axiosPost('/index/Join/jiameng',0,{},function (data) {
          // console.log(data);
          that.join2 = data.data.data;
        });
      }
    }
</script>

<style scoped>
@import "../../static/css/inviteJoin.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
