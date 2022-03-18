import Vue from 'vue'
import MyApp from './MyApp.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(MyApp),
}).$mount('#app')
