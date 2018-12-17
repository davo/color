webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Logo, CombinationTools, TextButton, SiteFetch, Flex, Input, Button, Icon, Span, Img, P, TextLink, Form, Label, TextInput, Dl, Dt, Dd, Palette, ColorPicker, Fieldset, Legend, ColorBlindFilter, Likes, PaletteModal, A, TextBlock, IconOutlineBlock, IconBlock, FormBlock, ChartsBlock, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb-keyval */ "./node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var palx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! palx */ "./node_modules/palx/dist/index.js");
/* harmony import */ var palx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(palx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_useHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useHistory */ "./utils/useHistory.js");
/* harmony import */ var _utils_useInterval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useInterval */ "./utils/useInterval.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_findKey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/findKey */ "./node_modules/lodash/findKey.js");
/* harmony import */ var lodash_findKey__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_findKey__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _utils_defaultPalette__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/defaultPalette */ "./utils/defaultPalette.js");
/* harmony import */ var _utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/generateRandomPalette */ "./utils/generateRandomPalette.js");
/* harmony import */ var _utils_sortPalette__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/sortPalette */ "./utils/sortPalette.js");
/* harmony import */ var _utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/getAllCombos */ "./utils/getAllCombos.js");

var _jsxFileName = "/Users/sammdc/w/color/pages/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
























var encodeCombination = function encodeCombination(currentCombination) {
  return query_string__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(currentCombination);
};

var resetPinned = {
  color: false,
  bg: false,
  borderColor: false,
  parentBg: false
};
var debouncedUpdateCombos = lodash_debounce__WEBPACK_IMPORTED_MODULE_16___default()(function (updatedPalette, contrastRatio, setAvailableCombos) {
  var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(updatedPalette, contrastRatio);
  setAvailableCombos(availableCombos);
}, 500);

