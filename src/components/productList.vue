<template>
    <div id="productList">
      <div class="list1">
        <div class="l1-1">
          <span>门锁</span>
        </div>
        <div class="l1-2">
          <div class="tags">
            <span :class="{sel:index == 0}" v-for="(item,index) in tags" @click="tagsBtn(index)" :key="index">{{item}}</span>
          </div>
          <div class="search">
            <div class="input">
              <input type="text" placeholder="请输入搜索内容">
            </div>
            <div class="button">
              <button>搜索</button>
            </div>
          </div>
        </div>
      </div>
      <div class="list2 clearfloat">
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img13.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img14.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img15.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img16.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img17.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img18.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img15.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img16.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img17.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
        <div class="l2-wrap">
          <div class="wrapImg">
            <div>
              <img src="../../static/img/img18.png" alt="">
            </div>
            <button class="search"></button>
          </div>
          <div class="wrapText">
            <div class="text-1">雅洁AS1031移门锁</div>
            <div class="text-2">适用范围：房间门、卫浴门、型材移门</div>
            <div class="text-3"></div>
          </div>
        </div>
      </div>
      <div class="list3">
        <img src="../../static/img/nomore01.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      name: "productList",
      data(){
        return {
          tags:['全部','插芯门锁','铜锁系列','防盗门锁','其他门锁','门锁配件']
        }
      },
      methods:{
        tagsBtn(i){
          $('.tags span').removeClass('sel');
          $('.tags span').eq(i).addClass('sel');
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/productList.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
