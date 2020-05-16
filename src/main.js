import Vue from 'vue'
import App from './App.vue'

import "./assets/css/md.css";
import "./assets/css/article.css"
import "./assets/css/realm-app.css"

import app from "./core/app.js"

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
