import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import axios from "axios";

Vue.use(VueRouter);

import about from './pages/about/about';
import works from './pages/works/works';
import reviews from './pages/reviews/reviews';
import login from './pages/login/login';

const routes = [{
        path: '/admin/',
        component: about
    },
    {
        path: '/admin/login/',
        component: login,
        meta: {
            public: true
        }
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

const router = new VueRouter({ routes });

router.beforeEach(async(to, from, next) => {
    const isPublicRoute = to.matched.some(route => route.meta.public);
    const isUserLoggedIn = store.getters["user/userIsLoggedIn"];

    next();
    return;

    if (isPublicRoute === false && isUserLoggedIn === false) {
        const token = localStorage.getItem("token");

        guard.defaults.headers["Authorization"] = `Bearer ${token}`;

        try {
            const response = await guard.get("/user");
            store.dispatch("user/login", await response.data.user)
            next();
        } catch (error) {
            router.replace("/admin/login");
            localStorage.removeItem("token");
        }
    } else {
        next();
    }
});

export default new VueRouter({ routes, mode: 'history' });