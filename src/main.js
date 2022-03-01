import { createApp } from 'vue';
import router from './router';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/styles/index.css';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(createHead());
app.mount('#app');
