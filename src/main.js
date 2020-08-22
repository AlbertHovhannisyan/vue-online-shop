
import Vue from 'vue'
import App from './App'
import './assets/styles/styles.scss'
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
