module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ "@chec/commerce.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);

const checAPIKey = "pk_2543330dc851058b6763ae4de9f65c5a12917b3bd3e26";
const devEnvironment = true;
const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-03-10'
    }
  }
};

if (devEnvironment && !checAPIKey) {
  throw Error('Your public API key must be provided as an environment variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami');
}

/* harmony default export */ __webpack_exports__["default"] = (new _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default.a(checAPIKey, devEnvironment, commerceConfig));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/scss/style.scss */ "./style/scss/style.scss");
/* harmony import */ var _style_scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions_authenticateActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/authenticateActions */ "./store/actions/authenticateActions.js");
var _jsxFileName = "C:\\Users\\sandi\\chec-store\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* global process */








const MyApp = ({
  Component,
  pageProps
}) => {
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_2__["useStore"])(pageProps.initialState);
  const {
    0: stripePromise,
    1: setStripePromise
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (false) {}

    Object(_store_actions_authenticateActions__WEBPACK_IMPORTED_MODULE_6__["setCustomer"])();
    _lib_commerce__WEBPACK_IMPORTED_MODULE_4__["default"].products.list().then(res => {
      store.dispatch({
        type: 'STORE_PRODUCTS',
        payload: res.data
      });
    });
    _lib_commerce__WEBPACK_IMPORTED_MODULE_4__["default"].categories.list().then(res => {
      console.log(res.data);
      store.dispatch({
        type: 'STORE_CATEGORIES',
        payload: res.data
      });
    });
  }, [store]);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    stripe: stripePromise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: STORE_CATEGORIES, STORE_PRODUCTS, RETRIEVE_CART_SUCCESS, RETRIEVE_CART_ERROR, ADD_TO_CART_SUCCESS, ADD_TO_CART_ERROR, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_ERROR, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_CART_ERROR, CAPTURE_ORDER_SUCCESS, GENERATE_CHECKOUT_TOKEN, GET_SHIPPING_OPTIONS, REMOVE_SHIPPING_OPTIONS, UPDATE_CHECKOUT_LIVE_OBJECT, ABORT_CHECKOUT, SET_CUSTOMER, CLEAR_CUSTOMER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_CATEGORIES", function() { return STORE_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_PRODUCTS", function() { return STORE_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETRIEVE_CART_SUCCESS", function() { return RETRIEVE_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETRIEVE_CART_ERROR", function() { return RETRIEVE_CART_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_SUCCESS", function() { return ADD_TO_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_ERROR", function() { return ADD_TO_CART_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CART_ITEM_SUCCESS", function() { return UPDATE_CART_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CART_ITEM_ERROR", function() { return UPDATE_CART_ITEM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART_SUCCESS", function() { return REMOVE_FROM_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART_ERROR", function() { return REMOVE_FROM_CART_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTURE_ORDER_SUCCESS", function() { return CAPTURE_ORDER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_CHECKOUT_TOKEN", function() { return GENERATE_CHECKOUT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SHIPPING_OPTIONS", function() { return GET_SHIPPING_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SHIPPING_OPTIONS", function() { return REMOVE_SHIPPING_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHECKOUT_LIVE_OBJECT", function() { return UPDATE_CHECKOUT_LIVE_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABORT_CHECKOUT", function() { return ABORT_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CUSTOMER", function() { return SET_CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CUSTOMER", function() { return CLEAR_CUSTOMER; });
// Define action types for storing static data products and categories
const STORE_CATEGORIES = 'STORE_CATEGORIES';
const STORE_PRODUCTS = 'STORE_PRODUCTS'; // Define cart action types

const RETRIEVE_CART_SUCCESS = 'RETRIEVE_CART_SUCCESS';
const RETRIEVE_CART_ERROR = 'RETRIEVE_CART_ERROR';
const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';
const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';
const UPDATE_CART_ITEM_ERROR = 'UPDATE_CART_ITEM_ERROR';
const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
const REMOVE_FROM_CART_ERROR = 'REMOVE_FROM_CART_ERROR'; // Define checkout action types

const CAPTURE_ORDER_SUCCESS = 'CAPTURE_ORDER_SUCCESS';
const GENERATE_CHECKOUT_TOKEN = 'GENERATE_CHECKOUT_TOKEN';
const GET_SHIPPING_OPTIONS = 'GET_SHIPPING_OPTIONS';
const REMOVE_SHIPPING_OPTIONS = 'REMOVE_SHIPPING_OPTIONS';
const UPDATE_CHECKOUT_LIVE_OBJECT = 'UPDATE_CHECKOUT_LIVE_OBJECT';
const ABORT_CHECKOUT = 'ABORT_CHECKOUT'; // Define customer/authentication action types

const SET_CUSTOMER = 'SET_CUSTOMER';
const CLEAR_CUSTOMER = 'CLEAR_CUSTOMER';

/***/ }),

/***/ "./store/actions/authenticateActions.js":
/*!**********************************************!*\
  !*** ./store/actions/authenticateActions.js ***!
  \**********************************************/
/*! exports provided: setCustomer, clearCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomer", function() { return setCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCustomer", function() { return clearCustomer; });
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");


/**
 * Fetch the customer information from Commerce.js. If the customer is not
 * logged in yet, an empty promise will be returned.
 */

const setCustomer = () => dispatch => {
  // First check is customer is logged in and just return out if they're not
  const isLoggedIn = _lib_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].customer.isLoggedIn();

  if (!isLoggedIn || isLoggedIn === false) {
    return Promise.resolve(null);
  }

  return _lib_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].customer.about().then(customer => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CUSTOMER"],
      payload: customer.data
    });
  }).catch(() => {
    // Most likely a 404, meaning the customer doesn't exist. It should be logged out
    _lib_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].customer.logout();
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CUSTOMER"],
      payload: null
    });
  });
};
/**
 * Clear the logged in customer from state, and from Commerce.js.
 */

