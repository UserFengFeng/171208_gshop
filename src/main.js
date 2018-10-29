/*
入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上vue-router
  store, // 使用上vuex
})
console.log(vm)
