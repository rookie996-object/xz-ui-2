import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import NProgress from 'nprogress';
import { createPinia } from 'pinia';
import './normalize.scss';
import './index.scss';

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
