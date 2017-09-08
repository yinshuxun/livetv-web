import Vue from 'vue'
import Router from 'vue-router'
import CA from '../component/CA.vue'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		scrollBehavior: () => ({y: 0}),
		routes: [
			{path: '/', component: CA}
		]
	})
}
