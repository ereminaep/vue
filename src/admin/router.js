import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from './pages/about/about';
import works from './pages/works/works';
import reviews from './pages/reviews/reviews';

const routes = [{
        path: '/admin/',
        component: about
    },
    {
        path: '/admin/works/',
        component: works
    },
    {
        path: '/admin/reviews/',
        component: reviews
    }
];

export default new VueRouter({ routes, mode: 'history' });