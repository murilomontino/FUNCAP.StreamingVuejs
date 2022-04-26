import Vue from "vue"
import "mutationobserver-shim"
import "./Utils/fliter"

import App from "./App"
import router from "./router"
import store from "./store"
import "./plugins"
import "./registerServiceWorker"
import i18n from "./i18n"
import "./directives"
import api from "./services"

Vue.config.productionTip = false
Vue.prototype.$api = api

const vm = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app")

vm.api = api

window.vm = vm
