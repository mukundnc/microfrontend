import Vue from 'vue'
import App from './App.vue'
import wrap from "@vue/web-component-wrapper";
// import './index.css';
// import './assets/style.css';
// import './assets/bootstrap.min.css';

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const wrappedElement = wrap(Vue, App);

window.customElements.define("vue-app-todo", wrappedElement);