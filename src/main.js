// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";
import store from "./store/vuex";
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore';
// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

if (firebase) {
  firebase.initializeApp({
    apiKey: "AIzaSyBxqH55VMdnAOPyt62gEM6w2oH84Nk2Qrc",
    authDomain: "vuepractice-7ee82.firebaseapp.com",
    databaseURL: "https://vuepractice-7ee82-default-rtdb.firebaseio.com",
    projectId: "vuepractice-7ee82",
    storageBucket: "vuepractice-7ee82.appspot.com",
    messagingSenderId: "538423555153",
    appId: "1:538423555153:web:db5235aa601dd2cbd57470",
    measurementId: "G-LFR5SEN6H9",
  })
}

export const db = firebase.firestore();

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
  router,
  data: {
    Chartist: Chartist,
  },
});
