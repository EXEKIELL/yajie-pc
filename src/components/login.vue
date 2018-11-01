<template>
    <div id="login">
      <div class="loginWrap">
        <div class="loginImg">
          <img src="../../static/img/img45.png" alt="">
        </div>
        <div class="loginMes">
          <div class="mesWrap">
            <div>
              <div class="logo">
                <img src="../../static/img/logo02.png" alt="">
              </div>
              <div class="title-1">登录中心</div>
              <div class="inputWrap">
                <div class="inputTitle">账号 <span>/ account</span></div>
                <div class="input">
                  <input type="text" placeholder="请输入您的账号" v-model="formData.username">
                </div>
              </div>
              <div class="inputWrap">
                <div class="inputTitle">密码 <span>/ password</span></div>
                <div class="input">
                  <input type="password" placeholder="请输入您的密码" v-model="formData.password">
                </div>
              </div>
              <div class="btn">
                <button @click="btn">登 录</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fanhui" @click="goback">返 回</div>
    </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          formData:{
            username:'',
            password:''
          }
        }
      },
      methods:{
        btn:function () {
          const that = this;
          var formData = this.formData;
          if(formData.username == ''){
            this.$alert('请输入账号','温馨提示', {
              confirmButtonText: '确定',
              showClose:false
            });
          }else if(formData.password == ''){
            this.$alert('请输入密码','温馨提示', {
              confirmButtonText: '确定',
              showClose:false
            });
          }else{
            // console.log(formData);
            this.$api.axiosPost('/index/login/login',0,formData,function (data) {
              console.log(data);
              if(data.data.status == 200){
                localStorage.setItem('token',data.data.token);
                var path = sessionStorage.getItem('path');
                that.$router.push(path);
              }else if(data.data.status == 0){
                that.$alert(data.data.msg,'温馨提示',{
                  confirmButtonText: '确定',
                  showClose:false
                })
              }
            })
          }
        },
        goback(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/login.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
