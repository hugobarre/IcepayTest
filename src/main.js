import Vue from 'vue'
import App from './App.vue'
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'
import routes from './routes';
import Vuesax from 'vuesax'
import VueI18n from 'vue-i18n'
import messages from './i18n'
import FlagIcon from 'vue-flag-icon';
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false;

Vue.use(FlagIcon);
Vue.use(VueI18n)
Vue.use(Vuesax)
Vue.use(VueRouter)


const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages
})


const router = new VueRouter({routes});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');



