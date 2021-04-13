import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.config.productionTip = false

require("./assets/main.scss")

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
