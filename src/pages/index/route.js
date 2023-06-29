import { createRouter, createWebHashHistory } from "vue-router";
import main from "./views/main/main.vue";

const routes = [
    { path: '/', component: main, name: "main" }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;