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

/***/ "./features/src/index.ts":
/*!*******************************!*\
  !*** ./features/src/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\n// const plane = {\r\n//     color: 'red'\r\n// };\r\n//\r\n// Reflect.defineMetadata('note', 'hi there', plane, 'color');\r\n//\r\n// const note = Reflect.getMetadata('note', plane, 'color');\r\n//\r\n// console.log(note);\r\nclass AnotherTest {\r\n    anotherTest() { }\r\n}\r\nclass Test extends AnotherTest {\r\n    testing() {\r\n    }\r\n}\r\nlet Plane = class Plane extends Test {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.color = 'red';\r\n    }\r\n    fly() {\r\n        console.log('vrrrrrr');\r\n    }\r\n    get getColor() {\r\n        return this.color;\r\n    }\r\n};\r\n__decorate([\r\n    get('/login'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", void 0)\r\n], Plane.prototype, \"fly\", null);\r\nPlane = __decorate([\r\n    controller()\r\n], Plane);\r\nfunction get(path) {\r\n    return function (target, key) {\r\n        Reflect.defineMetadata('path', path, target, key);\r\n    };\r\n}\r\nfunction controller() {\r\n    return function printMetadata(target) {\r\n        const test = Object.getOwnPropertyNames(Object.getPrototypeOf(target).prototype);\r\n        for (const key of [...test, ...Object.getOwnPropertyNames(target.prototype)]) {\r\n            console.log(key);\r\n            const secret = Reflect.getMetadata('path', target.prototype, key);\r\n            if (secret) {\r\n                console.log(secret);\r\n            }\r\n        }\r\n    };\r\n}\r\n// function printMetadata<T extends {new(...args:any[]):{}}>(target:T)  {\r\n//     // for (const key in target.prototype) {\r\n//     //     const secret = Reflect.getMetadata('secret', target.prototype, key);\r\n//     //     console.log(secret);\r\n//     // }\r\n//     console.log(target.prototype);\r\n// }\r\n// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) : T {\r\n//     return class extends constructor {\r\n//         newProperty = \"new property\";\r\n//         hello = \"override\";\r\n//     }\r\n// }\r\n//\r\n// @classDecorator\r\n// class Greeter {\r\n//     property = \"property\";\r\n//     hello: string;\r\n//     constructor(m: string) {\r\n//         this.hello = m;\r\n//     }\r\n// }\r\n//\r\n// console.log(new Greeter(\"world\"));\r\n\n\n//# sourceURL=webpack:///./features/src/index.ts?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./features/src/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./features/src/index.ts */\"./features/src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./features/src/index.ts?");

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