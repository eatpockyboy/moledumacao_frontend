import { createRouter, createWebHashHistory } from "vue-router";
import main from "./views/main/main.vue";

const routes = [
    { path: '/', component: main, name: "index" }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;