import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./plugins";
import request from "@/utils/request";
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.prototype.rq = request;
Vue.config.productionTip = false;

new Vue({
  el: "#vue-admin-beautiful",
  router,
  store,
  render: (h) => h(App),
});
