/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./server/src/controllers/decorators/decs/bodyValidator.ts":
/*!*****************************************************************!*\
  !*** ./server/src/controllers/decorators/decs/bodyValidator.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst MetadataKeys_1 = __webpack_require__(/*! ../../../util/MetadataKeys */ \"./server/src/util/MetadataKeys.ts\");\r\nfunction bodyValidator(...keys) {\r\n    return function (target, key, desc) {\r\n        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);\r\n    };\r\n}\r\nexports.bodyValidator = bodyValidator;\r\n\n\n//# sourceURL=webpack:///./server/src/controllers/decorators/decs/bodyValidator.ts?");

/***/ }),

/***/ "./server/src/controllers/decorators/decs/controller.ts":
/*!**************************************************************!*\
  !*** ./server/src/controllers/decorators/decs/controller.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst AppRouter_1 = __webpack_require__(/*! ../../../routes/AppRouter */ \"./server/src/routes/AppRouter.ts\");\r\nconst MetadataKeys_1 = __webpack_require__(/*! ../../../util/MetadataKeys */ \"./server/src/util/MetadataKeys.ts\");\r\nfunction bodyValidators(keys) {\r\n    return function (req, res, next) {\r\n        if (!req.body) {\r\n            res.status(422).send('Invalid request');\r\n            return;\r\n        }\r\n        for (const key of keys) {\r\n            if (!req.body[key]) {\r\n                res.status(422).send(`Missing property ${key}`);\r\n                return;\r\n            }\r\n        }\r\n        next();\r\n    };\r\n}\r\nfunction controller(routePrefix) {\r\n    const router = AppRouter_1.AppRouter.getInstance();\r\n    return function (target) {\r\n        for (const key of Object.getOwnPropertyNames(target.prototype)) {\r\n            const routeHandler = target.prototype[key];\r\n            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);\r\n            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);\r\n            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];\r\n            const requiredBodyParts = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];\r\n            const validator = bodyValidators(requiredBodyParts);\r\n            if (path) {\r\n                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);\r\n            }\r\n        }\r\n    };\r\n}\r\nexports.controller = controller;\r\n\n\n//# sourceURL=webpack:///./server/src/controllers/decorators/decs/controller.ts?");

/***/ }),

/***/ "./server/src/controllers/decorators/decs/routes.ts":
/*!**********************************************************!*\
  !*** ./server/src/controllers/decorators/decs/routes.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst Methods_1 = __webpack_require__(/*! ../../../util/Methods */ \"./server/src/util/Methods.ts\");\r\nconst MetadataKeys_1 = __webpack_require__(/*! ../../../util/MetadataKeys */ \"./server/src/util/MetadataKeys.ts\");\r\nfunction routeBinder(method) {\r\n    return function (path) {\r\n        return function (target, key, desc) {\r\n            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);\r\n            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);\r\n        };\r\n    };\r\n}\r\nexports.get = routeBinder(Methods_1.Methods.get);\r\nexports.put = routeBinder(Methods_1.Methods.put);\r\nexports.post = routeBinder(Methods_1.Methods.post);\r\nexports.del = routeBinder(Methods_1.Methods.del);\r\nexports.patch = routeBinder(Methods_1.Methods.patch);\r\n\n\n//# sourceURL=webpack:///./server/src/controllers/decorators/decs/routes.ts?");

/***/ }),

/***/ "./server/src/controllers/decorators/decs/use.ts":
/*!*******************************************************!*\
  !*** ./server/src/controllers/decorators/decs/use.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst MetadataKeys_1 = __webpack_require__(/*! ../../../util/MetadataKeys */ \"./server/src/util/MetadataKeys.ts\");\r\nfunction use(middleware) {\r\n    return function (target, key, des) {\r\n        const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];\r\n        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, [...middlewares, middleware], target, key);\r\n    };\r\n}\r\nexports.use = use;\r\n\n\n//# sourceURL=webpack:///./server/src/controllers/decorators/decs/use.ts?");

/***/ }),

