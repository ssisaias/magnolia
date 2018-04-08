import Vue from 'vue'
import App from './App.vue'

// Require the main Sass manifest file
require('./assets/sass/main.scss');

new Vue({
  el: '#app',
  render: h => h(App)
})
