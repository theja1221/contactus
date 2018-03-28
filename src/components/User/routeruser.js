const profile = () => import ('./Profile/Profile.vue')
const signup = () => import ('./Signup/signlogin.vue')
const forgotpassword = () => ('./Signup/forgotpassword.vue')

export default[
    {
        path:'/user/profile',
        name:'profile',
        component:profile
    },
    {
        path:'/user/signup',
        name:'signup',
        component:signup

    },
    
   
]