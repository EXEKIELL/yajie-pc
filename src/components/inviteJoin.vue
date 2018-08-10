<template>
  <div id="inviteJoin">
    <div class="banner">
      <img src="../../static/img/banner07.png" alt="">
    </div>
    <div class="list2">
      <!--<img src="../../static/img/bj11.png" alt="">-->
      <div class="swiper-container swiper11">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide11">
            <div>
              <div class="title02">
                <img src="../../static/img/title05.png" alt="">
              </div>
              <div class="swiper-container swiper12">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slide12" v-for="(item,index) in join1" :key="index">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">{{index<10?'0'+(index+1):index}}</div>
                        <div class="xian"></div>
                        <div v-if="join1">
                          <div class="totalPage">{{join1.length<10?'0'+join1.length:join1.length}}</div>
                        </div>
                      </div>
                      <div class="s12Img">
                        <img :src="item.img" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">{{item.chTitle}}</div>
                        <div class="cnTitle">{{item.zhTitle}}</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>{{item.content}}</p>
                    </div>
                  </div>
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                </div>
              </div>
              <div class="swiper-button-prev prev12"></div>
              <div class="swiper-button-next next12"></div>
              <div class="swiper-pagination pagin12"></div>
            </div>
          </div>
          <div class="swiper-slide slide11">
            <div>
              <div class="title02">
                <img src="../../static/img/title05.png" alt="">
              </div>
              <div class="swiper-container swiper12">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                </div>
              </div>
              <div class="swiper-button-prev prev12"></div>
              <div class="swiper-button-next next12"></div>
              <div class="swiper-pagination pagin12"></div>
            </div>
          </div>
          <div class="swiper-slide slide11">
            <div>
              <div class="title02">
                <img src="../../static/img/title05.png" alt="">
              </div>
              <div class="swiper-container swiper12">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                </div>
              </div>
              <div class="swiper-button-prev prev12"></div>
              <div class="swiper-button-next next12"></div>
              <div class="swiper-pagination pagin12"></div>
            </div>
          </div>
          <div class="swiper-slide slide11">
            <div>
              <div class="title02">
                <img src="../../static/img/title05.png" alt="">
              </div>
              <div class="swiper-container swiper12">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                </div>
              </div>
              <div class="swiper-button-prev prev12"></div>
              <div class="swiper-button-next next12"></div>
              <div class="swiper-pagination pagin12"></div>
            </div>
          </div>
          <div class="swiper-slide slide11">
            <div>
              <div class="title02">
                <img src="../../static/img/title05.png" alt="">
              </div>
              <div class="swiper-container swiper12">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <div class="swiper-slide slide12">
                    <!--<img src="../../static/img/lunbo01.png" alt="">-->
                    <div class="s12-1">
                      <div class="page12">
                        <div class="currentPage">01</div>
                        <div class="xian"></div>
                        <div class="totalPage">03</div>
                      </div>
                      <div class="s12Img">
                        <img src="../../static/img/img36.png" alt="">
                      </div>
                      <div class="s12Title">
                        <div class="enTitle">CREATE PERMANENT QUALITY</div>
                        <div class="cnTitle">打造恒久精工品质</div>
                      </div>
                    </div>
                    <div class="s12-2">
                      <p>广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，遍及中国市场的旗舰店、专卖店和专柜超过1000家，强大的销售网点覆盖中国90%的地级以上城市。</p>
                    </div>
                  </div>
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                  <!--<div class="swiper-slide slide12">-->
                  <!--<img src="../../static/img/lunbo01.png" alt="">-->
                  <!--</div>-->
                </div>
              </div>
              <div class="swiper-button-prev prev12"></div>
              <div class="swiper-button-next next12"></div>
              <div class="swiper-pagination pagin12"></div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination pagin11"></div>
      </div>
    </div>
    <div class="list3">
      <div class="l3-wrap">
        <div class="l3-title">
          <div class="title-1">雅洁五金四大加盟优势</div>
          <div class="title-2">YAJIE HARDWARE IV JOINING ADVANTAGE</div>
        </div>
        <div class="l3-swiper">
          <div class="swiper-container swiper13">
            <div class="bj01"></div>
            <div class="swiper-wrapper">
              <div class="swiper-slide slide13" v-for="(item,index) in join2" :key="index">
                <div class="slide13-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="slide13-info">
                  <div class="info13-1">
                    <div class="i13-title">{{item.zhTitle}}</div>
                    <div class="i13-title2">{{item.chTitle}}</div>
                  </div>
                  <div class="info13-2">
                    <p>{{item.content}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiperRight">
            <div class="prev13"></div>
            <div class="swiper-container swiper17">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in join2" :key="index">
                  <div class="r1" :class="{sel:pagin13 == index}" @click="btn13(index)">
                    <div>
                      <div class="r1-title">{{item.zhTitle}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="next13"></div>
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
                    <img :src="item.img" alt="">
                    <div class="imgDetail">
                      <p>{{item.content}}</p>
                    </div>
                  </div>
                  <div class="slide14-2">
                    <div class="cirImg">
                      <div><img src="../../static/img/img35.png" alt=""></div>
                    </div>
                    <div class="sl4-wrap">
                      <div class="s4-info1">{{item.title}}</div>
                      <div class="s4-info2">{{item.enTitle}}</div>
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
          <div class="l5-title">
            <img src="../../static/img/title04.png" alt="">
          </div>
          <div class="l5-slide">
            <div class="slideList" v-for="(item,index) in progress1" :key="index">
              <div class="sl1">
                <!--<div class="l-default"></div>-->
                <img :src="item.icon" alt="">
              </div>
              <div class="sl2">
                <img src="../../static/img/icon17.png" alt="">
                <div class="sl2-1">{{item.range}}</div>
                <div class="sl2-2">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--智能安防-->
    <div class="wrap" v-if="detailIdx == 2">
      <div class="list4">
        <div class="l4-wrap">
          <div class="l4-title">
            <img src="../../static/img/title03.png" alt="">
          </div>
          <div class="l4-swiper">
            <div class="swiper-container swiper14">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide14" v-for="(item,index) in three2" :key="index">
                  <div class="slide14-1">
                    <img src="../../static/img/img34.png" alt="">
                    <div class="imgDetail">
                      <p>{{item.content}}</p>
                    </div>
                  </div>
                  <div class="slide14-2">
                    <div class="cirImg">
                      <div><img src="../../static/img/img35.png" alt=""></div>
                    </div>
                    <div class="sl4-wrap">
                      <div class="s4-info1">{{item.title}}</div>
                      <div class="s4-info2">{{item.enTitle}}</div>
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
          <div class="l5-title">
            <img src="../../static/img/title04.png" alt="">
          </div>
          <div class="l5-slide">
            <div class="slideList" v-for="(item,index) in progress2" :key="index">
              <div class="sl1">
                <!--<div class="l-default">ICON</div>-->
                <img :src="item.icon" alt="">
              </div>
              <div class="sl2">
                <img src="../../static/img/icon17.png" alt="">
                <div class="sl2-1">{{item.range}}</div>
                <div class="sl2-2">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--智能家居-->
    <div class="wrap" v-if="detailIdx == 3">
      <div class="list4">
        <div class="l4-wrap">
          <div class="l4-title">
            <img src="../../static/img/title03.png" alt="">
          </div>
          <div class="l4-swiper">
            <div class="swiper-container swiper14">
              <div class="swiper-wrapper">
                <div class="swiper-slide slide14" v-for="(item,index) in three3" :key="index">
                  <div class="slide14-1">
                    <img src="../../static/img/img34.png" alt="">
                    <div class="imgDetail">
                      <p>{{item.content}}</p>
                    </div>
                  </div>
                  <div class="slide14-2">
                    <div class="cirImg">
                      <div><img src="../../static/img/img35.png" alt=""></div>
                    </div>
                    <div class="sl4-wrap">
                      <div class="s4-info1">{{item.title}}</div>
                      <div class="s4-info2">{{item.enTitle}}</div>
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
          <div class="l5-title">
            <img src="../../static/img/title04.png" alt="">
          </div>
          <div class="l5-slide">
            <div class="slideList" v-for="(item,index) in progress3" :key="index">
              <div class="sl1">
                <!--<div class="l-default">ICON</div>-->
                <img :src="item.icon" alt="">
              </div>
              <div class="sl2">
                <img src="../../static/img/icon17.png" alt="">
                <div class="sl2-1">{{item.range}}</div>
                <div class="sl2-2">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list6">
      <div class="l6-wrap">
        <img src="../../static/img/bj15.png" alt="">
        <div class="detail">
          <div>
            <div class="name">
              <span class="label">姓名</span><input type="text" v-model="joinForm.name" placeholder="请输入姓名">
            </div>
            <div class="phone">
              <span class="label">电话</span><input type="text" v-model="joinForm.phone" placeholder="请输入联系方式">
            </div>
            <div class="addr">
              <span class="label">地址</span><input type="text" v-model="joinForm.address" placeholder="请输入地址">
            </div>
            <div class="button">
              <button @click="btnForm">提交申请</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapButton">
      <ul>
        <li v-for="(item,index) in liBtn" :class="{sel:index == 0}" :key="index" @click="btn01(index)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "inviteJoin",
      data(){
        return {
          pagin13:0,
          detailIdx:1,//1-传统五金 2-智能安防 3-智能家居
          swiper13:null,
          liBtn:['传统五金','智能安防','智能家居'],
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
            // {
            //   title:'商务洽谈',
            //   range:'02'
            // },
            {
              title:'加盟申请',
              icon:'static/img/joinIcon/27-03.png',
              range:'02'
            },
            {
              title:'资质审核',
              icon:'static/img/joinIcon/28-03.png',
              range:'03'
            },
            {
              title:'签订合同',
              icon:'static/img/joinIcon/29-03.png',
              range:'04'
            },
            {
              title:'缴纳费用',
              icon:'static/img/joinIcon/30-03.png',
              range:'05'
            },
            {
              title:'店面装修',
              icon:'static/img/joinIcon/31-03.png',
              range:'06'
            },
            {
              title:'总部培训',
              icon:'static/img/joinIcon/26-03.png',
              range:'07'
            },
            {
              title:'正式运营',
              icon:'static/img/joinIcon/27-03.png',
              range:'08'
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
          joinForm:{
            name:'',
            phone:'',
            address:''
          }
        }
      },
      methods:{
        btn13(i){
          this.pagin13 = i;
          this.swiper13.slideTo(i);
        },
        btn01(i){
          $("html,body").animate({scrollTop:0}, 500);
          $('.wrapButton>ul>li').removeClass('sel');
          $('.wrapButton>ul>li').eq(i).addClass('sel');
          this.detailIdx = i+1;
        },
        btnForm(){
          const that = this;
          let formData = this.joinForm;
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
        }
      },
      mounted(){
        const that = this;
        // var swiper11 = new Swiper('.swiper11',{
        //   // pagination: '.swiper-pagination',
        //   // paginationClickable: true,
        //   direction: 'vertical',
        //   pagination:'.pagin11'
        // });
          var swiper12 = new Swiper('.swiper12',{
            prevButton:'.prev12',
            nextButton:'.next12',
            pagination:'.pagin12'
          });
        this.swiper13 = new Swiper('.swiper13',{
          prevButton:'.prev13',
          nextButton:'.next13',
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
          slidesPerView:3,
          direction : 'vertical',
          prevButton:'.prev13',
          nextButton:'.next13',
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/inviteJoin.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