/***/ "./server/src/controllers/decorators/index.ts":
/*!****************************************************!*\
  !*** ./server/src/controllers/decorators/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./decs/controller */ \"./server/src/controllers/decorators/decs/controller.ts\"));\r\n__export(__webpack_require__(/*! ./decs/routes */ \"./server/src/controllers/decorators/decs/routes.ts\"));\r\n__export(__webpack_require__(/*! ./decs/use */ \"./server/src/controllers/decorators/decs/use.ts\"));\r\n__export(__webpack_require__(/*! ./decs/bodyValidator */ \"./server/src/controllers/decorators/decs/bodyValidator.ts\"));\r\n\n\n//# sourceURL=webpack:///./server/src/controllers/decorators/index.ts?");

/***/ }),

/***/ "./server/src/controllers/loginController.ts":
/*!***************************************************!*\
  !*** ./server/src/controllers/loginController.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar _a, _b, _c, _d, _e, _f;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n\"use strict\";\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst decorators_1 = __webpack_require__(/*! ./decorators */ \"./server/src/controllers/decorators/index.ts\");\r\nfunction logger(req, res, next) {\r\n    console.log('Request was made!!!');\r\n    next();\r\n}\r\nlet LoginController = class LoginController {\r\n    getLogin(req, res) {\r\n        res.send(`\r\n            <form method=\"post\">\r\n            <div>\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"text\" name=\"email\">\r\n            </div>\r\n            <div>\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" name=\"password\">\r\n            </div>\r\n                <button>Submit</button>\r\n            </form>\r\n        `);\r\n    }\r\n    postLogin(req, res) {\r\n        const { email, password } = req.body;\r\n        if (email && password && email === 'hi@hi.com' && password === 'password') {\r\n            // mark this person as logged in\r\n            req.session = { loggedIn: true };\r\n            // redirect them to the root route\r\n            res.redirect('/');\r\n        }\r\n        else {\r\n            res.send('Invalid email or password');\r\n        }\r\n    }\r\n    getLogout(req, res) {\r\n        req.session = undefined;\r\n        res.redirect('/');\r\n    }\r\n};\r\n__decorate([\r\n    decorators_1.get('/login'),\r\n    decorators_1.use(logger),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof express_1.Request !== \"undefined\" && express_1.Request) === \"function\" ? _a : Object, typeof (_b = typeof express_1.Response !== \"undefined\" && express_1.Response) === \"function\" ? _b : Object]),\r\n    __metadata(\"design:returntype\", void 0)\r\n], LoginController.prototype, \"getLogin\", null);\r\n__decorate([\r\n    decorators_1.post('/login'),\r\n    decorators_1.bodyValidator('email', 'password'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [typeof (_c = typeof express_1.Request !== \"undefined\" && express_1.Request) === \"function\" ? _c : Object, typeof (_d = typeof express_1.Response !== \"undefined\" && express_1.Response) === \"function\" ? _d : Object]),\r\n    __metadata(\"design:returntype\", void 0)\r\n], LoginController.prototype, \"postLogin\", null);\r\n__decorate([\r\n    decorators_1.get('/logout'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [typeof (_e = typeof express_1.Request !== \"undefined\" && express_1.Request) === \"function\" ? _e : Object, typeof (_f = typeof express_1.Response !== \"undefined\" && express_1.Response) === \"function\" ? _f : Object]),\r\n    __metadata(\"design:returntype\", void 0)\r\n], LoginController.prototype, \"getLogout\", null);\r\nLoginController = __decorate([\r\n    decorators_1.controller('/auth')\r\n], LoginController);\r\n\n\n//# sourceURL=webpack:///./server/src/controllers/loginController.ts?");

/***/ }),

