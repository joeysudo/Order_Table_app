import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$axios=axios
Vue.config.productionTip = false

Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')

