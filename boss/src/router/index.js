import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
// import defaultlogin from '@/components/login/defaultlogin'
const test = resolve => require(['@/components/test'], resolve)

//1 、组件异步加载，只有在组件被访问的时候才会加载，提高了性能
const home = resolve => require(['@/components/common/home'], resolve)
const joblist = resolve => require(['@/components/job/joblist'], resolve)
const jobdetial = resolve => require(['@/components/job/jobdetial'], resolve)
const company = resolve => require(['@/components/company/company'], resolve)
const comDetail = resolve => require(['@/components/company/comDetail'], resolve)
const message = resolve => require(['@/components/message/message'], resolve)
const aboutme = resolve => require(['@/components/aboutme/myinfo'], resolve)




Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/',
          name:"login",
          component:login
      },
      {
          path:'/home',
          name:"",
          component:home,
          children:[
            {
              path:'/',
              name:"joblist",
              component:joblist
            },
            {
              path:"/company",
              name:"company",
              component:company
            },
            {
              path:"/message",
              name:"message",
              component:message
            },
            {
              path:"/aboutme",
              name:"me",
              component:aboutme
            },
          ]
      },
      {
        path:"/detial/:jobId",
        name:"detial",
        component:jobdetial
      },
      {
      	path:"/comdetail/:id",
      	name:"comDetail",
      	component:comDetail
      },
      {
        path:"/test",
        name:"test",
        component:test
      }
  ]
})