const clearCustomer = () => dispatch => {
  _lib_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].customer.logout();
  dispatch({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CUSTOMER"]
  });
};

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/actionTypes */ "./store/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store; // Declare initial state

const initialState = {
  categories: [],
  products: [],
  cart: {},
  checkout: {
    shippingOptions: [],
    checkoutTokenObject: {}
  },
  orderReceipt: null,
  customer: null
}; // Create reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      // These are server side rendered from MyApp.getInitialProps, everything else should
      // come from client side state and should not be overwritten here by subsequent server
      // side hydration actions.
      const {
        categories,
        products
      } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        categories,
        products
      });
    // Dispatch in App SSR
    // Check if action dispatched is STORE_CATEGORIES and act on that

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["STORE_CATEGORIES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload
      });
    // Dispatch in App SSR
    // Check if action dispatched is STORE_PRODUCTS and act on that

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["STORE_PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload
      });
    // Dispatch in App client-side
    // Check if action dispatched is SET_CUSTOMER and act on that

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["CLEAR_CUSTOMER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        customer: null
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["SET_CUSTOMER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        customer: action.payload
      });
    // Dispatch in Product client-side
    // Check if action dispatched is STORE_CART and act on that

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["RETRIEVE_CART_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });
    // Dispatch in ProductDetail client-side
    // Check if action dispatched is ADD_TO_CART and act on that

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["ADD_TO_CART_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload.cart
      });
    // Dispatch in Cart client-side
    // Check if action dispatched is UPDATE_CART_ITEM and act on that

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["UPDATE_CART_ITEM_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload.cart
      });
    // Dispatch in Cart client-side
    // Check if action dispatched is REMOVE_FROM_CART and act on that

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["REMOVE_FROM_CART_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload.cart
      });
    // Dispatch in Checkout client-side

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["GENERATE_CHECKOUT_TOKEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        checkout: _objectSpread(_objectSpread({}, state.checkout), {}, {
          checkoutTokenObject: action.payload
        })
      });
    // Dispatch in Checkout client-side

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["GET_SHIPPING_OPTIONS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        checkout: _objectSpread(_objectSpread({}, state.checkout), {}, {
          shippingOptions: action.payload
        })
      });
    // Dispatch in Checkout client-side

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["REMOVE_SHIPPING_OPTIONS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        checkout: _objectSpread(_objectSpread({}, state.checkout), {}, {
          shippingOptions: []
        })
      });
    // Dispatch in Checkout client-side

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["UPDATE_CHECKOUT_LIVE_OBJECT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        checkout: _objectSpread(_objectSpread({}, state.checkout), {}, {
          checkoutTokenObject: _objectSpread(_objectSpread({}, state.checkout.checkoutTokenObject), {}, {
            live: action.payload
          })
        })
      });
    // Dispatch in Checkout client-side

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["ABORT_CHECKOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        checkout: initialState.checkout
      });
    // Dispatch in Checkout client-side

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["CAPTURE_ORDER_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        checkout: initialState.checkout,
        orderReceipt: action.payload
      });

    default:
      return state;
  }
}; // Enable Redux dev tools


