import { createApp } from 'vue';
import App from './App.vue';
import routes from './router.config';
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import AIToast from './AIToast.vue';
export const routerConfig = createRouter({
    history: createWebHashHistory(),
    routes: routes as RouteRecordRaw[]
});

const app = createApp(App);
app.component('AIToast', AIToast);
app.use(routerConfig);
app.mount('#app');