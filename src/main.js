import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import './assets/styles/index.sass';

// createApp(App).mount('#app');
const app = createApp(App);
app.use(Quasar, {});
app.mount('#app');
