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
/******/ 	return __webpack_require__(__webpack_require__.s = "./stats/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./stats/src/CsvFileReader.ts":
/*!************************************!*\
  !*** ./stats/src/CsvFileReader.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\r\nclass CsvFileReader {\r\n    constructor(fileName) {\r\n        this.fileName = fileName;\r\n        this.data = [];\r\n    }\r\n    read() {\r\n        this.data = fs_1.default.readFileSync(this.fileName, {\r\n            encoding: 'utf8'\r\n        }).split('\\n').map((row) => {\r\n            return row.split(',');\r\n        });\r\n    }\r\n}\r\nexports.CsvFileReader = CsvFileReader;\r\n\n\n//# sourceURL=webpack:///./stats/src/CsvFileReader.ts?");

/***/ }),

/***/ "./stats/src/MatchReader.ts":
/*!**********************************!*\
  !*** ./stats/src/MatchReader.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./stats/src/utils.ts\");\r\nconst CsvFileReader_1 = __webpack_require__(/*! ./CsvFileReader */ \"./stats/src/CsvFileReader.ts\");\r\nclass MatchReader {\r\n    constructor(reader) {\r\n        this.reader = reader;\r\n        this.matches = [];\r\n    }\r\n    static fromCsv(filename) {\r\n        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));\r\n    }\r\n    load() {\r\n        this.reader.read();\r\n        this.matches = this.reader.data.map((row) => {\r\n            return [\r\n                utils_1.dateStringToDate(row[0]),\r\n                row[1],\r\n                row[2],\r\n                parseInt(row[3]),\r\n                parseInt(row[4]),\r\n                row[5],\r\n                row[6]\r\n            ];\r\n        });\r\n    }\r\n}\r\nexports.MatchReader = MatchReader;\r\n\n\n//# sourceURL=webpack:///./stats/src/MatchReader.ts?");

/***/ }),

/***/ "./stats/src/MatchResult.ts":
/*!**********************************!*\
  !*** ./stats/src/MatchResult.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MatchResult;\r\n(function (MatchResult) {\r\n    MatchResult[\"HomeWin\"] = \"H\";\r\n    MatchResult[\"AwayWin\"] = \"A\";\r\n    MatchResult[\"Draw\"] = \"D\";\r\n})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));\r\n\n\n//# sourceURL=webpack:///./stats/src/MatchResult.ts?");

/***/ }),

/***/ "./stats/src/SummaryReporter.ts":
/*!**************************************!*\
  !*** ./stats/src/SummaryReporter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst WinsAnalysis_1 = __webpack_require__(/*! ./analyzers/WinsAnalysis */ \"./stats/src/analyzers/WinsAnalysis.ts\");\r\nconst HtmlReport_1 = __webpack_require__(/*! ./reportTargest/HtmlReport */ \"./stats/src/reportTargest/HtmlReport.ts\");\r\nclass SummaryReporter {\r\n    constructor(analyzer, outputTarget) {\r\n        this.analyzer = analyzer;\r\n        this.outputTarget = outputTarget;\r\n    }\r\n    static winsAnalysisWithHtmlReport(team) {\r\n        return new SummaryReporter(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());\r\n    }\r\n    buildAndPrintReport(matches) {\r\n        const output = this.analyzer.run(matches);\r\n        this.outputTarget.print(output);\r\n    }\r\n}\r\nexports.SummaryReporter = SummaryReporter;\r\n\n\n//# sourceURL=webpack:///./stats/src/SummaryReporter.ts?");

/***/ }),

/***/ "./stats/src/analyzers/WinsAnalysis.ts":
/*!*********************************************!*\
  !*** ./stats/src/analyzers/WinsAnalysis.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst MatchResult_1 = __webpack_require__(/*! ../MatchResult */ \"./stats/src/MatchResult.ts\");\r\nclass WinsAnalysis {\r\n    constructor(team) {\r\n        this.team = team;\r\n    }\r\n    run(matches) {\r\n        let wins = 0;\r\n        for (const match of matches) {\r\n            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {\r\n                wins++;\r\n            }\r\n            else {\r\n                if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {\r\n                    wins++;\r\n                }\r\n            }\r\n        }\r\n        return `Team ${this.team} won ${wins} games`;\r\n    }\r\n}\r\nexports.WinsAnalysis = WinsAnalysis;\r\n\n\n//# sourceURL=webpack:///./stats/src/analyzers/WinsAnalysis.ts?");

/***/ }),

/***/ "./stats/src/index.ts":
/*!****************************!*\
  !*** ./stats/src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nconst SummaryReporter_1 = __webpack_require__(/*! ./SummaryReporter */ \"./stats/src/SummaryReporter.ts\");\r\nconst MatchReader_1 = __webpack_require__(/*! ./MatchReader */ \"./stats/src/MatchReader.ts\");\r\nconst fileName = path_1.default.resolve(__dirname, '..', 'football.csv');\r\nconst matchReader = MatchReader_1.MatchReader.fromCsv(fileName);\r\nconst summaryMan = SummaryReporter_1.SummaryReporter.winsAnalysisWithHtmlReport('West Ham');\r\nmatchReader.load();\r\nsummaryMan.buildAndPrintReport(matchReader.matches);\r\n\n\n//# sourceURL=webpack:///./stats/src/index.ts?");

/***/ }),

/***/ "./stats/src/reportTargest/HtmlReport.ts":
/*!***********************************************!*\
  !*** ./stats/src/reportTargest/HtmlReport.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\r\nclass HtmlReport {\r\n    print(report) {\r\n        const html = `<div>\r\n                        <h1>Analysis Output</h1>\r\n                        <div>${report}</div>\r\n                      </div>`;\r\n        fs_1.default.writeFileSync('report.html', html);\r\n    }\r\n}\r\nexports.HtmlReport = HtmlReport;\r\n\n\n//# sourceURL=webpack:///./stats/src/reportTargest/HtmlReport.ts?");

/***/ }),

/***/ "./stats/src/utils.ts":
/*!****************************!*\
  !*** ./stats/src/utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.dateStringToDate = (dateString) => {\r\n    const dateParts = dateString.split('/').map((value) => {\r\n        return parseInt(value);\r\n    });\r\n    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);\r\n};\r\n\n\n//# sourceURL=webpack:///./stats/src/utils.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });