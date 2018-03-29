import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/CommonPages/Home/Home.vue'
import User from '../components/User/routeruser'
import CommonPages from '../components/CommonPages/routercommon'
import forgotpassword from '../components/User/Signup/forgotpassword.vue'
import activation from '../components/Outer/activation.vue'
import signup from '../components/User/Signup/signlogin.vue'
import authenticator from '../auth/authorisation'
import navguard from '../components/navguard.vue'

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
      path:'/activation/:verifyToken',
      name:'activation',
      component:activation
    },
    {
      path:'/signup',
      name:'signup',
      component:signup
      
    },
    {
      path: '/user',
      name: 'user',
      component:navguard,
      ...authenticator.loginValidator,
      children: [...User]
    },
    // ...User,
    ...CommonPages,
    // {
    // path:'/contactus',
    // name:'Contactus',
    // component:Contact

    // },
    
  


  ]
})
