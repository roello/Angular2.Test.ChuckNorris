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
var facts_service_1 = require("./facts.service");
require('rxjs/add/operator/map');
var JokeListComponent = (function () {
    function JokeListComponent(jokeService) {
        this.jokeService = jokeService;
    }
    JokeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jokeService
            .getRandomJokes(5)
            .subscribe(function (r) { return _this.jokes = r.value; });
    };
    JokeListComponent = __decorate([
        core_1.Component({
            selector: "joke-list-component",
            templateUrl: "jokes/facts-list.component.html",
            providers: [facts_service_1.JokeService]
        }), 
        __metadata('design:paramtypes', [facts_service_1.JokeService])
    ], JokeListComponent);
    return JokeListComponent;
}());
exports.JokeListComponent = JokeListComponent;
//# sourceMappingURL=facts-list.component.js.map