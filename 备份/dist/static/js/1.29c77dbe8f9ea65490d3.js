webpackJsonp([1],{AAcC:function(t,s){},X9Xh:function(t,s){},coGm:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"aboutUsInnovate",data:function(){return{videoStatus:!1,videoList:[{path:"http://player.youku.com/embed/XMzcwODE1MDE5Mg==",title:"雅洁智能锁，开启智慧生活",desc:"雅洁智能锁，开启智慧生活"},{path:"http://player.youku.com/embed/XMzcwODE2OTg4NA==",title:"雅洁智能锁，开启智慧生活",desc:"雅洁智能锁，开启智慧生活"},{path:"http://player.youku.com/embed/XMzcwODE3NjA0NA==",title:"雅洁智能锁，开启智慧生活",desc:"雅洁智能锁，开启智慧生活"}],videoPath:"",videoTitle:"",swiperHome03:""}},methods:{videobofang:function(t,s){this.videoPath=t,this.videoTitle=this.videoList[s].title,this.videoStatus=!0}},mounted:function(){var t=this;this.$api.axiosGet("/index/index/getTechnology/location/1",{},function(s){t.videoList=s.data.technology;s.data.technology.length;setTimeout(function(){new Swiper(".swiperHome03",{slidesPerView:3,spaceBetween:15,observer:!0})},50)})}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"aboutUsInnovate"}},[i("div",{staticClass:"list2 l3"},[t._m(0),t._v(" "),i("div",{staticClass:"cont"},[i("div",{staticClass:"swiper-container swiperHome03"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.videoList,function(s,e){return i("div",{key:e,staticClass:"swiper-slide",staticStyle:{cursor:"pointer"},on:{click:function(i){t.videobofang(s.path,e)}}},[i("div",[i("div",{staticClass:"st03-top"},[i("img",{attrs:{src:t.$baseLink+s.pic,alt:""}}),t._v(" "),t._m(1,!0)]),t._v(" "),i("div",{staticClass:"st03-bottom"},[i("div",{staticClass:"st03-wrap"},[i("div",{staticClass:"st03-title textEllipsis"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"st03-desc textEllipsis"},[t._v(t._s(s.desc))])]),t._v(" "),i("div",{staticClass:"jiantou"})])])])}))])])]),t._v(" "),t.videoStatus?i("div",{staticClass:"videoWrap"},[i("div",[i("div",{staticClass:"videoTitle"},[t._v(t._s(t.videoTitle))]),t._v(" "),i("div",{staticClass:"wrap"},[i("iframe",{attrs:{height:"498",allowfullscreen:"true",allowtransparency:"true",width:"760",src:t.videoPath,frameborder:"0"}}),t._v(" "),i("div",{staticClass:"close01",on:{click:function(s){t.videoStatus=!1}}})])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"title-1"},[s("span",{staticClass:"color"},[this._v("创新")]),s("span",[this._v("技术")])]),this._v(" "),s("div",{staticClass:"title-2"},[s("span",[this._v("INNOVATIVE TECHNOLOGY")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"st03-topMask"},[s("button",{staticClass:"bofang"})])}]};var o=i("vSla")(e,a,!1,function(t){i("X9Xh"),i("AAcC")},"data-v-6e450d03",null);s.default=o.exports}});
//# sourceMappingURL=1.29c77dbe8f9ea65490d3.js.map