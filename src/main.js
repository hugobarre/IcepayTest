import Vue from 'vue'
import App from './App.vue'
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'
import routes from './routes';
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
Vue.use(VueRouter)

const router = new VueRouter({routes});
//router.beforeEach((to, from, next) => {
//    next();
//})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');



