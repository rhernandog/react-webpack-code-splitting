webpackJsonp([0],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _services = __webpack_require__(237);

var _services2 = _interopRequireDefault(_services);

var _services3 = __webpack_require__(238);

var _services4 = _interopRequireDefault(_services3);

var _services5 = __webpack_require__(239);

var _services6 = _interopRequireDefault(_services5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicesContent = [{
	"title": "Super Trekking Adventure",
	"image": _services2.default,
	"content": ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ut, odio. Totam nemo quos non sed maiores? Quod fuga dolore ea! Placeat beatae qui, molestiae officia ut dicta eveniet sint.", "Enim aliquid tempora, illum veniam numquam eaque soluta inventore, rerum, totam reiciendis alias sapiente facere nobis quos aperiam? Harum, vero.Mollitia repellat, qui quidem porro inventore, ex repudiandae sunt reprehenderit."]
}, // service 1
{
	"title": "Mega Trekking Walkathon",
	"image": _services4.default,
	"content": ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nesciunt facere est rem sit eum dolorem aut dignissimos, itaque harum possimus distinctio fuga quaerat maiores culpa officia tenetur ducimus velit fugiat laudantium sunt blanditiis. Atque?"]
}, // service 2
{
	"title": "Once In A Lifetime Trekking",
	"image": _services6.default,
	"content": ["Lorem ipsum dolor sit amet, consectetur adipisicing elit.Rerum veritatis est ab accusamus, enim amet doloremque, omnis quaerat, aliquid perferendis, nostrum at tenetur tempora distinctio?", "Repudiandae hic explicabo cumque earum officiis, laudantium incidunt quis dolorem, quia perferendis distinctio, repellat dicta nostrum rerum! Delectus quisquam dolores nemo, incidunt molestias reprehenderit at."]
}];
// get images


var renderService = function renderService(e, i) {
	return _react2.default.createElement(
		"div",
		{ key: "service" + i, className: "row", style: { marginTop: "10px" } },
		_react2.default.createElement(
			"div",
			{ className: "col-12 col-md-4" },
			_react2.default.createElement("img", { className: "img-fluid img-thumbnail", src: e.image, alt: "" })
		),
		_react2.default.createElement(
			"div",
			{ className: "col-12 col-md-8" },
			_react2.default.createElement(
				"h3",
				{ className: "text-center" },
				e.title
			),
			e.content.map(function (text, i) {
				return _react2.default.createElement(
					"p",
					{ key: "text" + i },
					text
				);
			})
		)
	);
};

var Services = function Services() {
	return _react2.default.createElement(
		"div",
		{ className: "col-12" },
		_react2.default.createElement(
			"h3",
			{ className: "text-center" },
			"Our Services"
		),
		_react2.default.createElement("hr", null),
		servicesContent.map(renderService)
	);
};

exports.default = Services;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services-1.jpg";

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services-2.jpg";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services-3.jpg";

/***/ })

});
//# sourceMappingURL=0.1e862a3ad18ad039b359.js.map