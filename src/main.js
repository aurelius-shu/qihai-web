import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import App from "./App.vue";
import routers from "./routers";
import Upload from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import moment from "moment"

import "./assets/css/article.css";
import "./assets/css/realm-app.css";

import app from "./core/app.js";
import utils from "./core/utils.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(Upload);

Vue.prototype.$moment = moment;
Vue.prototype.$http = axios;
Vue.prototype.$utils = utils;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-fromurlencodeed";

const router = new VueRouter({
  mode: "history",
  routes: routers,
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
