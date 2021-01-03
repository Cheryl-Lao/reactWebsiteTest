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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "2CkC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/line-bg-b0e56735d9646b927d4fe889495d2880.png";

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YQMk");


/***/ }),

/***/ "ACD1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* unused harmony export ORDER_FORM */
/* unused harmony export CHECKOUT_CHARGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RESET_CART; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B/N6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAxCAMAAADJL/Z6AAABGlBMVEUAAAA40Wr///840Wo40Wr///840Wo40Wo40Wo40Wo40Wo40Wr///840Wo40Wo40Wo40Wr///////840Wo40Wo40Wr///840Wo40Wo40Wr///840Wo40Wo40Wr///840Wo40Wo40Wo40Wqh6bg40Wr///840Wo40Wo40Wr///840Wo40Wo40WpM1nn///////840Wo40Wr///840Wo40Wo40Wr///840Wo40Wo40Wo40Wr///840Wo40Wr///840Wo40Wo40Wo40WpS13040Wo40Wo40Wps3ZE40Wo40WrP9Ntd2oY40Wo40WpE1HNR131d2oZq3Y9235mD4qKP5auc6LWo67607sfB8dDN89ra9uPm+ezz/Pb///8DrS0wAAAATXRSTlMAAAAFBhAUFhcaGxwgJSYpKjBATk9QUFFXWGBmaXBwcXV2enp7gI2Oj4+TlJWcn6+3uL/LzM7P0NjZ29/t7u/x8vP09PX2+Pj6/Pz9/s//OxsAAAWdSURBVFjDtZgLd9s0FIBlOvUBGiCXmdUt6QYEGjaaztu8jWzeCnQsMD/ycBMn0f//G1i6etlxmp6T5va0jW3Zn+/7KgjdieC7eczew7OL128/fnz7+uLs4d5t7iB3gd09ff45tuTz89PdtTfR8mdDOfjlz3hJ/v7tYO2N7mbcnUeXcaNcPt5ZY+3NyPdfxivl1bc3gT28Efm79/ENcvngRlNvQj7uN/Ay87F/vFF0Y89bceWkypEysA9OVj30FkmFo8j3/aa0P+wDJxtwAVI6GObiKOFHSfbfT64RnUauK5Uh/LR5NrUWlxHIWDuM2svgby6lhgVjbM4APWBsxoTMhvy4YJYECEVBaB+2+X/j73NrcRsuslBc6cF6SKdXAlU+fyFWjBRZw8YN5B4i7dXkdpUcaTLln3y56hGE0yBOYeV1TedSuBmy8r1akUYxz/VWkXGdDB+wNEYkvXIABSQVMC6FIhvhp4bFv0zcx4Kgg1BY1szb6oy7TKnKX/1cLnqiwzeHlQubPB4JF6Ti3O8hf2F4Y+6rsIwfG1Ujmy7W9vlxFyHPWrZ7JblJPJEvmRhyMYpH/L8Isvgf8TxII+b6QaAe7a4hI9QFc3Oj9eSpH2JNnlleBfK81DXhH3JjB1mxWMsVMYotsq9BHSAb8cHukfgL8sLUDeWYXMe2CLY6WepcOj1QAYWrOhM3qJMRP9MTxpalZ0/342EmArv8nWhy3kSWOrNQkjEvY4Ls6Y4tyRhXyIwncyjPHZlayR26GKvgbiAnQG7RsmS6zKoIOsJkbWsBp1IuOzIhmS91PjOVecqh4uEV8rKfKSUINZG76gD3LLPWypp6n4u4klTXqcohTdaxnaZjcWcXg7UtsvRzS5FJCNYmpo9RCuBzRODUH4ZciDqpOIo8VPmcxKmooJ0OUmRdRxAGnQm8RqfVtuqIejthBx4LWCz6S7XHNFmIhCqkbe26LTyfJpk40eo1kIlIIxnNuO2Fy2Qwd68MAoiGZMwbRD6bLaagGy8n0xp5ASUsEUWOtpbJBLWYNHf5WOyjXgNZpFRAVITF6WySxYPpHNaBt2c1suhewyQTEdZyl8kUy+7B08htB61lMiEQYkTtDT6UjHwyGrGcG3ueJUMZ3BZ5JhROZIJRT5NDNSa4SGRZGJVjQDkVBL5IoYi6Vv2kkXoTK8KS8XQ4ELXzOp3J+ikjLFeFPFGpLd1kxTZGHli7K695FOoGpdaI5oMaqmrrrBrDVFBMlHkleWD6hSRjgpayCoHOPSgl5RQcQGGhtfJpFzpdSZK5ds2MB7fKKjMrrNRZkwMErdcHTKWSEPV01Z1N9YTzc7bI83xhyIVytFrj+XUywQQirIs6/LVogKFuW2Ub3GEX1X3VMTKt8nxelH4eS/K17tiS7LpLOpcEF7pktwO7juVeJZqFa1c61SVFTBelLCZsem3VMNvRlV5lWZuqYcMNwNrtOpkCs9cwGeS6SZWxNkk0ObEdbXmvQiagsytDnZIl8jnYudUwDU0VWaDSVHeMmXH01SqdkU3WI4pNjqCVETvGnsJTZ7oXLoSSQ0W2HP10RWwTSZZCXGzPnueqcnpyHqtNvWbGL4T2Wmfj6MuDVVlFK2TXrU29EqiLd2XSz/ToJzy+qE0GwtGPkWXDJmsrcn3SR9gYOdL7nHJ3w/fsog3LciYcbaahuXT0yx1UmQBXk6uTfiCTmZqpVNW2++/51lHvIhP+MSn/ZoMU9j3i0oev+dZRj/aVLSWvmFraVG4tzcaTmhsxbC8dkMN+vFb6h7D2izsRRXZO1pNPnK2QneM1WvePnS2RnQc3f0PzvbM1snPzt1LOFsnOvR+vmrlXP99ztkp2nC9/bfr28clXlUVbITvO7umL6jeuL053a0u2RC5l/+js2Zt3nz69e/Ps7Gh/+frdkP8HdyilFiREF98AAAAASUVORK5CYII="

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Cc5c":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAmCAMAAADX/MRZAAABQVBMVEUAAAAyvF////8yvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8SFhkyvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF8yvF8yvF8yvF8yvF8yvF8yvF8yvF8SFhkyvF9aeTj6AAAAaXRSTlMAAAABAgYJCg8QEBUaGxwdHiAgJicqLC0uLzAxMjY4PT9AQEJGR09QUFRbXF9gYGRma2xwcHN0dXh5gICEh4+PkJqbnJ+go6irrq+vsLO2uL6/wMTLzs/Q29/g4eLk6evv8Pb5+vv8/f4iNsd9AAACxklEQVRYw+2XZ3/TMBCH7bQMM+OUGcpwGIGCWUlLUaFlOBRCGC7g4pbhMNrkvv8HQLYkOycrro3DL2/4v7Ktk56cdHe6aJXi0nLKJKSu+s5XAdjderNY1UMtbGKVI9tDKieLHGrQO0vJbcDKIttuKDvD42EkK4s8CCk791PkXYEyLSyTTifRumQPl5UWMbl/8NqLXwCdiPzw6CGmEwBfBJlREpFJkek+H1nn5HZN16OBmwBvS5Fz7HY/iq47TzH5NcBiKXKOCGNk/TAizw1gcKwcOcwqS8tB1kfJM+8B1iuY7GRHWN0mpGUZyQdmiw2adNzka6jJKwA/5yQyQVmFyQbx+X44cfFg7/Hv8Pi4IWYqyUs0px5U8pPrvnQWKbITD3urGeT9jUbj0mx+cj1AYeCkyc5wmIoV9W5j7UE2fGnVlkxuDpXknY1Iy4K8vMH1HJNdwpQi89AP3C4/y8DAZEPsiev6o2SuuJJ0xJdNdValyGw1L8Q1g8TphMzLmWcmFnTmdaF5QZ6PXu/mJtdH/NRazDdM7kZPPrOwBJkurDznWm4yh7H0tRNe8sTcFPeam5DP93q9V1f+mkzS4SOR2ZMoMiQmV78DfLu4t8/jYltFthRkTSbPfADYrumTJRt5fL4F8OOUXoLMztkjo8o6Z4/PnP0MsKSXIbPY9lNXkhzbnhTblwG+7kPkGweKkXk+O0bsP3Mvlc8uzucnAI9wVnU+nS5GFjWs6/Aa5mt5athHgAsSGX4/O1OEzE8uUVOu2y1V3e4DPF7hepdUz+1eAbJ0V61m31WBXLeZKPn4y4Gybmfdz6Ne29n3s0PGkvXKybWtYmT6GvckpronaTKDgMQz21jneFZVr96+t4A7fRORzbgjQ32YMqu4QQv3Yf/uH51MlnvP/+RJkWmT706HbIkc8qdGJtMie8aUyI6hTSHCWNkYT/4DG0OMitAjs/YAAAAASUVORK5CYII="

/***/ }),

