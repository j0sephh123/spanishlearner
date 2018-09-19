import Vue from 'vue'
import axios from 'axios'
//import VueAxios from 'vue-axios'
 
import App from './App'
import router from './router'
import store from './store/store'

import '../node_modules/bulma/css/bulma.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import './css/loading.css'

// axios.defaults.baseURL = 'http://localhost:1337'
// axios.defaults.baseURL = 'http://localhost:1337'

//Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')








