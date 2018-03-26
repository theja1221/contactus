const contactus = () =>import('./Contactus/contactus.vue')
const features = () => import ('./Features/features.vue')
const pricing = () => import ('./Pricing/pricing.vue')
// const home = () => import ('./Home/Home.vue')



export default [
    {
        path:'/contactus',
        name:'contactus',
        component:contactus
    },
    {
        path:'/features',
        name:'features',
        component:features
    },
    {
        path:'/pricing',
        name:'pricing',
        component:pricing
    },

]