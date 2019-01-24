webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ColorBlindFilter.js":
/*!****************************************!*\
  !*** ./components/ColorBlindFilter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Input, Label, Span, H4) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mrmrs/w/color/components/ColorBlindFilter.js";

var filters = [{
  label: "None",
  value: "none",
  population: "92%"
}, {
  label: "Deuteranomaly",
  value: "deuteranomaly",
  population: "2.7%"
}, {
  label: "Protanomaly",
  value: "protanomaly",
  population: "0.66%"
}, {
  label: "Protanopia",
  value: "protanopia",
  population: "0.59%"
}, {
  label: "Deuteranopia",
  value: "deuteranopia",
  population: "0.56%"
}, {
  label: "Tritanopia",
  value: "tritanopia",
  population: "0.016%"
}, {
  label: "Tritanomaly",
  value: "tritanomaly",
  population: "0.01%"
}, {
  label: "Achromatopsia",
  value: "achromatopsia",
  population: "<0.0001%"
}, {
  label: "Achromatomaly",
  value: "achromatomaly",
  population: "Unknown %"
}];

var SingleRadio = function SingleRadio(_ref) {
  var label = _ref.label,
      value = _ref.value,
      population = _ref.population,
      onChange = _ref.onChange,
      currentValue = _ref.currentValue,
      controlColor = _ref.controlColor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    display: "flex",
    alignItems: "flex-start",
    width: 1,
    flexWrap: "wrap",
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    width: "1rem",
    mr: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    type: "radio",
    checked: currentValue === value,
    name: "colorFilter",
    id: label,
    value: value,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pl: 1,
    htmlFor: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, label)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    ml: "auto",
    fontSize: 1,
    lineHeight: 1.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, population)));
};

var ColorBlindFilter = function ColorBlindFilter(_ref2) {
  var onChange = _ref2.onChange,
      currentValue = _ref2.currentValue,
      controlColor = _ref2.controlColor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    display: "flex",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H4, {
    width: 1,
    mb: 2,
    mt: 4,
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Color Blindness Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    ml: "auto",
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Population")), filters.map(function (f) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleRadio, {
      key: f.label,
      label: f.label,
      value: f.value,
      population: f.population,
      onChange: onChange,
      currentValue: currentValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorBlindFilter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.279c2c86c048aab39592.hot-update.js.map