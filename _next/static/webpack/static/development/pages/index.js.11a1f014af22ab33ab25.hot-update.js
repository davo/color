webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Colorbox.js":
/*!********************************!*\
  !*** ./components/Colorbox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Header, H4, Span, Flex, Label, Input, Select, ButtonPrimary) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_colorbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/colorbox */ "./utils/colorbox.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/Colorbox.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var CURVES = [{
  label: "Quad - EaseIn",
  value: "easeInQuad"
}, {
  label: "Quad - EaseOut",
  value: "easeOutQuad"
}, {
  label: "Quad - EaseInOut",
  value: "easeInOutQuad"
}, {
  label: "Quart - EaseIn",
  value: "easeInQuart"
}, {
  label: "Quart - EaseOut",
  value: "easeOutQuart"
}, {
  label: "Quart - EaseInOut",
  value: "easeInOutQuart"
}, {
  label: "Sine - EaseIn",
  value: "easeInSine"
}, {
  label: "Sine - EaseOut",
  value: "easeOutSine"
}, {
  label: "Sine - EaseInOut",
  value: "easeInOutSine"
}, {
  label: "Cubic - EaseIn",
  value: "easeInCubic"
}, {
  label: "Cubic - EaseOut",
  value: "easeOutCubic"
}, {
  label: "Cubic - EaseInOut",
  value: "easeInOutCubic"
}, {
  label: "Expo - EaseIn",
  value: "easeInExpo"
}, {
  label: "Expo - EaseOut",
  value: "easeOutExpo"
}, {
  label: "Expo - EaseInOut",
  value: "easeInOutExpo"
}, {
  label: "Quint - EaseIn",
  value: "easeInQuint"
}, {
  label: "Quint - EaseOut",
  value: "easeOutQuint"
}, {
  label: "Quint - EaseInOut",
  value: "easeInOutQuint"
}, {
  label: "Circ - EaseIn",
  value: "easeInCirc"
}, {
  label: "Circ - EaseOut",
  value: "easeOutCirc"
}, {
  label: "Circ - EaseInOut",
  value: "easeInOutCirc"
}, {
  label: "Back - EaseIn",
  value: "easeInBack"
}, {
  label: "Back - EaseOut",
  value: "easeOutBack"
}, {
  label: "Back - EaseInOut",
  value: "easeInOutBack"
}, {
  label: "Linear",
  value: "linear"
}];

var generateSpecs = function generateSpecs(_ref) {
  var steps = _ref.steps,
      hueStart = _ref.hueStart,
      hueEnd = _ref.hueEnd,
      hueCurve = _ref.hueCurve,
      satStart = _ref.satStart,
      satEnd = _ref.satEnd,
      satCurve = _ref.satCurve,
      satRate = _ref.satRate,
      lumStart = _ref.lumStart,
      lumEnd = _ref.lumEnd,
      lumCurve = _ref.lumCurve;
  return {
    specs: {
      steps: steps,
      hue_start: hueStart,
      hue_end: hueEnd,
      hue_curve: hueCurve,
      sat_start: satStart,
      sat_end: satEnd,
      sat_curve: satCurve,
      sat_rate: satRate,
      lum_start: lumStart,
      lum_end: lumEnd,
      lum_curve: lumCurve,
      modifier: 10
    }
  };
};

var Colorbox = function Colorbox(_ref2) {
  var onAddPalette = _ref2.onAddPalette,
      props = _objectWithoutProperties(_ref2, ["onAddPalette"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    steps: 11,
    hueStart: 34,
    hueEnd: 230,
    hueCurve: "easeInExpo",
    satStart: 4,
    satEnd: 90,
    satCurve: "easeOutQuad",
    satRate: 130,
    lumStart: 100,
    lumEnd: 53,
    lumCurve: "easeOutQuad"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      palette = _useState4[0],
      setPalette = _useState4[1];

  var handleInput = function handleInput(e) {
    var target = e.target;
    var name = target.name;
    var rawValue = target.value;
    var numValue = parseInt(rawValue);
    var finalValue = isNaN(numValue) ? rawValue : numValue;
    setForm(function (prev) {
      return _objectSpread({}, prev, _defineProperty({}, name, finalValue));
    });
  };

  var handleAddToPalette = function handleAddToPalette() {
    var paletteHexes = palette.map(function (p) {
      return p.hex;
    });
    onAddPalette(paletteHexes);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var specs = generateSpecs(form);
    var palette = Object(_utils_colorbox__WEBPACK_IMPORTED_MODULE_1__["default"])(specs);
    setPalette(palette);
  }, [form]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    mx: "auto",
    maxWidth: "64rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "ColorBox ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 1,
    fontWeight: 400,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "by Lyft Design"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 3,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    fontWeight: 700,
    mr: 2,
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Steps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "steps",
    type: "range",
    number: "1",
    value: form.steps,
    onChange: handleInput,
    width: 1,
    min: "3",
    max: "128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    fontSize: 2,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, form.steps)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    fontSize: 2,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    mb: 2,
    display: "block",
    fontWeight: 700,
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Hue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "hueStart",
    type: "range",
    value: form.hueStart,
    onChange: handleInput,
    number: "1",
    min: "0",
    max: "359",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    pl: 2,
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, form.hueStart)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "hueEnd",
    type: "range",
    number: "1",
    value: form.hueEnd,
    onChange: handleInput,
    min: "0",
    max: "359",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 2,
    pl: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, form.hueEnd)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Curve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    width: 1,
    name: "hueCurve",
    value: form.hueCurve,
    onChange: handleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, CURVES.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: c.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, c.label);
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    fontSize: 2,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    fontSize: 1,
    fontWeight: 700,
    display: "block",
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Saturation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "satStart",
    type: "range",
    number: "1",
    value: form.satStart,
    onChange: handleInput,
    min: "0",
    max: "100",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    textAlign: "right",
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, form.satStart)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "satEnd",
    type: "range",
    number: "1",
    value: form.satEnd,
    onChange: handleInput,
    min: "0",
    max: "100",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    fontSize: 2,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, form.satEnd)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Curve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    width: 1,
    name: "satCurve",
    value: form.hueCurve,
    onChange: handleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, CURVES.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: c.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, c.label);
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    fontSize: 2,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    fontSize: 1,
    fontWeight: 700,
    mb: 2,
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Luminosity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "lumStart",
    type: "range",
    width: 1,
    number: "1",
    value: form.lumStart,
    onChange: handleInput,
    min: "0",
    max: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, form.lumStart)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    width: 1,
    name: "lumEnd",
    type: "range",
    number: "1",
    value: form.lumEnd,
    onChange: handleInput,
    min: "0",
    max: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, form.lumEnd)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Curve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    width: 1,
    name: "lumCurve",
    value: form.lumCurve,
    onChange: handleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, CURVES.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: c.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, c.label);
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mt: 3,
    px: [3, 5, 6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, palette.map(function (p, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
      key: i,
      height: 32,
      bg: p.hex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    textAlign: "center",
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonPrimary, {
    mt: 2,
    borderRadius: 1,
    iconSize: 12,
    fontSize: 1,
    py: 1,
    button: "plus",
    bg: "black",
    color: "white",
    type: "button",
    onClick: handleAddToPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Add to palette")));
};

/* harmony default export */ __webpack_exports__["default"] = (Colorbox);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/Header.js */ "./elements/Header.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Select.js */ "./elements/Select.js")["default"], __webpack_require__(/*! ./components/ButtonPrimary.js */ "./components/ButtonPrimary.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.11a1f014af22ab33ab25.hot-update.js.map