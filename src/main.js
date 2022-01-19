import { createApp } from 'vue';
import router from './router';
import { Quasar } from 'quasar';
import App from './App.vue';
import 'quasar/src/css/index.sass';
// import '@quasar/extras/material-icons/material-icons.css';
import iconSet from 'quasar/icon-set/mdi-v6';
import '@quasar/extras/mdi-v6/mdi-v6.css';

// createApp(App).mount('#app');
const app = createApp(App);
app.use(router);
app.use(Quasar, {
    iconSet: iconSet,
});
app.mount('#app');
