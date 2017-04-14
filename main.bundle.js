webpackJsonp([1,4],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "div{\r\n    background-color: #ffcc34;\r\n    margin-bottom: 10px;\r\n    border-bottom: 1px dashed #000;\r\n    border-top: 1px dashed #777;\r\n}\r\n\r\ndiv>div{\r\n    background-color: #ff22ff;\r\n    padding-left: 10px;\r\n}\r\ndiv>div>div{\r\n    background-color: #22ccaa;\r\n    padding-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  NgxHihghlight\r\n</h1>\r\n<input type=\"text\" [(ngModel)]=\"searchTerm\" />\r\n<div [highlight]=\"searchTerm\">\r\n  <div>\r\n    some text before the loremo ipsum with html tags to check they are not chagend.\r\n    html div span \r\n  </div>\r\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis, odio nec dictum facilisis, enim nunc scelerisque\r\n  nisi, maximus semper felis dui eget neque. Phasellus ante felis, maximus sed justo mattis, semper pharetra neque. Pellentesque\r\n  ante massa, pulvinar ac massa sit amet, malesuada fringilla dui. Mauris sollicitudin sollicitudin justo vel elementum.\r\n  Fusce et mattis magna, a dictum augue. Pellentesque rhoncus lacus molestie augue consectetur, ut hendrerit mi maximus.\r\n  Quisque cursus est sit amet molestie rutrum. Morbi faucibus sodales lacus et lacinia. Pellentesque id elit condimentum,\r\n  lacinia tellus vitae, ornare lectus. Cras nisi massa, maximus viverra vestibulum ac, sollicitudin id arcu. Nam a commodo\r\n  massa.\r\n  <div>\r\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, suscipit atque excepturi rem culpa, aperiam et. Quae tempora\r\n    qui molestias distinctio beatae suscipit doloremque reiciendis, quisquam vel, recusandae, obcaecati dolor.\r\n    <div>\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, suscipit atque excepturi rem culpa, aperiam et. Quae tempora\r\n      qui molestias distinctio beatae suscipit doloremque reiciendis, quisquam vel, recusandae, obcaecati dolor.\r\n    </div>\r\n  </div>\r\n  <div>\r\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, suscipit atque excepturi rem culpa, aperiam et. Quae tempora\r\n    qui molestias distinctio beatae suscipit doloremque reiciendis, quisquam vel, recusandae, obcaecati dolor.\r\n    <div>\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, suscipit atque excepturi rem culpa, aperiam et. Quae tempora\r\n      qui molestias distinctio beatae suscipit doloremque reiciendis, quisquam vel, recusandae, obcaecati dolor.\r\n    </div>\r\n  </div>\r\n<ul>\r\n  <li *ngFor=\"let item of items\">{{item}}</li>\r\n</ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.items = [];
        for (var i = 0; i < 100; i++) {
            this.items.push("Item" + i);
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(137),
        styles: [__webpack_require__(135)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_highlight_highlight_module__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_highlight_highlight_module__["a" /* HighlightModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.searchTerm = undefined;
        this.caseSensitive = true;
        this.viewRendered = false;
        this.WRAPPER_TOKEN = "==--==##";
    }
    Object.defineProperty(HighlightDirective.prototype, "caseSensitivity", {
        get: function () { return this.caseSensitive ? '' : 'i'; },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.ngOnChanges = function (changes) {
        this.highlightSearchTerm();
    };
    HighlightDirective.prototype.ngAfterViewInit = function () {
        this.highlightSearchTerm();
    };
    HighlightDirective.prototype.ngAfterViewChecked = function () {
        this.viewRendered = true;
    };
    HighlightDirective.prototype.highlightSearchTerm = function () {
        // initial ngChage call will result with null \ undefined.
        if (!this.searchTerm) {
            // when user deletes all text the searchTerm is set to '' we need to remove all marks.
            if (this.viewRendered) {
                this.removePreviouslyMarkedTextInNode();
            }
            return;
        }
        ;
        if (this.el.nativeElement) {
            this.removePreviouslyMarkedTextInNode();
            this.markMatchedTextTokens(this.el.nativeElement);
        }
    };
    HighlightDirective.prototype.markMatchedTextTokens = function (htmlNode) {
        var _this = this;
        var _searchTerm = this.getSearchTerm();
        var searchRegex = new RegExp(_searchTerm, 'gmi');
        var _searchTermUniqueTokens = this.getUniqueTokenWrappedSearchTerm();
        var searchRegexUniqueTokens = new RegExp(_searchTermUniqueTokens, 'gmi');
        this.traverseHtmlElementsTree(htmlNode, function (e) {
            _this.traverseNodesInElement(htmlNode.childNodes, function (node) { return _this.wrapUniqueTokensAroundMatchedText(node, searchRegex); });
        });
        this.markMatchedTextAndRemoveUniqueTokens(htmlNode, searchRegexUniqueTokens);
    };
    HighlightDirective.prototype.markMatchedTextAndRemoveUniqueTokens = function (htmlNode, searchRegex) {
        var _this = this;
        if (htmlNode.innerHTML) {
            var innerHtml = htmlNode.innerHTML;
            var newHtml = innerHtml.replace(searchRegex, function (match) {
                var wrapperLength = _this.WRAPPER_TOKEN.length;
                var markedStr = match.substr(wrapperLength, match.length - (wrapperLength * 2));
                return "<mark>" + markedStr + "</mark>";
            });
            htmlNode.innerHTML = newHtml;
        }
    };
    HighlightDirective.prototype.traverseNodesInElement = function (nodes, visitCallback) {
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                visitCallback(node);
            }
        }
    };
    HighlightDirective.prototype.wrapUniqueTokensAroundMatchedText = function (htmlNode, searchRegex) {
        var innerText = htmlNode.nodeValue;
        var newText = innerText.replace(searchRegex, this.WRAPPER_TOKEN + "$&" + this.WRAPPER_TOKEN);
        htmlNode.nodeValue = newText;
    };
    HighlightDirective.prototype.traverseHtmlElementsTree = function (currentNode, visitCallback) {
        if (currentNode) {
            visitCallback(currentNode);
        }
        for (var i = 0; i < currentNode.children.length; i++) {
            var childNode = currentNode.children[i];
            this.markMatchedTextTokens(childNode);
        }
    };
    HighlightDirective.prototype.removePreviouslyMarkedTextInNode = function () {
        var node = this.el.nativeElement;
        var markingPattern = new RegExp('<mark>|<\/mark>', 'g');
        var cleanText = node.innerHTML.replace(markingPattern, '');
        node.innerHTML = cleanText;
    };
    // private highlightedNewTextInNode() {
    //   const node = this.el.nativeElement;
    //   const htmlNegativeLookaheadPattern = '(?![^<>]*>)';
    //   const searchTermPattern = this.getSearchTerm();
    //   const searchRegex = new RegExp(searchTermPattern + htmlNegativeLookaheadPattern, 'gmi');
    //   const markedText = node.innerHTML.replace(searchRegex, '<mark>$&</mark>');
    //   node.innerHTML = markedText;
    // }
    HighlightDirective.prototype.getSearchTerm = function () {
        var escapedSearchTerm = "" + this.escapeRegExp(this.searchTerm);
        var spaceToMultiMatchRegex = new RegExp(' ', 'gm');
        escapedSearchTerm = escapedSearchTerm.replace(spaceToMultiMatchRegex, '|');
        return escapedSearchTerm;
    };
    HighlightDirective.prototype.getUniqueTokenWrappedSearchTerm = function () {
        var escapedSearchTerm = this.escapeRegExp(this.searchTerm);
        var spaceToMultiMatchRegex = new RegExp(' ', 'gm');
        escapedSearchTerm = escapedSearchTerm.replace(spaceToMultiMatchRegex, this.WRAPPER_TOKEN + "|" + this.WRAPPER_TOKEN);
        escapedSearchTerm = "" + this.WRAPPER_TOKEN + escapedSearchTerm + this.WRAPPER_TOKEN;
        return escapedSearchTerm;
    };
    HighlightDirective.prototype.escapeRegExp = function (str) {
        return str.replace('/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g', '\\$&');
    };
    return HighlightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('highlight'),
    __metadata("design:type", Object)
], HighlightDirective.prototype, "searchTerm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], HighlightDirective.prototype, "caseSensitive", void 0);
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[highlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _a || Object])
], HighlightDirective);

var _a;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__highlight_directive__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HighlightModule = (function () {
    function HighlightModule() {
    }
    return HighlightModule;
}());
HighlightModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__highlight_directive__["a" /* HighlightDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__highlight_directive__["a" /* HighlightDirective */]]
    })
], HighlightModule);

//# sourceMappingURL=highlight.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map