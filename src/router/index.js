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

import Black from '@/components/black'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: HomePage,
      component: HomePage,
      meta:{
        keepAlive:false
      }
    },
    {
      path: '/inviteJoin',
      name: 'InviteJoin',
      component: InviteJoin,
      meta:{
        keepAlive:false
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
      path: '/partner',
      name: 'Partner',
      component: Partner,
      redirect: '/partner/partnerPolicy',
      meta:{
        keepAlive:false
      },
      children:[
        {
          path: '/partner/partnerPolicy',
          name: 'partnerPolicy',
          component: PartnerPolicy,
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/partner/partnerInstall',
          name: 'partnerInstall',
          component: PartnerInstall,
          meta:{
            keepAlive:false
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
