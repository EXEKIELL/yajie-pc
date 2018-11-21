<template>
  <div id="inviteDetail" v-if="">
    <div class="list1 clearfloat">
      <div class="l1-title floatl">
        <div class="l1-title1">国内少数拥有指纹锁核心技术</div>
        <div class="l1-title2">雅洁五金，80道工序全数合格检验，国家安防认真，超强精准识别。</div>
      </div>
      <div class="l1-search floatr" style="display: none;">
        <form action="search01" class="clearfloat">
          <div class="input floatl">
            <input type="text" placeholder="输入关键字">
          </div>
          <div class="btn floatl">
            <button></button>
          </div>
        </form>
      </div>
      <div class="l1-return" @click="goBack">
        <span class="icon"></span><span>返回</span>
      </div>
    </div>
    <div class="list2">
      <div>
        <div class="l2-info">
          <div class="info-1">
            <span>{{jobData[0].name}}</span><span class="small">{{jobData[0].ename}}</span>
          </div>
          <div class="info-2 clearfloat">
            <div class="i2-1">
              <i></i><span>{{jobData[0].num}}人</span>
            </div>
            <div class="i2-2">
              <i></i><span>{{jobData[0].address}}</span>
            </div>
            <div class="i2-3">
              <i></i><span>{{jobData[0].time|time04}}</span>
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
          <li v-html="jobData[0].desc"></li>
          <!--<li>1、深入了解互联网行业，对行业趋势和发展有自己的见解，收集、整理及分析行业信息和市场趋势；</li>-->
          <!--<li>2、负责网站整体运营、推广运维及日常运营管理工作，制定网站运营策略、方案和计划并执行；</li>-->
          <!--<li>3、负责业务运营团队营销产品的创新与策划，基于对用户和产品的了解，提出活动策划及运营的方案，并组织实施；</li>-->
          <!--<li>4、通过数据分析，对市场线上线下活动进行实施并跟踪效果；</li>-->
          <!--<li>5、根据公司现有数据资源、品牌资源及商品资源，制定有效的多方位营销策略，提升公司品牌整体竞争力；</li>-->
        </ul>
      </div>
      <div class="l3-2">
        <img :src="$baseLink+jobData[0].dpic" alt="">
      </div>
    </div>
    <div class="list4">
      <div class="l3-2">
        <img :src="$baseLink+jobData[0].rpic" alt="">
      </div>
      <div class="l3-1">
        <div class="l31-title">任职要求：</div>
        <ul>
          <li v-html="jobData[0].require"></li>
          <!--<li>1、3年以上的互联网行业从业经验，1年以上互联网运营团队管理经验；</li>-->
          <!--<li>2、了解互联网各类产品，有成功的网站策划、推广和管理个案，熟悉电商网站的整体运作；</li>-->
          <!--<li>3、熟悉运营发展趋势，熟悉基于数据分析的运营管理模式和工作流程；</li>-->
          <!--<li>4、具有业务运营把控能力,出色的商业判断力,敏锐的商业触觉；对运营，营销产品敏感，善于数据分析、归纳总结；</li>-->
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
                <img src="../../static/img/img47.jpg" alt="">
                <div class="img-bottom"></div>
              </div>
              <div class="slide-info">
                <div class="info-title">薪酬福利：</div>
                <ul>
                  <li v-html="jobData[0].pay"></li>
                  <!--<li>1、薪资8-12万，薪资构成=基本工资+绩效工资+提成+全勤奖+工龄奖+活动奖励+年终奖</li>-->
                  <!--<li>2、享有带薪休假、婚假、产假、生日礼物等各项福利；</li>-->
                  <!--<li>3、晋升空间：公司提供完善的员工职业生涯规划和晋升机制，定期公平竞聘。</li>-->
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-img">
                <img src="../../static/img/img47.jpg" alt="">
                <div class="img-bottom"></div>
              </div>
              <div class="slide-info">
                <div class="info-title">薪酬福利：</div>
                <ul>
                  <li v-html="jobData[0].pay"></li>
                  <!--<li>1、薪资8-12万，薪资构成=基本工资+绩效工资+提成+全勤奖+工龄奖+活动奖励+年终奖</li>-->
                  <!--<li>2、享有带薪休假、婚假、产假、生日礼物等各项福利；</li>-->
                  <!--<li>3、晋升空间：公司提供完善的员工职业生涯规划和晋升机制，定期公平竞聘。</li>-->
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
                  <input type="text" placeholder="请输入地区" v-model="formData.address">
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
                  <div class="showBtn">
                    <el-upload
                      class="upload-demo"
                      :action="action"
                      :on-change="handleChange"
                      name="file"
                      :on-success="upload01"
                      :file-list="fileList3">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                  <div class="showData">
                    <input class="text" disabled type="text" v-model="formData.file.name">
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
          jobData:[1],
          id:0,
          action:this.$baseLink+'/index/join/fileUpload' ,
          formData:{
            name:'',
            phone:'',
            address:'',
            desc:'',
            sex:'',
            file:''
          },
          fileList3:[]
        }
      },
      filters:{
        time04(val){
          var Y,M,D,month;
          var date = new Date(val * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          Y = date.getFullYear();
          M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
          D = date.getDate();
          return Y+'-'+M+'-'+D;
        }
      },
      methods:{
        close(){
          this.popUp01 = false;
        },
        updata(e){
          // console.log(e.target.files);
          // this.formData.upload = e.target.files[0].name;
          // console.log(this.formData.upload);
          // var formData1 = new FormData();
          // // this.formData.upload = e.target.files[0];
          // formData1.file = e.target.files[0];
          // this.formData.upload = formData1;
          // console.log(formData1);
          // $('#fileForm').submit();
        },
        handleChange(file, fileList) {
          this.fileList3 = fileList.slice(-3);
        },
        btn(){
          const that = this;
          // console.log(this.formData);
          var formData = this.formData;
          if(formData.sex == '男士'){
           formData.sex = 1;
          }else if(formData.sex == '女士'){
            formData.sex = 0;
          }
          if(formData.file == ''){

          }else{
            // console.log(formData);
            this.$api.axiosPost('/index/join/postApply',0,formData,function (data) {
              // console.log(data);
              that.$alert(data.data.msg,'温馨提示', {
                confirmButtonText: '确定',
                showClose:false
              });
            })
          }
        },
        upload01(res,file,fileList){
          // console.log(res);
          this.formData.file = res.path;
        },
        selInput(e){
          // console.log(e);
          $('.cir').removeClass('sel');
          $(e.target).parent('.cir').addClass('sel');
        },
        showPop(){
          this.popUp01 = true;
        },
        goBack(){
          // console.log(window)
          window.history.go(-1);
        }
      },
      mounted(){
        const _this = this;
        this.id = this.$router.history.current.query.id;
        // console.log(this.id);
        // 获取招聘信息
        this.$api.axiosGet('/index/join/getJob/location/1/id/'+_this.id,{},function (data) {
          // console.log(data);
          _this.jobData = data.data.job;
          setTimeout(function () {
            var swiper09 = new Swiper('.swiper09',{
              prevButton:'.prev09',
              nextButton:'.next09',
              observer:true
            });
          },100);
        });
      }
    }
</script>

<style scoped>
@import "../../static/css/inviteDetail.css";
</style>
<style>
  @import "../../static/css/public.css";
  #inviteDetail .el-button--small, .el-button--small.is-round{
    padding: 13px 15px;
    width: 100%;
    background-color: #604775;
  }
  #inviteDetail .el-upload{
    width: 100%;
  }
  #inviteDetail .el-upload-list{
    position: absolute;
    right: -150px;
    top: 0;
  }
  #inviteDetail .el-upload__tip{
    display: none;
  }
</style>
