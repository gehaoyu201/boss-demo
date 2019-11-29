import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    return next()
  }
  if (to.path == '/register') {
    return next()
  }
  if (localStorage.token) {
    var token;
    try { token = JSON.parse(localStorage.getItem("token")) } catch{
      router.push('/login')
    }
    const flag = axios.post("http://localhost:3000/token", token).catch(err => {
      if (err) {
        router.push('/login')
      }
    })
    if (flag) {
      return next()
    } else if (flag.status == 500) {
      router.push('/login')
    } else {
      router.push('/login')
    }
  } else {
    router.push('/login')
  }
})
Vue.prototype.$http = axios.create({
  // baseURL: 'http://localhost:3000/rest'
  baseURL: process.env.VUE_APP_API_URL || '/rest'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
