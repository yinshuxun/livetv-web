// @flow
import LIVE from '../views/Live.vue';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: 'history',
		scrollBehavior: () => ({ y: 0 }),
		routes: [{ path: '/live', component: LIVE }, { path: '/', redirect: 'live' }],
	});
}
