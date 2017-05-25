import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'normalize.css';
import 'animate.css';

Vue.use(ElementUI);

Vue.prototype.$remote = global.remote || {};
Vue.prototype.$ipc = global.ipcRenderer || {};
Vue.prototype.$remoteApi = global.remoteApi;

new Vue({
	el: '#app',	
	router,
	store,
	render: h => h(App)
});
