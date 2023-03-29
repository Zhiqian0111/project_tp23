import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Test from '../components/Test.vue'

Vue.use(Router)
const router = new Router({
  routes:[
    {path:'/',redirect:'/home'},
    {path: '/home',component:Home},
    {path:'/test',component:Test}
  ]
})
export default router
