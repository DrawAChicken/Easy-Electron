import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import ElementUI from 'element-ui';
// import 'normalize.css';

Vue.use(ElementUI);
Vue.prototype.$ipc = global.ipcRenderer || {};
Vue.prototype.$remoteApi = global.remoteApi;

new Vue({
	el: '#app',	
	Router,
	Store,
	render: h => h(App)
});
