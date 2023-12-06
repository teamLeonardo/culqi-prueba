export const PATH = {
    ONE: "/",
    SECOND: "provedores"
}

import { RouteRecordName, RouteRecordRaw, createRouter, createWebHistory } from "vue-router";


const routes: RouteRecordRaw[] = [
    {
        path: PATH.ONE,
        component: () => import("@/components/HelloWorld.vue"),
        name: "home",
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

export {
    router,
    mapRouter
}

