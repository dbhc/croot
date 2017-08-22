
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



import Vue from 'vue'
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
	primary: 'blue',
	accent: {
		color:'blue',
		hue: '500'
	},
	warn: 'purple',
	background: 'white'
})

Vue.component('home', require('./components/home.vue'));
Vue.component('recruit', require('./components/recruit.vue'));
Vue.component('teach', require('./components/teach.vue'));

import navi from './components/navi/navi.vue'

const app = new Vue({
    el: '#app',
    components: { navi }
});

