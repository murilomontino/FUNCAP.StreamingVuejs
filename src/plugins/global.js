import Vue from "vue"
/*
  Para tornar um componente Vuejs
  em tag para não importar sempre dentro de um novo componente temos então.

  Vue.component( 'NOME-DO-COMPONENTE', require('ONDE O COMPONENTE SE ENCONTRA').default )
*/

Vue.component("iq-card", require("../components/core/cards/iq-card").default)
Vue.component("Lottie", require("../components/core/lottie/Lottie").default)
Vue.component("Progressbar", require("../components/core/progressbar/Progressbar").default)
Vue.component("Slick", require("../components/core/slider/Slick").default)
Vue.component("V-select", require("../components/core/select2/Select2").default)

Vue.component("tab-nav", require("../components/core/tab/tab-nav").default)
Vue.component("tab-nav-items", require("../components/core/tab/tab-nav-items").default)
Vue.component("tab-nav-items-light", require("../components/core/tab/tab-nav-items-light").default)

Vue.component("tab-content", require("../components/core/tab/tab-content").default)
Vue.component("tab-content-item", require("../components/core/tab/tab-content-item").default)
Vue.component("TimeLine", require("../components/core/timeline/TimeLine").default)

Vue.component("table-custom", require("../components/core/table/table.vue").default)
