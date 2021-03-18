import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/Login.vue'
import main from '../views/main.vue'

import CategoiresEdit from '../views/CategoiresCreate.vue'
import CategoiresList from '../views/CategoiresList.vue'

import herosEdit from '../views/HeroCreate.vue'
import herosList from '../views/HeroList.vue'

import itemsEdit from '../views/ItemCreate.vue'
import itemsList from '../views/ItemList .vue'

import articlesEdit from '../views/ArticleCreate.vue'
import articlesList from '../views/ArticleList.vue'

import adsEdit from '../views/AdsCreate.vue'
import adsList from '../views/AdsList.vue'

import adminUsersEdit from '../views/AdminUsersCreate.vue'
import adminUsersList from '../views/AdminUsersList.vue'




 //路由守卫

Vue.use(VueRouter)

const routes = [  
  {
    path:'/login',name:'login',component:login,meta:{isPublic:true}

  },
  {
    path: '/',
    name: 'main',
    component: main,
    children :[
      {
        path:'/categories/create',
        component :CategoiresEdit
      },
      {
        path:'/categories/list',
        component :CategoiresList
      },
  
      {
        path:'/categories/edit/:id',//地址写错了 曹
        component :CategoiresEdit,
        props:true
      },

      {
        path:'/items/create',
        component :itemsEdit
      },
      {
        path:'/items/list',
        component :itemsList
      },
  
      {
        path:'/items/edit/:id',//地址写错了 曹
        component :itemsEdit,
        props:true
      } ,
      {
        path:'/heroes/create',
        component :herosEdit
      },
      {
        path:'/heroes/list',
        component :herosList
      },
  
      {
        path:'/heroes/edit/:id',//地址写错了 曹
        component :herosEdit,
        props:true
      } ,


      {
        path:'/articles/create',
        component :articlesEdit
      },
      {
        path:'/articles/list',
        component :articlesList
      },
  
      {
        path:'/articles/edit/:id',//地址写错了 曹
        component :articlesEdit,
        props:true
      } ,

      {
        path:'/ads/create',
        component :adsEdit
      },
      {
        path:'/ads/list',
        component :adsList
      },
  
      {
        path:'/ads/edit/:id',//地址写错了 曹
        component :adsEdit,
        props:true
      } ,

      {
        path:'/admin_users/create',
        component :adminUsersEdit
      },
      {
        path:'/admin_users/list',
        component :adminUsersList
      },
  
      {
        path:'/admin_users/edit/:id',//地址写错了 曹
        component :adminUsersEdit,
        props:true
      } ,

    ]
  },//问题出现在我是自带的路由他是 自己创建的router可能路径不太一样
]
// router.beforeEach((to,from,next)=>{
//   if(!to.meta.isPublic && !localStorage.token){
//     return next('/login')
//   }
//   next()
// })
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
