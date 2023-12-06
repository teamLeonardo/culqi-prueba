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
        component: () => import("@/components/HelloWorld.vue"),
        name: "one",
    },
    {
        path: PATH.SECOND,
        component: () => import("@/components/HelloWorld.vue"),
        name: "second",
    },
    {
        path: PATH.ERROR,
        component: () => import("@/components/HelloWorld.vue"),
        name: "error",
    },
]

const mapRouter: { name: string | RouteRecordName, path: string }[] = routes.map(
    ({ path, name }) => (
        { path: path || "", name: name || "" }
    )
).filter(({ name }) => !!name)

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

