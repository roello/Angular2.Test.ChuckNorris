"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require('@angular/http');
var facts_list_component_1 = require("./facts-list.component");
var facts_service_1 = require("./facts.service");
var JokesModule = (function () {
    function JokesModule() {
    }
    JokesModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [facts_list_component_1.JokeListComponent],
            bootstrap: [facts_list_component_1.JokeListComponent],
            providers: [facts_service_1.JokeService]
        }), 
        __metadata('design:paramtypes', [])
    ], JokesModule);
    return JokesModule;
}());
exports.JokesModule = JokesModule;
//# sourceMappingURL=facts.module.js.map