var Index = function Index(_ref) {
  var _React$createElement;

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_sortPalette__WEBPACK_IMPORTED_MODULE_21__["default"])(_utils_defaultPalette__WEBPACK_IMPORTED_MODULE_19__["default"])),
      _useState2 = _slicedToArray(_useState, 2),
      palette = _useState2[0],
      setPalette = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(_utils_defaultPalette__WEBPACK_IMPORTED_MODULE_19__["default"], 4.5);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      availableCombos = _useState4[0],
      setAvailableCombos = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      paletteModalIsOpen = _useState6[0],
      togglePaletteModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      likes = _useState8[0],
      updateLikes = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(4.5),
      _useState10 = _slicedToArray(_useState9, 2),
      contrastRatio = _useState10[0],
      setContrastRatio = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("none"),
      _useState12 = _slicedToArray(_useState11, 2),
      colorFilter = _useState12[0],
      setColorFilter = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState14 = _slicedToArray(_useState13, 2),
      paletteImage = _useState14[0],
      setPaletteImage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState16 = _slicedToArray(_useState15, 2),
      imageName = _useState16[0],
      setImageName = _useState16[1];

  var _useHistory = Object(_utils_useHistory__WEBPACK_IMPORTED_MODULE_6__["default"])({}),
      _useHistory2 = _slicedToArray(_useHistory, 2),
      currentState = _useHistory2[0],
      _useHistory2$ = _useHistory2[1],
      set = _useHistory2$.set,
      undo = _useHistory2$.undo,
      redo = _useHistory2$.redo,
      canRedo = _useHistory2$.canRedo,
      canUndo = _useHistory2$.canUndo;

  var currentCombination = currentState.present;

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(resetPinned),
      _useState18 = _slicedToArray(_useState17, 2),
      pinnedColors = _useState18[0],
      setPinnedColors = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState20 = _slicedToArray(_useState19, 2),
      borderWidth = _useState20[0],
      setBorderWidth = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("#07c"),
      _useState22 = _slicedToArray(_useState21, 2),
      palxColor = _useState22[0],
      setPalxColor = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    color: null,
    index: null
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      currentPickerColor = _useState24[0],
      setPickerColor = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState26 = _slicedToArray(_useState25, 2),
      currentComboProp = _useState26[0],
      setCurrentComboProp = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("url"),
      _useState28 = _slicedToArray(_useState27, 2),
      activeTab = _useState28[0],
      setActiveTab = _useState28[1];

  var _useInterval = Object(_utils_useInterval__WEBPACK_IMPORTED_MODULE_7__["default"])({
    duration: 3000,
    startImmediate: true,
    callback: function callback() {
      var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, pinnedColors, currentCombination, availableCombos);
      set(newCombo);
    }
  }),
      start = _useInterval.start,
      stop = _useInterval.stop,
      isRunning = _useInterval.isRunning;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["get"])("likes").then(function (likes) {
      likes && updateLikes(likes);
    });
    lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(router.query) && stop();
    var starterCombination = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(router.query) ? Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, pinnedColors, currentCombination, availableCombos) : router.query;
    set(starterCombination);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("keydown", handleKeyPress);
    return function () {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  var handleAutoCycling = function handleAutoCycling() {
    isRunning ? stop() : start();
  };

  var handleLike =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var currentLikes, deDuped;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return likes;

            case 2:
              currentLikes = _context.sent;
              deDuped = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_11___default()(_toConsumableArray(currentLikes).concat([currentCombination]), lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default.a);
              updateLikes(deDuped);
              _context.next = 7;
              return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["set"])("likes", deDuped);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function handleLike() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRemoveLike =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(index) {
      var newLikes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newLikes = likes.filter(function (_, i) {
                return index !== i;
              });
              updateLikes(newLikes);
              _context2.next = 4;
              return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["set"])("likes", newLikes);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function handleRemoveLike(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleNext = function handleNext() {
    if (canRedo) {
      return redo();
    }

    isRunning && stop();
    var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, pinnedColors, currentCombination, availableCombos);
    set(newCombo);
  };

  var handlePrevious = function handlePrevious() {
    if (canUndo) {
      stop();
      undo();
    }
  };

  var handleViewLike = function handleViewLike(index) {
    isRunning && stop();
    set(likes[index]);
  };

  var handleRemoveColor = function handleRemoveColor(color) {
    var alteredPalette = palette.filter(function (c) {
      return c !== color;
    });
    setPalette(alteredPalette);
    setPickerColor({
      color: null,
      index: null
    });
  };

  var handleAddColor = function handleAddColor() {
    var newPalette = _toConsumableArray(palette).concat(["#000000"]);

    setPalette(newPalette);
    setPickerColor({
      color: "#000000",
      index: newPalette.length - 1
    });
  };

  var handleKeyPress = function handleKeyPress(_ref4) {
    var key = _ref4.key;

    switch (key) {
      case "ArrowUp":
        handleLike();
        break;

      case "ArrowRight":
        handleNext();
        break;

      case "ArrowLeft":
        handlePrevious();
        break;
    }
  };

  var handleColorBlindFilter = function handleColorBlindFilter(e) {
    return setColorFilter(e.target.value);
  };

  var handleSiteFetch =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(palette) {
      var availableCombos, newCombo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setPalette(palette);
              setPinnedColors(resetPinned);
              availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(palette, contrastRatio);
              setAvailableCombos(availableCombos);
              newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, resetPinned, null, availableCombos);
              set(newCombo);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function handleSiteFetch(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleClearPalette = function handleClearPalette() {
    var clearedPalette = ["#000000", "#FFFFFF", "#2c7cb0", "#757575"];
    setPalette(clearedPalette);
    var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(clearedPalette, contrastRatio);
    setAvailableCombos(availableCombos);
    var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(clearedPalette, resetPinned, null, availableCombos);
    set(newCombo);
    setImageName(new Date());
    setPaletteImage("");
  };

  var handlePinColor = function handlePinColor(key) {
    return function () {
      setPinnedColors(function (prevState) {
        return _objectSpread({}, prevState, _defineProperty({}, key, !prevState[key]));
      });
    };
  };

  var handleComboColorUpdate = function handleComboColorUpdate(newColor, tooltipKey) {
    var newCombo = _objectSpread({}, currentCombination, _defineProperty({}, tooltipKey, newColor));

    set(newCombo);
  };

  var handleImageUpload =
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e) {
      var res, palette, availableCombos, newCombo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setPaletteImage({
                url: URL.createObjectURL(e.target.files[0]),
                name: null,
                username: null
              });
              _context4.next = 3;
              return fetch("https://image-palette.now.sh", {
                method: "POST",
                body: e.target.files[0]
              });

            case 3:
              res = _context4.sent;
              _context4.next = 6;
              return res.json();

            case 6:
              palette = _context4.sent;
              setPalette(palette);
              setPinnedColors(resetPinned);
              availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(palette, contrastRatio);
              setAvailableCombos(availableCombos);
              newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, resetPinned, null, availableCombos);
              set(newCombo);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function handleImageUpload(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleBorderWidthChange = function handleBorderWidthChange(e) {
    return setBorderWidth(parseInt(e.target.value));
  };

  var handleFetchFromUnsplash =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var res, _ref8, colors, url, name, username, availableCombos, newCombo;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch("https://unsplash-palette.now.sh");

            case 2:
              res = _context5.sent;
              _context5.next = 5;
              return res.json();

            case 5:
              _ref8 = _context5.sent;
              colors = _ref8.colors;
              url = _ref8.url;
              name = _ref8.name;
              username = _ref8.username;
              setPalette(colors);
              setPinnedColors(resetPinned);
              availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(colors, contrastRatio);
              setAvailableCombos(availableCombos);
              newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, resetPinned, null, availableCombos);
              set(newCombo);
              setPaletteImage({
                url: url,
                name: name,
                username: username
              });

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function handleFetchFromUnsplash() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handlePalxColor = function handlePalxColor(e) {
    setPalxColor(e.target.value);
  };

  var handleUsePalx = function handleUsePalx() {
    var newPaletteObj = palx__WEBPACK_IMPORTED_MODULE_4___default()(palxColor);
    var newPalette = lodash_reduce__WEBPACK_IMPORTED_MODULE_14___default()(newPaletteObj, function (acc, curr) {
      return lodash_isArray__WEBPACK_IMPORTED_MODULE_10___default()(curr) ? _toConsumableArray(acc).concat(_toConsumableArray(curr)) : acc;
    }, []);
    setPalette(newPalette);
    setPinnedColors(resetPinned);
    var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(newPalette, contrastRatio);
    setAvailableCombos(availableCombos);
    var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_20__["default"])(newPalette, resetPinned, null, availableCombos);
    set(newCombo);
  };

  var handlePaletteColorClick = function handlePaletteColorClick(color, index) {
    var comboColorProp = lodash_findKey__WEBPACK_IMPORTED_MODULE_15___default()(currentCombination, function (c) {
      return c === color;
    });

    if (comboColorProp) {
      stop();
      setCurrentComboProp(comboColorProp);
    }

    setPickerColor({
      color: color,
      index: index
    });
  };

  var handleSetEditColor = function handleSetEditColor(color) {
    isRunning && stop();
    setPickerColor({
      color: color,
      index: currentPickerColor.index
    });

    var updatedPalette = _toConsumableArray(palette);

    updatedPalette[currentPickerColor.index] = color;
    setPalette(updatedPalette);

    if (currentComboProp) {
      set(_objectSpread({}, currentCombination, _defineProperty({}, currentComboProp, color)));
    }

    debouncedUpdateCombos(updatedPalette, contrastRatio, setAvailableCombos);
  };

  var handleContrastRatioChange = function handleContrastRatioChange(e) {
    var newContrastRatio = lodash_toNumber__WEBPACK_IMPORTED_MODULE_13___default()(e.target.value);
    setContrastRatio(newContrastRatio);
    var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_22__["default"])(palette, newContrastRatio);
    setAvailableCombos(availableCombos);
  };

  var handleActiveTab = function handleActiveTab(value) {
    return function () {
      return setActiveTab(value);
    };
  };

  var handleColorClick = function handleColorClick(color, key) {
    isRunning && stop();
    setCurrentComboProp(key);
    var paletteIndex = palette.findIndex(function (p) {
      return p === color;
    });
    setPickerColor({
      color: color,
      index: paletteIndex
    });
  };

  var handleLinkShare = function handleLinkShare() {
    var _window$location = window.location,
        protocol = _window$location.protocol,
        hostname = _window$location.hostname,
        pathname = _window$location.pathname;
    clipboard_copy__WEBPACK_IMPORTED_MODULE_17___default()("".concat(protocol, "//").concat(hostname).concat(pathname, "?").concat(encodeCombination(currentCombination)));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    display: "flex",
    flexWrap: "wrap",
    width: 1,
    position: "relative",
    bg: currentCombination.parentBg,
    style: {
      overflow: "hidden",
      filter: colorFilter === "none" ? "none" : "url(/static/filters.svg#".concat(colorFilter, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    bg: "white",
    display: "flex",
    alignItems: "center",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 4,
    py: 2,
    pl: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CombinationTools, {
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPrevious: handlePrevious,
    onNext: handleNext,
    onPinColor: handlePinColor,
    onLike: handleLike,
    onAutoCycling: handleAutoCycling,
    isRunning: isRunning,
    onComboColorUpdate: handleComboColorUpdate,
    onColorClick: handleColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: [1, 1 / 4],
    bg: "rgba(255,255,255,1)",
    borderTop: "1px solid rgba(0,0,0,.1)",
    borderRight: "1px solid rgba(0,0,0,.1)",
    color: "black",
    pb: 4,
    style: {
      minHeight: "100vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    py: 3,
    px: 3,
    bg: "gray.9",
    borderBottom: "1px solid rgba(0,0,0,.1)",
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton, {
    onClick: handleActiveTab("url"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "url" ? "blue.4" : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "URL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton, {
    onClick: handleActiveTab("image"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "image" ? "blue.4" : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, "Image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton, {
    onClick: handleActiveTab("generative"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "generative" ? "blue.4" : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, "Generative")), activeTab === "url" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SiteFetch, {
    onSubmit: handleSiteFetch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  })), activeTab === "image" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    mt: 3,
    mb: 2,
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    border: "1px solid rgba(0,0,0,.1)",
    py: 3,
    width: 1,
    pl: 3,
    key: imageName,
    type: "file",
    accept: ".png, .jpg, .jpeg",
    onChange: handleImageUpload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 2,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    bg: "white",
    border: "1px solid black",
    fontSize: 1,
    borderRadius: 2,
    py: 2,
    px: 3,
    ml: "auto",
    display: "flex",
    justifyContent: "center",
    width: "auto",
    alignItems: "center",
    fontWeight: 700,
    onClick: handleFetchFromUnsplash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    viewBox: "0 0 32 32",
    size: 16,
    type: "unsplash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    pl: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, "Unsplash photo")))), paletteImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton, {
    ml: "auto",
    onClick: handleClearPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, "Clear Image")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    p: 2,
    border: "1px solid rgba(0,0,0,.1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
    src: paletteImage.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }), paletteImage.name && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
    color: "gray.5",
    fontSize: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }, "Photo by", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextLink, {
    href: "https://unsplash.com/@".concat(paletteImage.username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, paletteImage.name), " ", "on", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextLink, {
    href: "https://unsplash.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  }, "Unsplash"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    fontWeight: 700,
    mt: 3,
    mb: 2,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, activeTab === "generative" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    width: 1,
    mb: 4,
    px: 3,
    borderRadius: 2,
    style: {
      overflow: "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    mb: 2,
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, "Base Color"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    width: 48,
    fontSize: 2,
    py: 3,
    readOnly: true,
    border: 0,
    bg: palxColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, (_React$createElement = {
    type: "text",
    value: palxColor,
    onChange: handlePalxColor,
    fontSize: 2,
    fontWeight: 700,
    py: 3,
    px: 3,
    width: [3 / 4]
  }, _defineProperty(_React$createElement, "type", "url"), _defineProperty(_React$createElement, "border", "0"), _defineProperty(_React$createElement, "bg", "gray.8"), _defineProperty(_React$createElement, "borderRadius", 0), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 521
  }), _defineProperty(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    py: 3,
    width: 1 / 4,
    fontSize: 2,
    bg: "black",
    color: "white",
    fontWeight: 700,
    border: "none",
    style: {
      cursor: "pointer",
      minWidth: 128
    },
    onClick: handleUsePalx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, "Generate"), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dl, {
    width: 1 / 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dt, {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, "Accessible Combos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dd, {
    fontSize: 6,
    fontWeight: 800,
    ml: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, availableCombos.length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dl, {
    width: 1 / 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dt, {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: this
  }, "Combos with Parent Bg"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dd, {
    fontSize: 6,
    fontWeight: 800,
    ml: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, availableCombos.length * palette.length))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Palette, {
    palette: palette,
    pickerColor: currentPickerColor,
    activeColors: Object.values(currentCombination),
    onClick: handlePaletteColorClick,
    onAddColor: handleAddColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton, {
    mt: 3,
    ml: "auto",
    onClick: handleClearPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, "Clear palette"))), currentPickerColor.color && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onOutsideClick: function onOutsideClick() {
      setPickerColor({
        color: null,
        index: null
      });
      setCurrentComboProp(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorPicker, {
    currentColor: currentPickerColor.color,
    onChange: handleSetEditColor,
    onRemoveColor: handleRemoveColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    mt: 3,
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fieldset, {
    border: "0",
    p: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Legend, {
    fontWeight: 700,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, "Contrast Ratio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    mx: -3,
    py: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    type: "radio",
    name: "contrastRatio",
    value: 3,
    onChange: handleContrastRatioChange,
    checked: contrastRatio === 3,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, "3:1"), " AA large")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    type: "radio",
    name: "contrastRatio",
    value: 4.5,
    onChange: handleContrastRatioChange,
    checked: contrastRatio === 4.5,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }, "4.5:1"), " AA")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    type: "radio",
    name: "contrastRatio",
    value: 7,
    onChange: handleContrastRatioChange,
    checked: contrastRatio === 7,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  }, "7:1"), " AAA"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    mt: 4,
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    fontWeight: 700,
    fontSize: 2,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }, "Border width"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    value: borderWidth,
    onChange: handleBorderWidthChange,
    type: "number",
    py: 2,
    px: 2,
    fontSize: 2,
    fontWeight: 600,
    borderRadius: 2,
    border: "1px solid " + _theme__WEBPACK_IMPORTED_MODULE_18__["default"].colors.gray[8],
    min: 0,
    max: 32,
    step: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorBlindFilter, {
    onChange: handleColorBlindFilter,
    currentValue: colorFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Likes, {
    likes: likes,
    onSelectLike: handleViewLike,
    onRemoveLike: handleRemoveLike,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: function onClick() {
      return togglePaletteModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, "Export Palette"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaletteModal, {
    isOpen: paletteModalIsOpen,
    togglePaletteModal: togglePaletteModal,
    palette: palette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: handleLinkShare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }, "Share current combination"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    display: "flex",
    mt: 2,
    borderTop: "1px solid rgba(0,0,0,.2)",
    py: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    display: "block",
    href: "https://cloudflare.design",
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
    },
    __self: this
  }, "Cloudflare Design"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://github.com/cloudflare-design",
    ml: "auto",
    fontSize: 2,
    color: "blue.4",
    display: "block",
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }, "GitHub")))), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(currentCombination) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 3 / 4,
    pb: 5,
    pt: 4,
    borderTop: "1px solid rgba(0,0,0,.1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    maxWidth: "48em",
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextBlock, {
    borderWidth: borderWidth,
    currentCombination: currentCombination,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconOutlineBlock, {
    currentCombination: currentCombination,
    borderWidth: borderWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconBlock, {
    currentCombination: currentCombination,
    borderWidth: borderWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
    currentCombination: currentCombination,
    borderWidth: borderWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChartsBlock, {
    currentCombination: currentCombination,
    borderWidth: borderWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Logo.js */ "./components/Logo.js")["default"], __webpack_require__(/*! ./components/CombinationTools.js */ "./components/CombinationTools.js")["default"], __webpack_require__(/*! ./components/TextButton.js */ "./components/TextButton.js")["default"], __webpack_require__(/*! ./components/SiteFetch.js */ "./components/SiteFetch.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Button.js */ "./elements/Button.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./elements/Img.js */ "./elements/Img.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./components/TextLink.js */ "./components/TextLink.js")["default"], __webpack_require__(/*! ./elements/Form.js */ "./elements/Form.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./components/TextInput.js */ "./components/TextInput.js")["default"], __webpack_require__(/*! ./elements/Dl.js */ "./elements/Dl.js")["default"], __webpack_require__(/*! ./elements/Dt.js */ "./elements/Dt.js")["default"], __webpack_require__(/*! ./elements/Dd.js */ "./elements/Dd.js")["default"], __webpack_require__(/*! ./components/Palette.js */ "./components/Palette.js")["default"], __webpack_require__(/*! ./components/ColorPicker.js */ "./components/ColorPicker.js")["default"], __webpack_require__(/*! ./elements/Fieldset.js */ "./elements/Fieldset.js")["default"], __webpack_require__(/*! ./elements/Legend.js */ "./elements/Legend.js")["default"], __webpack_require__(/*! ./components/ColorBlindFilter.js */ "./components/ColorBlindFilter.js")["default"], __webpack_require__(/*! ./components/Likes.js */ "./components/Likes.js")["default"], __webpack_require__(/*! ./components/PaletteModal.js */ "./components/PaletteModal.js")["default"], __webpack_require__(/*! ./elements/A.js */ "./elements/A.js")["default"], __webpack_require__(/*! ./components/TextBlock.js */ "./components/TextBlock.js")["default"], __webpack_require__(/*! ./components/IconOutlineBlock.js */ "./components/IconOutlineBlock.js")["default"], __webpack_require__(/*! ./components/IconBlock.js */ "./components/IconBlock.js")["default"], __webpack_require__(/*! ./components/FormBlock.js */ "./components/FormBlock.js")["default"], __webpack_require__(/*! ./components/ChartsBlock.js */ "./components/ChartsBlock.js")["default"], __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.ecf31bfc272c826b2f5d.hot-update.js.map