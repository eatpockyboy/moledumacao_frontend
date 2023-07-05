/*
 * @Author: Chris
 * @Date: 2023-06-30 00:31:55
 * @LastEditors: Chris
 * @LastEditTime: 2023-06-30 01:03:27
 * @Descripttion: **
 */
import { createRouter, createWebHashHistory } from "vue-router";
import main from "./views/main/main.vue";
import home from "./views/home/home.vue";

const routes = [
    { path: '/', component: main, name: "main" },
    { path: '/home', component: home, name: "home" }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;