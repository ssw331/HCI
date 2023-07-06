
const routes =[
    {
        path:'/',
        name:'Chat',
        component:()=>import('../components/chat.vue')
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../components/Login.vue'),

    },

]

export default routes