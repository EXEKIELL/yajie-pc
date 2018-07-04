<template>
  <div id="serviceMessage">
    <div class="popUp">
      <div class="popUpWrap">
        <div class="wrapList">
          <div class="list-left">
            <img src="../../static/img/bj10.png" alt="">
          </div>
          <div class="list-right">
            <div>
              <div class="data-1">
                <div class="d1-1">
                  <span class="name01">姓名</span>
                  <input type="text" placeholder="请输入姓名" v-model="formData.name">
                </div>
                <div class="d1-1">
                  <span class="name01">邮箱</span>
                  <input type="text" placeholder="请输入邮箱" v-model="formData.email">
                </div>
                <!--<div class="d1-2">-->
                  <!--<span class="name01">性别</span>-->
                  <!--<div class="select-1">-->
                    <!--<div class="cir">-->
                      <!--<input type="radio" @click="selInput" name="sex" value="男士" v-model="formData.sex">-->
                    <!--</div>-->
                    <!--<div class="text-1 name01">男士</div>-->
                  <!--</div>-->
                  <!--<div class="select-1">-->
                    <!--<div class="cir">-->
                      <!--<input type="radio" @click="selInput" name="sex" value="女士" v-model="formData.sex">-->
                    <!--</div>-->
                    <!--<div class="text-1 name01">女士</div>-->
                  <!--</div>-->
                <!--</div>-->
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
                  <span class="name01">内容</span>
                  <input type="text" placeholder="请输入内容" v-model="formData.desc">
                </div>
              </div>
              <!--<div class="data-4">-->
                <!--<div class="d4-text name01">上传附件</div>-->
                <!--<div class="d4-upload">-->
                  <!--<div class="showBtn">选择文件-->
                    <!--<input class="file" type="file" @change="updata">-->
                  <!--</div>-->
                  <!--<div class="showData">-->
                    <!--<input class="text" disabled type="text" v-model="formData.upload">-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
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
      name: "serviceMessage",
      data(){
        return {
          formData:{
            name:'',
            phone:'',
            addr:'',
            desc:'',
            email:'',
            upload:''
          }
        }
      },
      methods:{
        selInput(e){
          console.log(e);
          $('.cir').removeClass('sel');
          $(e.target).parent('.cir').addClass('sel');
        },
        updata(e){
          console.log(e.target.files);
          this.formData.upload = e.target.files[0].name;
          console.log(this.formData.upload);
        },
        btn(){
          console.log(this.formData)
        },
      }
    }
</script>

<style scoped>
@import "../../static/css/serviceMessage.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
