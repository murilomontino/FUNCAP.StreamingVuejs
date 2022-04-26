import Vue from "vue"
import Vuex from "vuex"
import Setting from "./Setting"
import Category from "./Category"
import Auth from "./Auth"
import ViewStore from "../views/store"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  modules: {
    Auth,
    Setting,
    Category,
    ...ViewStore
  },
  strict: debug
})
