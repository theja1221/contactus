const profile = () => import ('./Profile/Profile.vue')
const signup = () => import ('./Signup/signup.vue')


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
    }
]