import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  // baseURL: "http://localhost:3000/rest"
  baseURL: process.env.VUE_APP_API_URL || '/rest'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