/***/ "Nxmy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resetCart; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ACD1");
 //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* ADD_TO_CART */ "d"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_ITEM */ "e"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* SUB_QUANTITY */ "g"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* ADD_QUANTITY */ "a"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* ADD_QUANTITY_WITH_NUMBER */ "b"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* RESET_CART */ "f"]
  };
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YQMk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "index", function() { return /* binding */ cart_index; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/layout/Navbar.js + 3 modules
var Navbar = __webpack_require__("nABS");

// EXTERNAL MODULE: ./components/layout/Footer.js
var Footer = __webpack_require__("cFkv");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions/cartActions.js
var cartActions = __webpack_require__("Nxmy");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// CONCATENATED MODULE: ./components/shop/CartContent.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CartContent_CartContent extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRemove", id => {
      this.props.removeItem(id);
      external_react_toastify_["toast"].error('Removed from cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "handleAddQuantity", id => {
      this.props.addQuantity(id);
    });

    _defineProperty(this, "handleSubtractQuantity", id => {
      this.props.subtractQuantity(id);
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
    });
  }

  render() {
    let cartItems = this.props.products.length ? this.props.products.map((data, idx) => {
      return __jsx("tr", {
        key: idx
      }, __jsx("td", {
        className: "product-thumbnail"
      }, __jsx("a", {
        href: "#"
      }, __jsx("img", {
        src: data.image,
        alt: "item"
      }))), __jsx("td", {
        className: "product-name"
      }, __jsx("a", {
        href: "#"
      }, data.title)), __jsx("td", {
        className: "product-price"
      }, __jsx("span", {
        className: "unit-amount"
      }, "$", data.price)), __jsx("td", {
        className: "product-quantity"
      }, __jsx("div", {
        className: "input-counter"
      }, __jsx("span", {
        className: "minus-btn",
        onClick: () => {
          this.handleSubtractQuantity(data.id);
        }
      }, __jsx("i", {
        className: "icofont-minus"
      })), __jsx("input", {
        type: "text",
        value: data.quantity,
        min: "1",
        max: 10,
        readOnly: true,
        onChange: e => e
      }), __jsx("span", {
        className: "plus-btn",
        onClick: () => {
          this.handleAddQuantity(data.id);
        }
      }, __jsx("i", {
        className: "icofont-plus"
      })))), __jsx("td", {
        className: "product-subtotal"
      }, __jsx("span", {
        className: "subtotal-amount"
      }, "$", data.price * data.quantity)), __jsx("td", {
        className: "product-remove"
      }, __jsx(link_default.a, {
        href: "#"
      }, __jsx("a", {
        onClick: e => {
          e.preventDefault();
          this.handleRemove(data.id);
        }
      }, __jsx("i", {
        className: "icofont-ui-delete"
      })))));
    }) : __jsx("tr", null, __jsx("td", {
      className: "product-thumbnail",
      colSpan: "6"
    }, __jsx("p", null, "Empty.")));
    return __jsx("section", {
      className: "cart-area ptb-120"
    }, __jsx(external_react_toastify_["ToastContainer"], {
      transition: external_react_toastify_["Slide"]
    }), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("form", {
      onSubmit: this.handleSubmit
    }, __jsx("div", {
      className: "cart-table table-responsive"
    }, __jsx("table", {
      className: "table table-bordered"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      scope: "col"
    }, "Product"), __jsx("th", {
      scope: "col"
    }, "Name"), __jsx("th", {
      scope: "col"
    }, "Unit Price"), __jsx("th", {
      scope: "col"
    }, "Quantity"), __jsx("th", {
      scope: "col"
    }, "Total"), __jsx("th", {
      scope: "col"
    }, "Remove"))), __jsx("tbody", null, cartItems))), __jsx("div", {
      className: "cart-buttons"
    }, __jsx("div", {
      className: "row h-100"
    }, __jsx("div", {
      className: "col-lg-7 col-md-7"
    }, __jsx("div", {
      className: "coupon-box"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Coupon Code"
    }), __jsx("button", {
      type: "submit"
    }, "Apply Coupon Code"))), __jsx("div", {
      className: "col-lg-5 col-md-5"
    }, __jsx("div", {
      className: "cart-totals"
    }, __jsx("h3", null, "Cart Totals"), __jsx("ul", null, __jsx("li", null, "Subtotal: ", __jsx("span", null, "$", this.props.total)), __jsx("li", null, "Total: ", __jsx("span", null, "$", this.props.total))), __jsx(link_default.a, {
      href: "/checkout"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Proceed to Checkout")))))))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(Object(cartActions["d" /* removeItem */])(id));
    },
    addQuantity: id => {
      dispatch(Object(cartActions["a" /* addQuantity */])(id));
    },
    subtractQuantity: id => {
      dispatch(Object(cartActions["f" /* subtractQuantity */])(id));
    }
  };
};

/* harmony default export */ var shop_CartContent = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(CartContent_CartContent));
// CONCATENATED MODULE: ./pages/cart.js
var cart_jsx = external_react_default.a.createElement;





class cart_index extends external_react_["Component"] {
  render() {
    return cart_jsx(external_react_default.a.Fragment, null, cart_jsx(Navbar["a" /* default */], null), cart_jsx("div", {
      className: "page-title-area item-bg2"
    }, cart_jsx("div", {
      className: "container"
    }, cart_jsx("h1", null, "Cart"), cart_jsx("ul", null, cart_jsx("li", null, cart_jsx(link_default.a, {
      href: "/"
    }, cart_jsx("a", null, "Home"))), cart_jsx("li", null, "Cart")))), cart_jsx(shop_CartContent, null), cart_jsx(Footer["a" /* default */], null));
  }

}
/* harmony default export */ var cart = __webpack_exports__["default"] = (cart_index);

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cFkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Footer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      className: "footer-area ptb-120 pb-0"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__("B/N6"),
      alt: "logo"
    }))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("ul", {
      className: "social-links"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icofont-facebook"
    }))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icofont-twitter"
    }))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icofont-instagram"
    }))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icofont-pinterest"
    })))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget ml-4"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Home")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "About")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Portfolio")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "News")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Contact")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "FAQ's"))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Recent Post"), __jsx("ul", {
      className: "footer-recent-post"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "The Most Popular New Business Apps"), __jsx("span", null, "25 Feb 2019")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "The Best Marketing Management Tools"), __jsx("span", null, "27 Feb 2019")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "3 WooCommerce Plugins to Boost Sales"), __jsx("span", null, "28 Feb 2019"))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Get in Touch"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "icofont-google-map"
    }), __jsx("span", null, "Location:"), "27 Division St, New York, NY 10002, USA"), __jsx("li", null, __jsx("i", {
      className: "icofont-phone"
    }), __jsx("span", null, "Phone:"), __jsx("a", {
      href: "#"
    }, "+44 014799584")), __jsx("li", null, __jsx("i", {
      className: "icofont-email"
    }), __jsx("span", null, "Email:"), __jsx("a", {
      href: "#"
    }, "support@fleja.com")))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyright @2019. All rights reserved.")), __jsx("div", {
      className: "col-lg-6 col-md-6 text-right"
    }, __jsx("p", null, "Design & Developed by ", __jsx("a", {
      href: "https://envytheme.com",
      target: "_blank"
    }, "EnvyTheme")))))), __jsx("img", {
      src: __webpack_require__("2CkC"),
      className: "line-bg",
      alt: "line-bg"
    }), __jsx("div", {
      className: "shape23"
    }, __jsx("img", {
      src: __webpack_require__("j5VF"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape24"
    }, __jsx("img", {
      src: __webpack_require__("mXxp"),
      alt: "shape"
    })), __jsx("div", {
      className: "shape27"
    }, __jsx("img", {
      src: __webpack_require__("tEj7"),
      alt: "shape"
    })));
  }

}
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "j5VF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/23-0ba4bfcf44d1c7200d744e3c39144e82.png";

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "mXxp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/24-eb6a522cc71386820e5bce933e3def49.png";

