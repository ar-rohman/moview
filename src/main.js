import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/styles/index.css';

// createApp(App).mount('#app');
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
