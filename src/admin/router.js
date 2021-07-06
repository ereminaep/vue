import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from './pages/about';

const routes = [{
    path: '/',
    component: about
}];

export default new VueRouter({ routes, mode: 'history' });