/***/ }),

/***/ "nABS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Navbar

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/ActiveLink.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = external_react_["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(link_default.a, props, /*#__PURE__*/external_react_default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ var utils_ActiveLink = (Object(router_["withRouter"])(ActiveLink));
// CONCATENATED MODULE: ./components/layout/SearchForm.js
var SearchForm_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SearchForm_SearchForm extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      searchForm: false,
      term: ''
    });

    _defineProperty(this, "closeSearchForm", () => {
      this.props.onClick(this.state.searchForm);
    });

    _defineProperty(this, "handleSearch", e => {
      e.preventDefault();
    });
  }

  render() {
    return SearchForm_jsx("div", {
      className: `searchBoxTop ${this.props.active}`
    }, SearchForm_jsx("div", {
      className: "seachBoxContainer"
    }, SearchForm_jsx("div", {
      className: "container"
    }, SearchForm_jsx("span", {
      className: "searchClose",
      onClick: this.closeSearchForm
    }), SearchForm_jsx("form", {
      onSubmit: this.handleSearch
    }, SearchForm_jsx("input", {
      className: "form-control",
      type: "search",
      placeholder: "Type here........",
      value: this.state.term,
      onChange: e => this.setState({
        term: e.target.value
      })
    }), SearchForm_jsx("button", {
      type: "submit"
    }, SearchForm_jsx("i", {
      className: "icofont-search-2"
    }))))));
  }

}
/* harmony default export */ var layout_SearchForm = (SearchForm_SearchForm);
// CONCATENATED MODULE: ./components/layout/SideDrawer.js
var SideDrawer_jsx = external_react_default.a.createElement;

