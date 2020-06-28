import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/vue-codemirror_data_binding",
        name: "VueCodeMirrorDataBindingDemo",
        component: () => import("../views/VueCodeMirrorDataBindingDemo.vue")
    },
    {
        path: "/vue-codemirror_manually_control_data_synchronization",
        name: "VueCodeMirrorManuallyControlDataSynchronizationDemo",
        component: () =>
            import(
                "../views/VueCodeMirrorManuallyControlDataSynchronizationDemo.vue"
            )
    },
    {
        path: "/js-yaml",
        name: "JsYamlDemo",
        component: () => import("../views/JsYamlDemo.vue")
    },
    {
        path: "/vue_codemirror_merge",
        name: "VueCodemirrorMergeDemo",
        component: () => import("../views/VueCodemirrorMergeDemo.vue")
    },
    {
        path: "/codemirror_merge",
        name: "CodeMirrorMergeDemo",
        component: () => import("../views/CodeMirrorMergeDemo.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
