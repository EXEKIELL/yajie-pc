import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'

import Invite from '@/components/invite'
import InviteInfo from '@/components/inviteInfo'
import InviteDetail from '@/components/inviteDetail'
import InviteJoin from '@/components/inviteJoin'

import ProductCenter from '@/components/productCenter'
import ProductInfo from '@/components/productInfo'
import ProductList from '@/components/productList'
import ProductDetail from '@/components/productDetail'

import AboutUs from '@/components/aboutUs'
import AboutUsIntro from '@/components/aboutUsIntro'
import AboutUsCourse from '@/components/aboutUsCourse'
import AboutUsCase from '@/components/aboutUsCase'
import AboutUsHonor from '@/components/aboutUsHonor'
import AboutUsContact from '@/components/aboutUsContact'

import Partner from '@/components/partner'
import PartnerPolicy from '@/components/partnerPolicy'
import PartnerInstall from '@/components/partnerInstall'

import Service from '@/components/service'
import ServiceShop from '@/components/serviceShop'
import ServiceMessage from '@/components/serviceMessage'

import Information from '@/components/information'
import InformationNews from '@/components/informationNews'
import InformationDetail from '@/components/informationDetail'

import Down from '@/components/down'
import DownDetail from '@/components/downDetail'

import Black from '@/components/black'

Vue.use(Router)

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/login',
      name: 'Login',
      component:()=> import('@/components/login'),
      meta:{
        // title:'登陆'
      }
    },
    {
      path: '/homePage',
      name: HomePage,
      component: HomePage,
      meta:{
        keepAlive:false,
        // title:'雅洁五金'
      }
    },
    {
      path: '/inviteJoin',
      name: 'InviteJoin',
      component: InviteJoin,
      meta:{
        keepAlive:false,
        // title:'加入我们'
      }
    },
    {
      path: '/invite',
      name: 'Invite',
      component: Invite,
      redirect: '/invite/inviteInfo',
      meta:{
        keepAlive:false
      },
      children:[
        {
          path: '/invite/inviteInfo',
          name: 'InviteInfo',
          component: InviteInfo,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/invite/inviteDetail',
          name: 'InviteDetail',
          component: InviteDetail,
          meta:{
            keepAlive:false
          }
        }
      ]
    },
    {
      path: '/productCenter',
      name: 'ProductCenter',
      component: ProductCenter,
      redirect: '/productCenter/productInfo',
      meta:{
        keepAlive:false
      },
      children:[
        {
          path: '/productCenter/productInfo',
          name: 'ProductInfo',
          component: ProductInfo,
          meta:{
            keepAlive:true
          }
        },
        {
          path: '/productCenter/ProductList',
          name: 'ProductList',
          component: ProductList,
          meta:{
            keepAlive:false
          }
        }
      ]
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail,
      meta:{
        keepAlive:false
      }
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs,
      redirect: '/aboutUs/aboutUsIntro',
      meta:{
        keepAlive:false
      },
      children:[
        {
          path: '/aboutUs/aboutUsIntro',
          name: 'aboutUsIntro',
          component: AboutUsIntro,
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/aboutUs/aboutUsCourse',
          name: 'AboutUsCourse',
          component: AboutUsCourse,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/aboutUs/aboutUsHonor',
          name: 'AboutUsHonor',
          component: AboutUsHonor,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/aboutUs/aboutUsCase',
          name: 'AboutUsCase',
          component: AboutUsCase,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/aboutUs/aboutUsContact',
          name: 'AboutUsContact',
          component: AboutUsContact,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/aboutUs/aboutUsInnovate',
          name: 'AboutUsInnovate',
          component:()=> import('@/components/aboutUsInnovate'),
          meta:{
            keepAlive:false,
            // title:'创新技术'
          }
        }
      ]
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      redirect: '/service/serviceShop',
      meta:{
        keepAlive:false
      },
      children:[
        {
          path: '/service/serviceShop',
          name: 'ServiceShop',
          component: ServiceShop,
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/service/down',
          name:'Down',
          component:Down,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/service/serviceMessage',
          name: 'ServiceMessage',
          component: ServiceMessage,
          meta:{
            keepAlive:false
          }
        }
      ]
    },
    {
      path:'/downDetail',
      name:'DownDetail',
      component:DownDetail,
      meta:{
        keepAlive:false
      }
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner,
      redirect: '/partner/partnerPolicy',
      meta:{
        keepAlive:false,
        login:true
      },
      children:[
        {
          path: '/partner/partnerPolicy',
          name: 'partnerPolicy',
          component: PartnerPolicy,
          meta:{
            keepAlive:false,
            login:true
          }
        },
        {
          path: '/partner/partnerInstall',
          name: 'partnerInstall',
          component: PartnerInstall,
          meta:{
            keepAlive:false,
            login:true
          }
        }
      ]
    },
    {
      path: '/information',
      name: 'Information',
      component:Information,
      redirect: '/information/informationNews',
      meta:{
        keepAlive:false
      },
      children:[
        {
          path: '/information/informationNews',
          name: 'informationNews',
          component: InformationNews,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/information/informationDetail',
          name: 'informationDetail',
          component: InformationDetail,
          meta:{
            keepAlive:false
          }
        }
      ]
    },
    {
      path: '/black',
      name: 'Black',
      component: Black
    }
  ]
})
router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  // console.log(to);
    if(to.meta.login){
      // console.log(to);
      sessionStorage.setItem('path',to.fullPath);
      var date = new Date();
      var today = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
      // 判断进入时间
      if(localStorage.getItem('today') == null){
        localStorage.setItem('today',today);
        router.push('/login');
      }else{
        var date1 = new Date();
        var nowDate = date1.getFullYear()+'/'+(date1.getMonth()+1)+'/'+date1.getDate();
        var day = localStorage.getItem('today');
        // 是否存在token
        if(localStorage.getItem('token') == null){
          router.push('/login');
        }else{
          if(nowDate == day){
            next();
          }else{
            localStorage.removeItem('today');
            router.push('/login');
          }
        }
      }
    }
  next()//执行进入路由，如果不写就不会进入目标页
})

export default router
