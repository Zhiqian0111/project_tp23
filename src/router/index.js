import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'
import CarEmission from '../components/CarEmission.vue'
import Search from '../components/Search.vue'
import Quiz from '../components/Quiz.vue'


Vue.use(Router)
const router = new Router({
  routes:[
    {path:'/home',component:Home},
    {path: '/',component:Home,
    redirect: '/main',
    children:[
      {path:'/main',component:Main},
      {path:'/carEmission',component:CarEmission},
      {path:'/search',component:Search},
      {path:'/quiz',component:Quiz},
    ]
  },
    
  ]
})
export default router
