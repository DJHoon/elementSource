import Vue from 'vue'
import App from './App.vue'
import router from './router'
import less from 'less'
import myElement from './components'
Vue.config.productionTip = false
Vue.use(myElement)
Vue.use(less)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
