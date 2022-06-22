import Vue from "vue"
import App from "./App.vue"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import router from "./routes"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core"
import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { Plugin } from "vue-fragment"
Vue.use(Plugin)

// /* add icons to the library */
library.add(faUserSecret)
library.add(faBook)

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app")
