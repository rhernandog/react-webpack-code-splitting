webpackJsonp([2],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
	return _react2.default.createElement(
		"div",
		{ className: "row" },
		_react2.default.createElement(
			"div",
			{ className: "col-12 col-md-8 offset-md-2" },
			_react2.default.createElement(
				"form",
				null,
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"label",
						{ htmlFor: "nameInput" },
						"Name"
					),
					_react2.default.createElement("input", { type: "text", className: "form-control", id: "nameInput", placeholder: "Enter your name" })
				),
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"label",
						{ htmlFor: "mailInput" },
						"Email"
					),
					_react2.default.createElement("input", { type: "mail", className: "form-control", id: "mailInput", placeholder: "Enter your mail" })
				),
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"label",
						{ htmlFor: "commentsArea" },
						"Comments"
					),
					_react2.default.createElement("textarea", { className: "form-control", id: "commentsArea", rows: "5" })
				),
				_react2.default.createElement(
					"div",
					{ className: "row" },
					_react2.default.createElement(
						"div",
						{ className: "col-6 text-center" },
						_react2.default.createElement(
							"button",
							{ className: "btn btn-success" },
							"Submit"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "col-6 text-center" },
						_react2.default.createElement(
							"button",
							{ className: "btn btn-danger" },
							"Reset"
						)
					)
				)
			)
		)
	);
};

exports.default = Contact;

/***/ })

});
//# sourceMappingURL=2.499febb2d9b9ee132570.js.map