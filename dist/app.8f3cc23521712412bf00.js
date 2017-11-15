webpackJsonp([1],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createStore = undefined;

var _promise = __webpack_require__(25);

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(103);

var _axios2 = _interopRequireDefault(_axios);

var _vue = __webpack_require__(15);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(43);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default); // @flow


var app = {
	ctx: ['http://localhost:3000', 'http://106.14.136.168'][Number(true)]
};

var initialState = {
	// TODO: 初始状态
	count: 0,
	steps: [],
	loading: 'ing',
	app: app,
	tvList: [],
	platforms: ['douyu', 'panda', 'longzhu'],
	categories: ['lol', 'dota2', 'cf', 'dnf', 'beauty']
};

var getters = {
	count: function count(state) {
		return state.count;
	},
	steps: function steps(state) {
		return state.steps;
	},
	loading: function loading(state) {
		return state.loading;
	},
	app: function app(state) {
		return state.app;
	},
	tvList: function tvList(state) {
		return state.tvList;
	},
	platforms: function platforms(_ref) {
		var _platforms = _ref.platforms;

		return _platforms;
	},
	categories: function categories(_ref2) {
		var _categories = _ref2.categories;

		return _categories;
	}
};

var createStore = exports.createStore = function createStore() {
	return new _vuex2.default.Store({
		state: initialState,
		mutations: {
			increment: function increment(state, num) {
				state.count += num;
				state.steps.unshift('\u52A0\u4E0A' + num);
			},
			reduce: function reduce(state, num) {
				state.count -= num;
				state.steps.unshift('\u51CF\u53BB' + num);
			},
			loading: function loading(state, lstate) {
				state.loading = lstate;
			},
			getLiveList: function getLiveList(state, list) {
				state.tvList = list;
			}
		},
		actions: {
			increment: function increment(_ref3, num) {
				var commit = _ref3.commit;

				commit('increment', num);
			},
			reduce: function reduce(_ref4, num) {
				var commit = _ref4.commit;

				commit('reduce', num);
			},
			loading: function loading(_ref5, lstate) {
				var commit = _ref5.commit;

				commit('loading', lstate);
			},
			getLiveList: function getLiveList(_ref6, uri) {
				var commit = _ref6.commit;

				return new _promise2.default(function (resolve, reject) {
					_axios2.default.get('' + app.ctx + uri).then(function (response) {
						commit('getLiveList', response.data);
						resolve(response);
					});
				});
			}
		},
		getters: getters
	});
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d3cd66c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(126);
function injectStyle (ssrContext) {
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(42)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d3cd66c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {};
	}
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header',{staticClass:"adv-header"},[_c('router-link',{staticClass:"fr",attrs:{"to":"/live"}},[_vm._v("live")]),_c('router-link',{staticClass:"fl",attrs:{"to":"/"}},[_vm._v(" home")])],1),_c('div',{staticClass:"global-nav"},[_vm._v("\n\t\tVue ssr demo\n\t")]),_c('router-view',{staticClass:"view spec"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(25);

var _promise2 = _interopRequireDefault(_promise);

__webpack_require__(83);

var _app = __webpack_require__(85);

var _vue = __webpack_require__(15);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// a global mixin that calls `asyncData` when a route component's params change
_vue2.default.mixin({
	beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
		var asyncData = this.$options.asyncData;

		if (asyncData) {
			asyncData({
				store: this.$store,
				route: to
			}).then(next).catch(next);
		} else {
			next();
		}
	}
}); // @flow

var _createApp = (0, _app.createApp)(),
    app = _createApp.app,
    router = _createApp.router,
    store = _createApp.store;

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.


