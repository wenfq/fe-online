// @ts-ignore
import { createApp } from 'vue';
// @ts-ignore
import App from './App.vue';
// @ts-ignore
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-ignore
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.mount('#app');
