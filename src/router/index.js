import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/CommonPages/Home/Home.vue'
import User from '../components/User/routeruser'
import CommonPages from '../components/CommonPages/routercommon'
import forgotpassword from '../components/User/Signup/forgotpassword.vue'
import activation from '../components/Outer/activation.vue'




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
    {
      path:'/forgot',
      name:'forgotpassword',
      component:forgotpassword
    },
    {
      path:'/activation',
      name:'activation',
      component:activation
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