const devtools =  false ? undefined : f => f; // Create a makeStore function and pass in reducer to create the store

const makeStore = () => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a), devtools));
};

const initializeStore = initialState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(initialState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (initialState && store) {
    _store = makeStore(_objectSpread(_objectSpread({}, store.getState()), initialState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) {
    return _store;
  } // Create the store once in the client


  if (!store) {
    store = _store;
  }

  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./style/scss/style.scss":
/*!*******************************!*\
  !*** ./style/scss/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2F1dGhlbnRpY2F0ZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RyaXBlL3N0cmlwZS1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiY2hlY0FQSUtleSIsInByb2Nlc3MiLCJkZXZFbnZpcm9ubWVudCIsImNvbW1lcmNlQ29uZmlnIiwiYXhpb3NDb25maWciLCJoZWFkZXJzIiwiRXJyb3IiLCJDb21tZXJjZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsInN0cmlwZVByb21pc2UiLCJzZXRTdHJpcGVQcm9taXNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRDdXN0b21lciIsImNvbW1lcmNlIiwicHJvZHVjdHMiLCJsaXN0IiwidGhlbiIsInJlcyIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIiwiY2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJTVE9SRV9DQVRFR09SSUVTIiwiU1RPUkVfUFJPRFVDVFMiLCJSRVRSSUVWRV9DQVJUX1NVQ0NFU1MiLCJSRVRSSUVWRV9DQVJUX0VSUk9SIiwiQUREX1RPX0NBUlRfU1VDQ0VTUyIsIkFERF9UT19DQVJUX0VSUk9SIiwiVVBEQVRFX0NBUlRfSVRFTV9TVUNDRVNTIiwiVVBEQVRFX0NBUlRfSVRFTV9FUlJPUiIsIlJFTU9WRV9GUk9NX0NBUlRfU1VDQ0VTUyIsIlJFTU9WRV9GUk9NX0NBUlRfRVJST1IiLCJDQVBUVVJFX09SREVSX1NVQ0NFU1MiLCJHRU5FUkFURV9DSEVDS09VVF9UT0tFTiIsIkdFVF9TSElQUElOR19PUFRJT05TIiwiUkVNT1ZFX1NISVBQSU5HX09QVElPTlMiLCJVUERBVEVfQ0hFQ0tPVVRfTElWRV9PQkpFQ1QiLCJBQk9SVF9DSEVDS09VVCIsIlNFVF9DVVNUT01FUiIsIkNMRUFSX0NVU1RPTUVSIiwiaXNMb2dnZWRJbiIsImN1c3RvbWVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhYm91dCIsImNhdGNoIiwibG9nb3V0IiwiY2xlYXJDdXN0b21lciIsImNhcnQiLCJjaGVja291dCIsInNoaXBwaW5nT3B0aW9ucyIsImNoZWNrb3V0VG9rZW5PYmplY3QiLCJvcmRlclJlY2VpcHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwibGl2ZSIsImRldnRvb2xzIiwid2luZG93IiwiZiIsIm1ha2VTdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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Q3pCaUUsVUFBTSxHQUFHTixTQUFTLGlDQUNiM0QsS0FBSyxDQUFDa0UsUUFBTixFQURhLEdBRWJoRSxZQUZhLEVBQWxCLENBRHlCLENBS3pCOztBQUNBRixTQUFLLEdBQUdtRSxTQUFSO0FBQ0QsR0FaOEMsQ0FjL0M7OztBQUNBLFlBQW1DO0FBQ2pDLFdBQU9GLE1BQVA7QUFDRCxHQWpCOEMsQ0FrQi9DOzs7QUFDQSxNQUFJLENBQUNqRSxLQUFMLEVBQVk7QUFDVkEsU0FBSyxHQUFHaUUsTUFBUjtBQUNEOztBQUVELFNBQU9BLE1BQVA7QUFDRCxDQXhCTTtBQTJCQSxTQUFTaEUsUUFBVCxDQUFrQkMsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTUYsS0FBSyxHQUFHb0UscURBQU8sQ0FBQyxNQUFNSixlQUFlLENBQUM5RCxZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPRixLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLRCw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IENvbW1lcmNlIGZyb20gJ0BjaGVjL2NvbW1lcmNlLmpzJztcclxuXHJcbmNvbnN0IGNoZWNBUElLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEVDX1BVQkxJQ19LRVk7XHJcbmNvbnN0IGRldkVudmlyb25tZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcblxyXG5jb25zdCBjb21tZXJjZUNvbmZpZyA9IHtcclxuICBheGlvc0NvbmZpZzoge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnWC1DaGVjLUFnZW50JzogJ2NvbW1lcmNlLmpzL3YyJyxcclxuICAgICAgJ0NoZWMtVmVyc2lvbic6ICcyMDIxLTAzLTEwJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmlmIChkZXZFbnZpcm9ubWVudCAmJiAhY2hlY0FQSUtleSkge1xyXG4gIHRocm93IEVycm9yKCdZb3VyIHB1YmxpYyBBUEkga2V5IG11c3QgYmUgcHJvdmlkZWQgYXMgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUgbmFtZWQgTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfS0VZLiBPYnRhaW4geW91ciBDaGVjIHB1YmxpYyBrZXkgYnkgbG9nZ2luZyBpbnRvIHlvdXIgQ2hlYyBhY2NvdW50IGFuZCBuYXZpZ2F0ZSB0byBTZXR1cCA+IERldmVsb3Blciwgb3IgY2FuIGJlIG9idGFpbmVkIHdpdGggdGhlIENoZWMgQ0xJIHZpYSB3aXRoIHRoZSBjb21tYW5kIGNoZWMgd2hvYW1pJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb21tZXJjZShcclxuICBjaGVjQVBJS2V5LFxyXG4gIGRldkVudmlyb25tZW50LFxyXG4gIGNvbW1lcmNlQ29uZmlnLFxyXG4pO1xyXG4iLCIvKiBnbG9iYWwgcHJvY2VzcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc3R5bGUvc2Nzcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyICB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uL2xpYi9jb21tZXJjZSc7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XHJcbmltcG9ydCB7IHNldEN1c3RvbWVyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoZW50aWNhdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBbc3RyaXBlUHJvbWlzZSwgc2V0U3RyaXBlUHJvbWlzZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZKSB7IC8vIGhhcyBBUEkga2V5XHJcbiAgICAgIHNldFN0cmlwZVByb21pc2UobG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VzdG9tZXIoKTtcclxuXHJcbiAgICBjb21tZXJjZS5wcm9kdWN0cy5saXN0KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnU1RPUkVfUFJPRFVDVFMnLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb21tZXJjZS5jYXRlZ29yaWVzLmxpc3QoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnU1RPUkVfQ0FURUdPUklFUycsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICB9LCBbc3RvcmVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnRcclxuICAgICAgICB7Li4ucGFnZVByb3BzfVxyXG4gICAgICAgIHN0cmlwZT17c3RyaXBlUHJvbWlzZX1cclxuICAgICAgLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCIvLyBEZWZpbmUgYWN0aW9uIHR5cGVzIGZvciBzdG9yaW5nIHN0YXRpYyBkYXRhIHByb2R1Y3RzIGFuZCBjYXRlZ29yaWVzXHJcbmV4cG9ydCBjb25zdCBTVE9SRV9DQVRFR09SSUVTID0gJ1NUT1JFX0NBVEVHT1JJRVMnO1xyXG5leHBvcnQgY29uc3QgU1RPUkVfUFJPRFVDVFMgPSAnU1RPUkVfUFJPRFVDVFMnO1xyXG5cclxuLy8gRGVmaW5lIGNhcnQgYWN0aW9uIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBSRVRSSUVWRV9DQVJUX1NVQ0NFU1MgPSAnUkVUUklFVkVfQ0FSVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFJJRVZFX0NBUlRfRVJST1IgPSAnUkVUUklFVkVfQ0FSVF9FUlJPUic7XHJcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVF9TVUNDRVNTID0gJ0FERF9UT19DQVJUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlRfRVJST1IgPSAnQUREX1RPX0NBUlRfRVJST1InO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NBUlRfSVRFTV9TVUNDRVNTID0gJ1VQREFURV9DQVJUX0lURU1fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0FSVF9JVEVNX0VSUk9SID0gJ1VQREFURV9DQVJUX0lURU1fRVJST1InO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZST01fQ0FSVF9TVUNDRVNTID0gJ1JFTU9WRV9GUk9NX0NBUlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRlJPTV9DQVJUX0VSUk9SID0gJ1JFTU9WRV9GUk9NX0NBUlRfRVJST1InO1xyXG5cclxuXHJcbi8vIERlZmluZSBjaGVja291dCBhY3Rpb24gdHlwZXNcclxuZXhwb3J0IGNvbnN0IENBUFRVUkVfT1JERVJfU1VDQ0VTUyA9ICdDQVBUVVJFX09SREVSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VORVJBVEVfQ0hFQ0tPVVRfVE9LRU4gPSAnR0VORVJBVEVfQ0hFQ0tPVVRfVE9LRU4nO1xyXG5leHBvcnQgY29uc3QgR0VUX1NISVBQSU5HX09QVElPTlMgPSAnR0VUX1NISVBQSU5HX09QVElPTlMnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NISVBQSU5HX09QVElPTlMgPSAnUkVNT1ZFX1NISVBQSU5HX09QVElPTlMnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NIRUNLT1VUX0xJVkVfT0JKRUNUID0gJ1VQREFURV9DSEVDS09VVF9MSVZFX09CSkVDVCc7XHJcbmV4cG9ydCBjb25zdCBBQk9SVF9DSEVDS09VVCA9ICdBQk9SVF9DSEVDS09VVCc7XHJcblxyXG5cclxuLy8gRGVmaW5lIGN1c3RvbWVyL2F1dGhlbnRpY2F0aW9uIGFjdGlvbiB0eXBlc1xyXG5leHBvcnQgY29uc3QgU0VUX0NVU1RPTUVSID0gJ1NFVF9DVVNUT01FUic7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DVVNUT01FUiA9ICdDTEVBUl9DVVNUT01FUic7XHJcbiIsImltcG9ydCBjb21tZXJjZSBmcm9tICcuLi8uLi9saWIvY29tbWVyY2UnXHJcbmltcG9ydCB7IENMRUFSX0NVU1RPTUVSLCBTRVRfQ1VTVE9NRVIgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBGZXRjaCB0aGUgY3VzdG9tZXIgaW5mb3JtYXRpb24gZnJvbSBDb21tZXJjZS5qcy4gSWYgdGhlIGN1c3RvbWVyIGlzIG5vdFxyXG4gKiBsb2dnZWQgaW4geWV0LCBhbiBlbXB0eSBwcm9taXNlIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0Q3VzdG9tZXIgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAvLyBGaXJzdCBjaGVjayBpcyBjdXN0b21lciBpcyBsb2dnZWQgaW4gYW5kIGp1c3QgcmV0dXJuIG91dCBpZiB0aGV5J3JlIG5vdFxyXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSBjb21tZXJjZS5jdXN0b21lci5pc0xvZ2dlZEluKCk7XHJcbiAgaWYgKCFpc0xvZ2dlZEluIHx8IGlzTG9nZ2VkSW4gPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gIH1cclxuICByZXR1cm4gY29tbWVyY2UuY3VzdG9tZXIuYWJvdXQoKS50aGVuKChjdXN0b21lcikgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ1VTVE9NRVIsIHBheWxvYWQ6IGN1c3RvbWVyLmRhdGEgfSlcclxuICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAvLyBNb3N0IGxpa2VseSBhIDQwNCwgbWVhbmluZyB0aGUgY3VzdG9tZXIgZG9lc24ndCBleGlzdC4gSXQgc2hvdWxkIGJlIGxvZ2dlZCBvdXRcclxuICAgIGNvbW1lcmNlLmN1c3RvbWVyLmxvZ291dCgpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ1VTVE9NRVIsIHBheWxvYWQ6IG51bGwgfSlcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFyIHRoZSBsb2dnZWQgaW4gY3VzdG9tZXIgZnJvbSBzdGF0ZSwgYW5kIGZyb20gQ29tbWVyY2UuanMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2xlYXJDdXN0b21lciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbW1lcmNlLmN1c3RvbWVyLmxvZ291dCgpO1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogQ0xFQVJfQ1VTVE9NRVIgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuXHJcbmltcG9ydCB7XHJcbiAgU1RPUkVfUFJPRFVDVFMsXHJcbiAgU1RPUkVfQ0FURUdPUklFUyxcclxuICBSRVRSSUVWRV9DQVJUX1NVQ0NFU1MsXHJcbiAgQUREX1RPX0NBUlRfU1VDQ0VTUyxcclxuICBVUERBVEVfQ0FSVF9JVEVNX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0ZST01fQ0FSVF9TVUNDRVNTLFxyXG4gIENBUFRVUkVfT1JERVJfU1VDQ0VTUyxcclxuICBHRU5FUkFURV9DSEVDS09VVF9UT0tFTixcclxuICBHRVRfU0hJUFBJTkdfT1BUSU9OUyxcclxuICBSRU1PVkVfU0hJUFBJTkdfT1BUSU9OUyxcclxuICBVUERBVEVfQ0hFQ0tPVVRfTElWRV9PQkpFQ1QsXHJcbiAgQUJPUlRfQ0hFQ0tPVVQsXHJcbiAgU0VUX0NVU1RPTUVSLFxyXG4gIENMRUFSX0NVU1RPTUVSLFxyXG59IGZyb20gJy4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XHJcblxyXG5sZXQgc3RvcmVcclxuLy8gRGVjbGFyZSBpbml0aWFsIHN0YXRlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjYXRlZ29yaWVzOiBbXSxcclxuICBwcm9kdWN0czogW10sXHJcbiAgY2FydDoge30sXHJcbiAgY2hlY2tvdXQ6IHtcclxuICAgIHNoaXBwaW5nT3B0aW9uczogW10sXHJcbiAgICBjaGVja291dFRva2VuT2JqZWN0OiB7fSxcclxuICB9LFxyXG4gIG9yZGVyUmVjZWlwdDogbnVsbCxcclxuICBjdXN0b21lcjogbnVsbCxcclxufTtcclxuXHJcbi8vIENyZWF0ZSByZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgLy8gVGhlc2UgYXJlIHNlcnZlciBzaWRlIHJlbmRlcmVkIGZyb20gTXlBcHAuZ2V0SW5pdGlhbFByb3BzLCBldmVyeXRoaW5nIGVsc2Ugc2hvdWxkXHJcbiAgICAgIC8vIGNvbWUgZnJvbSBjbGllbnQgc2lkZSBzdGF0ZSBhbmQgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRlbiBoZXJlIGJ5IHN1YnNlcXVlbnQgc2VydmVyXHJcbiAgICAgIC8vIHNpZGUgaHlkcmF0aW9uIGFjdGlvbnMuXHJcbiAgICAgIGNvbnN0IHsgY2F0ZWdvcmllcywgcHJvZHVjdHMgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICAgIHByb2R1Y3RzLFxyXG4gICAgICB9O1xyXG4gICAgLy8gRGlzcGF0Y2ggaW4gQXBwIFNTUlxyXG4gICAgLy8gQ2hlY2sgaWYgYWN0aW9uIGRpc3BhdGNoZWQgaXMgU1RPUkVfQ0FURUdPUklFUyBhbmQgYWN0IG9uIHRoYXRcclxuICAgIGNhc2UgU1RPUkVfQ0FURUdPUklFUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAvLyBEaXNwYXRjaCBpbiBBcHAgU1NSXHJcbiAgICAvLyBDaGVjayBpZiBhY3Rpb24gZGlzcGF0Y2hlZCBpcyBTVE9SRV9QUk9EVUNUUyBhbmQgYWN0IG9uIHRoYXRcclxuICAgIGNhc2UgU1RPUkVfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIC8vIERpc3BhdGNoIGluIEFwcCBjbGllbnQtc2lkZVxyXG4gICAgLy8gQ2hlY2sgaWYgYWN0aW9uIGRpc3BhdGNoZWQgaXMgU0VUX0NVU1RPTUVSIGFuZCBhY3Qgb24gdGhhdFxyXG4gICAgY2FzZSBDTEVBUl9DVVNUT01FUjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1c3RvbWVyOiBudWxsIH07XHJcbiAgICBjYXNlIFNFVF9DVVNUT01FUjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1c3RvbWVyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgLy8gRGlzcGF0Y2ggaW4gUHJvZHVjdCBjbGllbnQtc2lkZVxyXG4gICAgLy8gQ2hlY2sgaWYgYWN0aW9uIGRpc3BhdGNoZWQgaXMgU1RPUkVfQ0FSVCBhbmQgYWN0IG9uIHRoYXRcclxuICAgIGNhc2UgUkVUUklFVkVfQ0FSVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIC8vIERpc3BhdGNoIGluIFByb2R1Y3REZXRhaWwgY2xpZW50LXNpZGVcclxuICAgIC8vIENoZWNrIGlmIGFjdGlvbiBkaXNwYXRjaGVkIGlzIEFERF9UT19DQVJUIGFuZCBhY3Qgb24gdGhhdFxyXG4gICAgY2FzZSBBRERfVE9fQ0FSVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogYWN0aW9uLnBheWxvYWQuY2FydCB9O1xyXG4gICAgLy8gRGlzcGF0Y2ggaW4gQ2FydCBjbGllbnQtc2lkZVxyXG4gICAgLy8gQ2hlY2sgaWYgYWN0aW9uIGRpc3BhdGNoZWQgaXMgVVBEQVRFX0NBUlRfSVRFTSBhbmQgYWN0IG9uIHRoYXRcclxuICAgIGNhc2UgVVBEQVRFX0NBUlRfSVRFTV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogYWN0aW9uLnBheWxvYWQuY2FydCB9O1xyXG4gICAgLy8gRGlzcGF0Y2ggaW4gQ2FydCBjbGllbnQtc2lkZVxyXG4gICAgLy8gQ2hlY2sgaWYgYWN0aW9uIGRpc3BhdGNoZWQgaXMgUkVNT1ZFX0ZST01fQ0FSVCBhbmQgYWN0IG9uIHRoYXRcclxuICAgIGNhc2UgUkVNT1ZFX0ZST01fQ0FSVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogYWN0aW9uLnBheWxvYWQuY2FydCB9O1xyXG4gICAgLy8gRGlzcGF0Y2ggaW4gQ2hlY2tvdXQgY2xpZW50LXNpZGVcclxuICAgIGNhc2UgR0VORVJBVEVfQ0hFQ0tPVVRfVE9LRU46XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja291dDogeyAuLi5zdGF0ZS5jaGVja291dCwgY2hlY2tvdXRUb2tlbk9iamVjdDogYWN0aW9uLnBheWxvYWQgfX07XHJcbiAgICAvLyBEaXNwYXRjaCBpbiBDaGVja291dCBjbGllbnQtc2lkZVxyXG4gICAgY2FzZSBHRVRfU0hJUFBJTkdfT1BUSU9OUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrb3V0OiB7IC4uLnN0YXRlLmNoZWNrb3V0LCBzaGlwcGluZ09wdGlvbnM6IGFjdGlvbi5wYXlsb2FkIH19O1xyXG4gICAgLy8gRGlzcGF0Y2ggaW4gQ2hlY2tvdXQgY2xpZW50LXNpZGVcclxuICAgIGNhc2UgUkVNT1ZFX1NISVBQSU5HX09QVElPTlM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja291dDogeyAuLi5zdGF0ZS5jaGVja291dCwgc2hpcHBpbmdPcHRpb25zOiBbXSB9fTtcclxuICAgIC8vIERpc3BhdGNoIGluIENoZWNrb3V0IGNsaWVudC1zaWRlXHJcbiAgICBjYXNlIFVQREFURV9DSEVDS09VVF9MSVZFX09CSkVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGVja291dDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY2hlY2tvdXQsXHJcbiAgICAgICAgICBjaGVja291dFRva2VuT2JqZWN0OiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLmNoZWNrb3V0LmNoZWNrb3V0VG9rZW5PYmplY3QsXHJcbiAgICAgICAgICAgIGxpdmU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvLyBEaXNwYXRjaCBpbiBDaGVja291dCBjbGllbnQtc2lkZVxyXG4gICAgY2FzZSBBQk9SVF9DSEVDS09VVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrb3V0OiBpbml0aWFsU3RhdGUuY2hlY2tvdXQgfTtcclxuICAgIC8vIERpc3BhdGNoIGluIENoZWNrb3V0IGNsaWVudC1zaWRlXHJcbiAgICBjYXNlIENBUFRVUkVfT1JERVJfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrb3V0OiBpbml0aWFsU3RhdGUuY2hlY2tvdXQsIG9yZGVyUmVjZWlwdDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIEVuYWJsZSBSZWR1eCBkZXYgdG9vbHNcclxuY29uc3QgZGV2dG9vbHMgPSAocHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKVxyXG4gID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oXHJcbiAgICB7IHRyYWNlOiB0cnVlLCB0cmFjZUxpbWl0OiAyNSB9XHJcbiAgKVxyXG4gIDogZiA9PiBmO1xyXG5cclxuLy8gQ3JlYXRlIGEgbWFrZVN0b3JlIGZ1bmN0aW9uIGFuZCBwYXNzIGluIHJlZHVjZXIgdG8gY3JlYXRlIHRoZSBzdG9yZVxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSwgZGV2dG9vbHMpXHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xyXG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChpbml0aWFsU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IG1ha2VTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgIH0pXHJcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gX3N0b3JlXHJcbiAgfVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkge1xyXG4gICAgc3RvcmUgPSBfc3RvcmVcclxuICB9XHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hlYy9jb21tZXJjZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==