/***/ "./server/src/controllers/rootController.ts":
/*!**************************************************!*\
  !*** ./server/src/controllers/rootController.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar _a, _b, _c, _d;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n\"use strict\";\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst decorators_1 = __webpack_require__(/*! ./decorators */ \"./server/src/controllers/decorators/index.ts\");\r\nconst requiredAuth = (req, res, next) => {\r\n    if (req.session && req.session.loggedIn) {\r\n        next();\r\n        return;\r\n    }\r\n    res.status(403);\r\n    res.send('Not permitted');\r\n};\r\nlet RootController = class RootController {\r\n    getRoot(req, res) {\r\n        if (req.session && req.session.loggedIn) {\r\n            res.send(`\r\n                    <div>\r\n                        <div>You are logged in</div>\r\n                        <a href=\"/auth/logout\">Logout</a>\r\n                    </div>\r\n        `);\r\n        }\r\n        else {\r\n            res.send(`\r\n                    <div>\r\n                        <div>You are not logged in</div>\r\n                        <a href=\"/auth/login\">Login</a>\r\n                    </div>\r\n        `);\r\n        }\r\n    }\r\n    getProtected(req, res) {\r\n        res.send('Welcome to protected route, logged user!');\r\n    }\r\n};\r\n__decorate([\r\n    decorators_1.get('/'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof express_1.Request !== \"undefined\" && express_1.Request) === \"function\" ? _a : Object, typeof (_b = typeof express_1.Response !== \"undefined\" && express_1.Response) === \"function\" ? _b : Object]),\r\n    __metadata(\"design:returntype\", void 0)\r\n], RootController.prototype, \"getRoot\", null);\r\n__decorate([\r\n    decorators_1.get('/protected'),\r\n    decorators_1.use(requiredAuth),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [typeof (_c = typeof express_1.Request !== \"undefined\" && express_1.Request) === \"function\" ? _c : Object, typeof (_d = typeof express_1.Response !== \"undefined\" && express_1.Response) === \"function\" ? _d : Object]),\r\n    __metadata(\"design:returntype\", void 0)\r\n], RootController.prototype, \"getProtected\", null);\r\nRootController = __decorate([\r\n    decorators_1.controller('')\r\n], RootController);\r\n\n\n//# sourceURL=webpack:///./server/src/controllers/rootController.ts?");

/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst cookie_session_1 = __importDefault(__webpack_require__(/*! cookie-session */ \"cookie-session\"));\r\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nconst AppRouter_1 = __webpack_require__(/*! ./routes/AppRouter */ \"./server/src/routes/AppRouter.ts\");\r\n__webpack_require__(/*! ./controllers/loginController */ \"./server/src/controllers/loginController.ts\");\r\n__webpack_require__(/*! ./controllers/rootController */ \"./server/src/controllers/rootController.ts\");\r\nconst app = express_1.default();\r\napp.use(body_parser_1.default.urlencoded({ extended: true }));\r\napp.use(cookie_session_1.default({ keys: ['aSession'] }));\r\napp.use(AppRouter_1.AppRouter.getInstance());\r\n// Serve the files on port 3000.\r\napp.listen(3000, () => {\r\n    console.log('Example app listening on port 3000!\\n');\r\n});\r\n\n\n//# sourceURL=webpack:///./server/src/index.ts?");

/***/ }),

/***/ "./server/src/routes/AppRouter.ts":
/*!****************************************!*\
  !*** ./server/src/routes/AppRouter.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nclass AppRouter {\r\n    static getInstance() {\r\n        if (!AppRouter.instance) {\r\n            AppRouter.instance = express_1.default.Router();\r\n        }\r\n        return AppRouter.instance;\r\n    }\r\n}\r\nexports.AppRouter = AppRouter;\r\n\n\n//# sourceURL=webpack:///./server/src/routes/AppRouter.ts?");

/***/ }),

/***/ "./server/src/util/MetadataKeys.ts":
/*!*****************************************!*\
  !*** ./server/src/util/MetadataKeys.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MetadataKeys;\r\n(function (MetadataKeys) {\r\n    MetadataKeys[\"method\"] = \"method\";\r\n    MetadataKeys[\"path\"] = \"path\";\r\n    MetadataKeys[\"middleware\"] = \"middleware\";\r\n    MetadataKeys[\"validator\"] = \"validator\";\r\n})(MetadataKeys = exports.MetadataKeys || (exports.MetadataKeys = {}));\r\n\n\n//# sourceURL=webpack:///./server/src/util/MetadataKeys.ts?");

/***/ }),

/***/ "./server/src/util/Methods.ts":
/*!************************************!*\
  !*** ./server/src/util/Methods.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Methods;\r\n(function (Methods) {\r\n    Methods[\"get\"] = \"get\";\r\n    Methods[\"post\"] = \"post\";\r\n    Methods[\"patch\"] = \"patch\";\r\n    Methods[\"put\"] = \"put\";\r\n    Methods[\"del\"] = \"delete\";\r\n})(Methods = exports.Methods || (exports.Methods = {}));\r\n\n\n//# sourceURL=webpack:///./server/src/util/Methods.ts?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./server/src/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./server/src/index.ts */\"./server/src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./server/src/index.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");\n\n//# sourceURL=webpack:///external_%22reflect-metadata%22?");

/***/ })

/******/ });