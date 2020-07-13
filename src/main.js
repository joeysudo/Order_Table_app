import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SmartTable from 'vuejs-smart-table'





Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(SmartTable)
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App)
}).$mount('#app')