function SideDrawer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SideDrawer_SideDrawer extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SideDrawer_defineProperty(this, "state", {
      drawer: false
    });

    SideDrawer_defineProperty(this, "closeDrawer", () => {
      this.props.onClick(this.state.drawer);
    });
  }

  render() {
    return SideDrawer_jsx("div", {
      className: "sidebar-modal"
    }, SideDrawer_jsx("div", {
      className: `modal right fade ${this.props.show}`,
      style: this.props.show ? {
        display: "block",
        paddingRight: "16px"
      } : {
        display: "none"
      }
    }, SideDrawer_jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, SideDrawer_jsx("div", {
      className: "modal-content"
    }, SideDrawer_jsx("div", {
      className: "modal-header"
    }, SideDrawer_jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeDrawer
    }, SideDrawer_jsx("span", {
      "aria-hidden": "true"
    }, SideDrawer_jsx("i", {
      className: "icofont-close"
    }))), SideDrawer_jsx("h2", {
      onClick: this.closeDrawer,
      className: "modal-title",
      id: "myModalLabel2"
    }, SideDrawer_jsx("a", {
      href: "/"
    }, SideDrawer_jsx("img", {
      src: __webpack_require__("Cc5c"),
      alt: "logo"
    })))), SideDrawer_jsx("div", {
      className: "modal-body"
    }, SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Additional Links"), SideDrawer_jsx("ul", null, SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/login"
    }, SideDrawer_jsx("a", null, "Login"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/signup"
    }, SideDrawer_jsx("a", null, "Register"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/faq"
    }, SideDrawer_jsx("a", null, "FAQ"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/logout"
    }, SideDrawer_jsx("a", null, "Logout"))))), SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Contact Info"), SideDrawer_jsx("ul", {
      className: "contact-info"
    }, SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-google-map"
    }), "Address", SideDrawer_jsx("span", null, "1660 Travis Street Miramar, FL 33025, California")), SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-email"
    }), "Email", SideDrawer_jsx("span", null, SideDrawer_jsx("a", {
      href: "#"
    }, "admin@artflex.com"))), SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-phone"
    }), "Phone", SideDrawer_jsx("span", null, SideDrawer_jsx("a", {
      href: "#"
    }, "+123 456 7890"))))), SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Connect With Us"), SideDrawer_jsx("ul", {
      className: "social-list"
    }, SideDrawer_jsx("li", null, SideDrawer_jsx("a", {
      href: "#"
    }, SideDrawer_jsx("i", {
      className: "icofont-facebook"
    }))), SideDrawer_jsx("li", null, SideDrawer_jsx("a", {
      href: "#"
    }, SideDrawer_jsx("i", {
      className: "icofont-twitter"
    }))), SideDrawer_jsx("li", null, SideDrawer_jsx("a", {
      href: "#"
    }, SideDrawer_jsx("i", {
      className: "icofont-instagram"
    }))), SideDrawer_jsx("li", null, SideDrawer_jsx("a", {
      href: "#"
    }, SideDrawer_jsx("i", {
      className: "icofont-linkedin"
    }))))), SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Search"), SideDrawer_jsx("form", {
      className: "modal-search-form"
    }, SideDrawer_jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Serch here.."
    }), SideDrawer_jsx("button", {
      type: "submit"
    }, SideDrawer_jsx("i", {
      className: "icofont-search-2"
    })))))))));
  }

}
/* harmony default export */ var layout_SideDrawer = (SideDrawer_SideDrawer);
// CONCATENATED MODULE: ./components/layout/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Navbar_Navbar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Navbar_defineProperty(this, "_isMounted", false);

    Navbar_defineProperty(this, "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Navbar_defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    Navbar_defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Navbar_defineProperty(this, "handleDrawer", () => {
      this.setState(prevState => {
        return {
          drawer: !prevState.drawer
        };
      });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      pathname
    } = this.props.router;
    let {
      products
    } = this.props;
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    let layOutCls = '';

    if (pathname == '/creative-blog') {
      layOutCls = 'p-relative';
    }

    return Navbar_jsx("header", {
      id: "header"
    }, Navbar_jsx("div", {
      id: "navbar",
      className: `artflex-nav ${layOutCls}`
    }, Navbar_jsx("div", {
      className: "container"
    }, Navbar_jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/digital-agency"
    }, Navbar_jsx("a", {
      className: "navbar-brand"
    }, Navbar_jsx("img", {
      src: __webpack_require__("Cc5c"),
      alt: "logo"
    }))), Navbar_jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, Navbar_jsx("span", {
      className: "navbar-toggler-icon"
    })), Navbar_jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, Navbar_jsx("ul", {
      className: "navbar-nav ml-auto"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Home ", Navbar_jsx("i", {
      className: "icofont-simple-down"
    })), Navbar_jsx("ul", {
      className: "dropdown_menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/digital-agency"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Digital Agency"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/freelancer"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Freelancer Portfolio "))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/startup-agency"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Startup Agency"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/agency-portfolio"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Agency Portfolio"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/creative-blog"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Creative Blog"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/digital-agency-animation"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Digital Agency Animation"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/freelancer-portfolio-animation"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Freelancer Portfolio Animation"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/startup-agency-animation"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Startup Agency Animation"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Pages ", Navbar_jsx("i", {
      className: "icofont-simple-down"
    })), Navbar_jsx("ul", {
      className: "dropdown_menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx("a", {
      href: "#",
      className: "nav-link"
    }, "About"), Navbar_jsx("ul", {
      className: "dropdown_menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/about-us"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "About Us"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/about-me"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "About Me"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Team"), Navbar_jsx("ul", {
      className: "dropdown_menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/team"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Team"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/team-details"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Team Details"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/services"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Services"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/login"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Login"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/signup"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Sign Up"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/coming-soon"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Coming Soon"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/error"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "404 Error"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/faq"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "FAQ"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/contact"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Contact"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Blog ", Navbar_jsx("i", {
      className: "icofont-simple-down"
    })), Navbar_jsx("ul", {
      className: "dropdown_menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/blog"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Blog"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/blog-details"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Blog Details"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Portfolio ", Navbar_jsx("i", {
      className: "icofont-simple-down"
    })), Navbar_jsx("ul", {
      className: "dropdown_menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/portfolio"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Portfolio"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/portfolio-details"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Portfolio Details"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/products"
    }, Navbar_jsx("a", {
      className: "nav-link",
      onClick: e => e.preventDefault()
    }, "Shop ", Navbar_jsx("i", {
      className: "icofont-simple-down"
    }))), Navbar_jsx("ul", {
      className: "dropdown_menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/products"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Products"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/product-details"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Products Details"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/cart"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Cart"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/checkout"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Checkout"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/contact"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Contact")))), Navbar_jsx("div", {
      className: "others-option"
    }, Navbar_jsx("ul", null, Navbar_jsx("li", null, Navbar_jsx("span", {
      className: "search-popup-icon",
      onClick: this.handleSearchForm
    }, Navbar_jsx("i", {
      className: "icofont-ui-search"
    }))), Navbar_jsx("li", null, Navbar_jsx(utils_ActiveLink, {
      href: "/cart"
    }, Navbar_jsx("a", {
      className: "cart-icon"
    }, Navbar_jsx("i", {
      className: "icofont-bag"
    }), Navbar_jsx("span", null, products.length)))), Navbar_jsx("li", {
      onClick: this.handleDrawer
    }, Navbar_jsx("div", {
      className: "side-menu"
    }, Navbar_jsx("span", {
      className: "bar-1"
    }), Navbar_jsx("span", {
      className: "bar-2"
    }), Navbar_jsx("span", {
      className: "bar-3"
    })))))))), Navbar_jsx(layout_SearchForm, {
      onClick: this.handleSearchForm,
      active: this.state.searchForm ? 'active' : ''
    }), Navbar_jsx(layout_SideDrawer, {
      onClick: this.handleDrawer,
      show: this.state.drawer ? 'show' : ''
    })));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ var layout_Navbar = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(external_react_redux_["connect"])(mapStateToProps)(Navbar_Navbar)));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "tEj7":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAABgFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+X+QqjAAAAgHRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f1RP/fEAAAOsSURBVGjevdtnVxpBFAbgd2fpwoJdsSNYsYsasXchil2JGhVjLIkxamKLJn89H7ChiFtm7v0Dz5ndnZ05c98BtBXzlNW1945MzczEYrHo+GB3sCrPBIGV2zgaPzg6+vb9+PjHycnP07Oz8/Nfvy8uLg/mQl5JAGipHt7c+7p/cHCYTr26uj5dbLFzFeXKse3d3S97GdXrm6v1ZjMv0hWKb2/vJFSoN38uogU8yLzhjc3PW6rV29vNaqNk/tCn9Q2N6l3CEOsMr8XjOtS7Dd0PWQ4urqzqVO+mrPqe7NTS8rJu9e9pnY5hNi0sLBpS/8a0DtY5MjdvWD3xajK9kdkYB/W2Q4NZ+3Fmlov6L8rULiSt0Sg3dUPdi5W7piMc1b0sFaapZ3KKq3roet/smpjkrB6/N1a5Y2ycu3poy2hKLaNjAtRExmU2MDwiRF3OsJkpGRwSpA6/aSr9A8LUmjdMc1f/gDD1Mjs9WhfuE6jupn2thb29QtX+dBvb0Aex6m1+mtnS3SNY3XllekJdwtX2l7+iYKd49dySihZ0dBKoI6nrdlM7hXrtTJkubW0k6tjzgTa20qhXjic0p7mFSO17Qv1NVOrJ4+7Q0RgkU+sft9aNdGr84TOqbaBTb+5njauunlANJdHiWkp1Pfnbra6hVK8dAGAPBEjVBgDI8dOqEQAoqaZVDwFIlT5i1QFYK6uIVT/gqqRWw0B2BbU6CxSUU6sJoKiMWj0FvKXkKuAtIVcleOlVCcX0qoQiepWhkF5lKKBXGfLpVYY8epUhj15lyKVXJeTQqxKy6VUJHnoVcJGr+4DDTa2uATaFWp0AzAq12gnITmq1AoCTWrUDsBOrawBgzqJVBwCAOWhVHwDATqomkk0aM6kauT9dsVGqDfdnOlZCdevhdNBEqI4/Hmtb6NSKpzYQmbr01K5mFio1+LzjRaSuPu+QMyK1LbUrTaKupGazJBK1+WUznECNvYzdSQSq73UPXriarkXNBKvzCujV9KEoSag68EbqQKQ6/WaWRKBalCFGIkqtzRheEaO2Z47pCFF7ZJCr4fezsNzVPouKwBdntUddtI2rGrKoDPFxVFvUp8i5qQEt+XE+arhYWwKVh9rh1Jq1Na76ZWgvY2pbjr78tJEdTLkMvcV0qgFDlw8kWYda44LBkkwaVZ9hMjla9Wq918btRgczq1FrytwMXEu22DOqvmJFhoBiZpsjrVqar1ghspjJYrVnORXF7fZ43IrTYTNrvhT0H5St9BsVky//AAAAAElFTkSuQmCC"

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });