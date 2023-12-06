export const PATH = {
    ONE: "/",
    SECOND: "/provedores",
    ERROR: "/error"
}

import { utils } from "@/shared/utils";


import { RouteRecordName, RouteRecordRaw, createRouter, createWebHistory } from "vue-router";


const routes: RouteRecordRaw[] = [
    {
        path: PATH.ONE,
        component: () => import("@/modules/recharge_payments/views/Balance.view.vue"),
        name: "one",
    },
    {
        path: PATH.SECOND,
        component: () => import("@/modules/recharge_payments/views/Provider.view.vue"),
        name: "second",
    },
    {
        path: PATH.ERROR,
        component: () => import("@/modules/error/views/Token.view.vue"),
        name: "error",
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import("@/modules/error/views/NotFound.view.vue"),
        name: "notfound"
    },
];


const mapRouter: { name: string | RouteRecordName, path: string }[] = routes.map(
    ({ path, name }) => (
        { path: path || "", name: name || "" }
    )
).filter(({ name }) => !!name);


const router = createRouter({
    routes,
    history: createWebHistory()
});


router.beforeEach((...guard) => {
    const next = guard[2];
    if (utils.isToken === false) next({ name: "error" })
    else next()
})


export {
    router,
    mapRouter
}

