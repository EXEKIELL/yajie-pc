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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: HomePage,
      component: HomePage
    },
    {
      path: '/inviteJoin',
      name: 'InviteJoin',
      component: InviteJoin
    },
    {
      path: '/invite',
      name: 'Invite',
      component: Invite,
      redirect: '/invite/inviteInfo',
      children:[
        {
          path: '/invite/inviteInfo',
          name: 'InviteInfo',
          component: InviteInfo
        },
        {
          path: '/invite/inviteDetail',
          name: 'InviteDetail',
          component: InviteDetail
        }
      ]
    },
    {
      path: '/productCenter',
      name: 'ProductCenter',
      component: ProductCenter,
      redirect: '/productCenter/productInfo',
      children:[
        {
          path: '/productCenter/productInfo',
          name: 'ProductInfo',
          component: ProductInfo
        },
        {
          path: '/productCenter/ProductList',
          name: 'ProductList',
          component: ProductList
        }
      ]
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs,
      redirect: '/aboutUs/aboutUsIntro',
      children:[
        {
          path: '/aboutUs/aboutUsIntro',
          name: 'aboutUsIntro',
          component: AboutUsIntro
        },
        {
          path:'/aboutUs/aboutUsCourse',
          name: 'AboutUsCourse',
          component: AboutUsCourse
        },
        {
          path: '/aboutUs/aboutUsHonor',
          name: 'AboutUsHonor',
          component: AboutUsHonor
        },
        {
          path: '/aboutUs/aboutUsCase',
          name: 'AboutUsCase',
          component: AboutUsCase
        },
        {
          path: '/aboutUs/aboutUsContact',
          name: 'AboutUsContact',
          component: AboutUsContact
        }
      ]
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      redirect: '/service/serviceShop',
      children:[
        {
          path: '/service/serviceShop',
          name: 'ServiceShop',
          component: ServiceShop
        },
        {
          path: '/service/serviceMessage',
          name: 'ServiceMessage',
          component: ServiceMessage
        }
      ]
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner,
      redirect: '/partner/partnerPolicy',
      children:[
        {
          path: '/partner/partnerPolicy',
          name: 'partnerPolicy',
          component: PartnerPolicy
        },
        {
          path: '/partner/partnerInstall',
          name: 'partnerInstall',
          component: PartnerInstall
        }
      ]
    },
    {
      path: '/information',
      name: 'Information',
      component:Information,
      redirect: '/information/informationNews',
      children:[
        {
          path: '/information/informationNews',
          name: 'informationNews',
          component: InformationNews
        },
        {
          path: '/information/informationDetail',
          name: 'informationDetail',
          component: InformationDetail
        }
      ]
    }
  ]
})
