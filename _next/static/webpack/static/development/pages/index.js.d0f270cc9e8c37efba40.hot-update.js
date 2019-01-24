webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Palette.js":
/*!*******************************!*\
  !*** ./components/Palette.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, AddColor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mrmrs/w/color/components/Palette.js";


var SingleColor = function SingleColor(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      isActive = _ref.isActive,
      isVisible = _ref.isVisible,
      index = _ref.index;

  var handleActiveUI = function handleActiveUI() {
    return onClick(color, index);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    border: "2px solid",
    borderColor: isActive ? "black" : "transparent",
    bg: color,
    height: 32,
    width: 48,
    style: {
      outline: '1px solid white',
      float: 'left',
      cursor: "pointer",
      position: "relative",
      boxShadow: isVisible ? " 0 0 10px rgba(0,0,0,0.3)" : "none",
      transform: isVisible ? "scale(1.5)" : "none",
      zIndex: isVisible ? 4 : 1,
      transition: "transform 200ms ease-in-out"
    },
    onClick: handleActiveUI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

var Palette = function Palette(_ref2) {
  var palette = _ref2.palette,
      onClick = _ref2.onClick,
      activeColors = _ref2.activeColors,
      onAddColor = _ref2.onAddColor,
      pickerColor = _ref2.pickerColor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    style: {
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, palette.map(function (color, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleColor, {
      isActive: i === pickerColor.index,
      isVisible: activeColors.includes(color),
      key: i,
      index: i,
      color: color,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddColor, {
    style: {
      float: 'left'
    },
    mt: 1,
    ml: 1,
    onAddColor: onAddColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Palette);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/AddColor.js */ "./components/AddColor.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.d0f270cc9e8c37efba40.hot-update.js.map