import VueRouter from 'vue-router';

let routes = [
    {
        path:'/',
        component:require('./Views/Home')
    },
    {
        path:'/about',
        component:require('./Views/About')
    }
];

export default new VueRouter({
    routes,
    linkActiveClass:'is-active',
});