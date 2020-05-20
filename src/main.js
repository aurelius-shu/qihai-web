import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import App from "./App.vue";
import routers from "./routers";
import "./assets/css/article.css";
import "./assets/css/realm-app.css";

import app from "./core/app.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.prototype.$http = axios;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-fromurlencodeed";

const router = new VueRouter({
  mode: "history",
  routes: routers,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
