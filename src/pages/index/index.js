/**
 * Author: hezhiwei
 * Create Time: 2019-06-09 00:28
 * Description:
 */

import { createApp } from "vue";
import App from "./pages/app.vue";
import { createPinia } from 'pinia'
import router from "./route";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#root');












