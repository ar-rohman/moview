import { createApp } from 'vue';
import { quasar } from 'quasar';
import App from './App.vue';
import './assets/styles/index.sass';

// createApp(App).mount('#app');
const app = createApp(App);
app.use(quasar, {});
app.mount('#app');
