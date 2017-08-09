webpackJsonp([4],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateLink = function CreateLink(props) {
	var path = props.path,
	    to = props.to,
	    text = props.text;

	return _react2.default.createElement(
		_reactRouterDom.Link,
		{
			className: "btn btn-primary",
			replace: function () {
				return to === path;
			}(),
			to: to, style: { marginRight: "5px" }
		},
		text
	);
};

var Header = function Header(props) {
	var pathname = props.location.pathname;

	return _react2.default.createElement(
		"div",
		{ className: "col-12" },
		_react2.default.createElement(
			"h1",
			{ className: "text-center" },
			"React, React Router v4, Webpack Code Splitting"
		),
		_react2.default.createElement(CreateLink, { path: pathname, to: "react-webpack-code-splitting/", text: "Home" }),
		_react2.default.createElement(CreateLink, { path: pathname, to: "react-webpack-code-splitting/services", text: "services" }),
		_react2.default.createElement(CreateLink, { path: pathname, to: "react-webpack-code-splitting/images", text: "Images" }),
		_react2.default.createElement(CreateLink, { path: pathname, to: "react-webpack-code-splitting/contact", text: "contact" }),
		_react2.default.createElement("hr", null)
	);
};

exports.default = Header;

/*
<Link
	className="btn btn-secondary"
	replace={(() => "/" === pathname)()}
	style={{marginRight:"5px"}} to="/"
>
	Home
</Link>
<Link
	className="btn btn-secondary"
	replace={(()=>"/services" === pathname)()}
	style={{marginRight:"5px"}} to="/services"
>
	Services
</Link>
<Link
	className="btn btn-secondary"
	replace={(() => "/images" === pathname)()}
	style={{marginRight:"5px"}} to="/images"
>
	Images
</Link>
<Link
	className="btn btn-secondary"
	replace={(() => "/contact" === pathname)()}
	style={{marginRight:"5px"}} to="/contact"
>
	Contact
</Link>
*/

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(37);

var _home = __webpack_require__(226);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingComponent = function (_Component) {
	_inherits(LoadingComponent, _Component);

	function LoadingComponent(props) {
		_classCallCheck(this, LoadingComponent);

		var _this = _possibleConstructorReturn(this, (LoadingComponent.__proto__ || Object.getPrototypeOf(LoadingComponent)).call(this, props));

		_this.state = { loaded: false, module: null };
		return _this;
	}

	_createClass(LoadingComponent, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			this.props.routePromise.then(function (module) {
				setTimeout(function () {
					_this2.setState({ loaded: true, module: module.default });
				}, 300);
			});
		}
	}, {
		key: "render",
		value: function render() {
			var isLoaded = this.state.loaded;

			if (this.state.loaded) {
				return _react2.default.createElement(this.state.module, this.props);
			} else {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"h4",
						null,
						"COMPONENT STILL LOADING"
					)
				);
			}
		}
	}]);

	return LoadingComponent;
}(_react.Component);

var Routes = function Routes() {
	return _react2.default.createElement(
		"div",
		{ className: "col-12" },
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _home2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { path: "/contact",
			component: function component(props) {
				return _react2.default.createElement(LoadingComponent, _extends({}, props, { routePromise: new Promise(function (resolve) {
						__webpack_require__.e/* require.ensure */(2).then((function (require) {
							resolve(__webpack_require__( /*webpackChunkName: "contact"*/231));
						}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
					}) }));
			}
		}),
		_react2.default.createElement(_reactRouterDom.Route, { path: "/images",
			component: function component(props) {
				return _react2.default.createElement(LoadingComponent, _extends({}, props, { routePromise: new Promise(function (resolve) {
						__webpack_require__.e/* require.ensure */(1).then((function (require) {
							resolve(__webpack_require__( /*webpackChunkName: "images"*/232));
						}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
					}) }));
			}
		}),
		_react2.default.createElement(_reactRouterDom.Route, { path: "/services",
			component: function component(props) {
				return _react2.default.createElement(LoadingComponent, _extends({}, props, { routePromise: new Promise(function (resolve) {
						__webpack_require__.e/* require.ensure */(0).then((function (require) {
							resolve(__webpack_require__( /*webpackChunkName: "contact"*/233));
						}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
					}) }));
			}
		})
	);
};

exports.default = Routes;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "col-12" },
				_react2.default.createElement(
					"h3",
					null,
					"Trekking Experience Home"
				),
				_react2.default.createElement(
					"p",
					null,
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur a dolorum porro quis velit! Dignissimos nesciunt aspernatur facere quaerat soluta consequatur earum laboriosam minus?"
				),
				_react2.default.createElement(
					"p",
					null,
					"Minima alias odit quod debitis dolore impedit accusantium nulla sint quasi maiores! Odio minus explicabo aliquam cumque perspiciatis libero optio quasi porro temporibus id. Rerum?"
				),
				_react2.default.createElement(
					"p",
					null,
					"Ullam quaerat impedit ipsam ducimus, excepturi enim nobis perspiciatis esse. Doloremque reiciendis veniam recusandae provident tempora consequuntur iste quaerat natus, omnis voluptates perferendis ratione beatae."
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(68);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(37);

var _header = __webpack_require__(224);

var _header2 = _interopRequireDefault(_header);

var _routes = __webpack_require__(225);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get header
var App = function App() {
	return _react2.default.createElement(
		_reactRouterDom.BrowserRouter,
		null,
		_react2.default.createElement(
			"div",
			{ className: "row" },
			_react2.default.createElement(_reactRouterDom.Route, { route: "/", component: _header2.default }),
			_react2.default.createElement(_routes2.default, null)
		)
	);
};
// get routes


_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("app"));

/***/ })

},[97]);
//# sourceMappingURL=app.c61d0b3222ce0a6cadad.js.map