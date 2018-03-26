import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/CommonPages/Home/Home.vue'
import User from '../components/User/routeruser'
import CommonPages from '../components/CommonPages/routercommon'




Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [

    
    // {
    //   path: '/features',
    //   name: 'Features',
    //   component:Features,
      
    // },
    // {
    //   path:'/pricing',
    //   name:'Pricing',
    //   component:Pricing
    // },
    {
      path:'/',
      name:'Home',
      component:Home,
      
    },
    ...User,
    ...CommonPages,
    // {
    // path:'/contactus',
    // name:'Contactus',
    // component:Contact

    // },
    
  


  ]
})