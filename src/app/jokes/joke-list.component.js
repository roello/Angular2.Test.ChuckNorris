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
var joke_service_simple_1 = require("./joke.service-simple");
var JokeListComponent = (function () {
    function JokeListComponent(jokeService) {
        this.jokeService = jokeService;
    }
    JokeListComponent.prototype.ngOnInit = function () {
        this.jokes = this.jokeService.getRandomJokes(2);
    };
    JokeListComponent = __decorate([
        core_1.Component({
            selector: "joke-list-component",
            templateUrl: "jokes/joke-list.component.html",
            providers: [joke_service_simple_1.JokeServiceSimple]
        }), 
        __metadata('design:paramtypes', [joke_service_simple_1.JokeServiceSimple])
    ], JokeListComponent);
    return JokeListComponent;
}());
exports.JokeListComponent = JokeListComponent;
//# sourceMappingURL=joke-list.component.js.map