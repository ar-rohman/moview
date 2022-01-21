import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './assets/styles/index.css';

// createApp(App).mount('#app');
const app = createApp(App);
app.use(router);
app.mount('#app');