if (window.__INITIAL_STATE__) {

	store.replaceState(window.__INITIAL_STATE__);
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(function () {
	// Add router hook for handling asyncData.
	// Doing it after initial route is resolved so that we don't double-fetch
	// the data that we already have. Using router.beforeResolve() so that all
	// async components are resolved.
	router.beforeResolve(function (to, from, next) {
		var matched = router.getMatchedComponents(to);
		var prevMatched = router.getMatchedComponents(from);
		var diffed = false;
		var activated = matched.filter(function (c, i) {
			return diffed || (diffed = prevMatched[i] !== c);
		});
		var asyncDataHooks = activated.map(function (c) {
			return c.asyncData;
		}).filter(function (_) {
			return _;
		});
		if (!asyncDataHooks.length) {
			return next();
		}

		_promise2.default.all(asyncDataHooks.map(function (hook) {
			return hook({ store: store, route: to });
		})).then(function () {
			next();
		}).catch(next);
	});

	// actually mount to DOM
	app.$mount('#app');
});

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createApp = undefined;

var _router = __webpack_require__(86);

var _store = __webpack_require__(102);

var _vuexRouterSync = __webpack_require__(122);

var _App = __webpack_require__(123);

var _App2 = _interopRequireDefault(_App);

var _vue = __webpack_require__(15);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApp = exports.createApp = function createApp() {
	var router = (0, _router.createRouter)();
	var store = (0, _store.createStore)();

	(0, _vuexRouterSync.sync)(store, router);

	var app = new _vue2.default({
		render: function render(h) {
			return h(_App2.default);
		},
		router: router,
		store: store
	});

	return {
		app: app,
		router: router,
		store: store
	};
}; // @flow

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createRouter = createRouter;

var _Live = __webpack_require__(87);

var _Live2 = _interopRequireDefault(_Live);

var _vueRouter = __webpack_require__(99);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vue = __webpack_require__(15);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default); // @flow
function createRouter() {
	return new _vueRouter2.default({
		mode: 'history',
		scrollBehavior: function scrollBehavior() {
			return { y: 0 };
		},
		routes: [{ path: '/live', component: _Live2.default }, { path: '/', redirect: 'live' }]
	});
}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Live_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Live_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Live_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0305b58_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Live_vue__ = __webpack_require__(98);
function injectStyle (ssrContext) {
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(42)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Live_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0305b58_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Live_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(91);

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			msg: 'hello vue',
			category: 'dnf',
			platform: 'douyu'
		};
	},

	computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['tvList', 'categories', 'platforms'])),
	methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['getLiveList']), {
		choose: function choose(type, value) {
			type === 'category' ? this.category = value : this.platform = value;
			this.getLiveList('/liveapi/' + this.category + '/' + this.platform);
		},
		go: function go(url) {
			window.open(url);
		}
	}),
	components: {},
	asyncData: function asyncData(_ref) {
		var store = _ref.store,
		    route = _ref.route;

		return store.dispatch('getLiveList', '/liveapi/dnf/douyu');
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"live-page"},[_c('div',{staticClass:"nav-bar"},[_c('ul',{staticClass:"platforms"},_vm._l((_vm.platforms),function(plat,index){return _c('li',{key:plat,class:{'on':plat === _vm.platform },on:{"click":function($event){_vm.choose('platform',plat)}}},[_vm._v(_vm._s(plat)+"\n\t\t\t")])})),_c('ul',{staticClass:"categories"},_vm._l((_vm.categories),function(cate,index){return _c('li',{key:cate,class:{'on':cate === _vm.category },on:{"click":function($event){_vm.choose('category',cate)}}},[_vm._v(_vm._s(cate)+"\n\t\t\t")])}))]),_c('div',{staticClass:"items"},_vm._l((_vm.tvList),function(ref,index){
var title = ref.title;
var anchor = ref.anchor;
var audienceNumber = ref.audienceNumber;
var snapshot = ref.snapshot;
var url = ref.url;
var platformIcon = ref.platformIcon;
return _c('div',{key:index,staticClass:"item",on:{"click":function($event){_vm.go(url)}}},[_c('img',{attrs:{"src":snapshot}}),_c('div',[_c('p',[_vm._v(_vm._s(title))]),_c('p',[_vm._v("主播："+_vm._s(anchor))]),_c('p',[_vm._v("在线："+_vm._s(audienceNumber))])])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[51]);