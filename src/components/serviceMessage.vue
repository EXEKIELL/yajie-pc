<template>
  <div id="serviceMessage">
    <div class="popUp">
      <div class="popUpWrap">
        <div class="wrapList">
          <div class="list-left">
            <img src="../../static/img/message01.png" alt="">
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
                  <!--<input type="text" >-->
                  <div class="docs-methods">
                    <form class="form-inline">
                      <div id="distpicker">
                        <div class="form-group">
                          <div style="position: relative;">
                            <!--<input id="city-picker3" class="form-control" readonly type="text" placeholder="请选择地区"  data-toggle="city-picker">-->
                            <input type="text" placeholder="请输入地址" v-model="formData.address">
                          </div>
                        </div>
                        <!--<div class="form-group">-->
                        <!--<button class="btn btn-warning" id="reset" type="button">重置</button>-->
                        <!--<button class="btn btn-danger" id="destroy" type="button">确定</button>-->
                        <!--</div>-->
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="data-1 data-3">
                <div class="d1-1">
                  <span class="name01">内容</span>
                  <input type="text" placeholder="请输入内容" v-model="formData.content">
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
            address:'',
            content:'',
            email:''
          },
          $citypicker3:null
        }
      },
      watch:{
        '$route':function (to, from) {
          // console.log(to,from)
        }
      },
      beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        // console.log('2');
        this.$destroy();
        // console.log('3')
        next();
      },
      created(){
        setTimeout(function () {
          var $citypicker3 = $('#city-picker3');
        },20)
      },
      mounted:function () {
        const that = this;
        // console.log(1);

        'use strict';
        that.$citypicker3 = $('#city-picker3');
        // console.log(that.$citypicker3)


      },
      methods:{
        selInput(e){
          // console.log(e);
          $('.cir').removeClass('sel');
          $(e.target).parent('.cir').addClass('sel');
        },
        updata(e){
          // console.log(e.target.files);
          this.formData.upload = e.target.files[0].name;
          // console.log(this.formData.upload);
        },
        btn(){
          // var provice = $('.city-picker-span > .title > span').eq(0).text();
          // var city = $('.city-picker-span > .title > span').eq(1).text();
          // var area = $('.city-picker-span > .title > span').eq(2).text();
          var _this = this;
          // if(provice=='')
          // {
          //   _this.$alert('请选择省','温馨提示', {
          //       confirmButtonText: '确定',
          //       showClose:false
          //     }
          //   )
          // }else if(city==''){
          //   _this.$alert('请选择市','温馨提示', {
          //       confirmButtonText: '确定',
          //       showClose:false
          //     }
          //   )
          // }else if(area==''){
          //   _this.$alert('请选择区','温馨提示', {
          //       confirmButtonText: '确定',
          //       showClose:false
          //     }
          //   )
          // }else{
          //   // _this.formData.address = provice+' '+city+' '+area;
          //   _this.$api.axiosPost('/index/service/postMessage',0,_this.formData,function (data) {
          //     if(data.data.status==0)
          //     {
          //       _this.$alert(data.data.msg,'温馨提示', {
          //           confirmButtonText: '确定',
          //           showClose:false
          //         }
          //       )
          //     }else{
          //       _this.$alert(data.data.msg,'温馨提示', {
          //           confirmButtonText: '确定',
          //           showClose:false
          //         }
          //       )
          //     }
          //   });
          // }
          _this.$api.axiosPost('/index/service/postMessage',0,_this.formData,function (data) {
            if(data.data.status==0)
            {
              _this.$alert(data.data.msg,'温馨提示', {
                  confirmButtonText: '确定',
                  showClose:false
                }
              )
            }else{
              _this.$alert(data.data.msg,'温馨提示', {
                  confirmButtonText: '确定',
                  showClose:false
                }
              )
            }
          });

        },
      }
    }
</script>

<style scoped>

@import "../../static/css/serviceMessage.css";

</style>
<style>

  @import "../../static/css/public.css";
  .el-button--primary{
    background-color: #604775!important;
    border-color: #604775!important;
  }
  .el-button--primary:hover{
    background-color: #604775!important;
    border-color: #604775!important;
  }
  .el-message-box__title{
    text-align: center;
  }
  .el-message-box__content{
    text-align: center;
  }
  .city-picker-input {
    opacity: 0 !important;
    top: -9999px;
    left: -9999px;
    position: absolute;
  }

  .city-picker-span {
    position: relative;
    display: block;
    outline: 0;
    width: 100% !important;
    color: #ccc;
    font-size: 16px;
    cursor: pointer;
  }

  .city-picker-span > .placeholder {
    color: #aaa;
  }

  .city-picker-span > .arrow {
    position: absolute;
    top: 50%;
    right: 8px;
    width: 10px;
    margin-top: -3px;
    height: 5px;
  }

  .city-picker-span.focus,
  .city-picker-span.open {
    border-bottom-color: #604775;
  }

  .city-picker-span.open > .arrow {
    background-position: -10px -10px;
  }

  .city-picker-span > .title > span {
    color: #333;
    padding: 5px;
    border-radius: 3px;
  }

  .city-picker-span > .title > span:hover {
    background-color: #f1f8ff;
  }

  .city-picker-dropdown {
    position: absolute;
    width: 315px;
    left: -9999px;
    top: -9999px;
    outline: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    z-index: 999999;
    display: none;
    min-width: 330px;
    margin-bottom: 20px;
  }

  .city-select-wrap {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  }

  .city-select-tab {
    border-bottom: 1px solid #ccc;
    background: #f0f0f0;
    font-size: 13px;
  }

  .city-select-tab > a {
    display: inline-block;
    padding: 8px 22px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid transparent;
    color: #4D4D4D;
    text-align: center;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: -1px;
  }

  .city-select-tab > a.active {
    background: #fff;
    border-bottom: 1px solid #fff;
    color: #604775;
  }

  .city-select-tab > a:first-child {
    border-left: none;
  }

  .city-select-tab > a:last-child.active {
    border-right: 1px solid #ccc;
  }

  .city-select-content {
    width: 100%;
    min-height: 10px;
    background-color: #fff;
    padding: 10px 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }

  .city-select {
    font-size: 13px;
  }

  .city-select dl {
    line-height: 2;
    clear: both;
    padding: 3px 0;
    margin: 0;
  }

  .city-select dt {
    position: absolute;
    width: 2.5em;
    font-weight: 500;
    text-align: right;
    line-height: 2;
  }

  .city-select dd {
    margin-left: 0;
    line-height: 2;
  }

  .city-select.province dd {
    margin-left: 3em;
  }

  .city-select a {
    display: inline-block;
    padding: 0 10px;
    outline: 0;
    text-decoration: none;
    white-space: nowrap;
    margin-right: 2px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
  }

  .city-select a:hover,
  .city-select a:focus {
    background-color: #f1f8ff;
    border-radius: 2px;
    color: #604775;
  }

  .city-select a.active {
    background-color: #604775;
    color: #fff;
    border-radius: 2px;
  }
</style>
