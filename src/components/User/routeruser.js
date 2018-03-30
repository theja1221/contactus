const profile = () => import ('./Profile/Profile.vue')
const checkout= () => import('./Checkout/checkout.vue')
// const signup = () => import ('./Signup/signlogin.vue')
// const forgotpassword = () => ('./Signup/forgotpassword.vue')

export default[
    {
        path:'profile',
        name:'profile',
        component:profile
    },
    {
        path:'checkout',
        name:'checkout',
        component:checkout
    },
    // {
    //     path:'/user/signup',
    //     name:'signup',
    //     component:signup

    // },
    
   
]