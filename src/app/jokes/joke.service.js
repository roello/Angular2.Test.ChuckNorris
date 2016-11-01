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
var core_1 = require('@angular/core');
var jokes = { type: "success", value: [{ id: "1", joke: "hahah" }, { id: "2", joke: "whohhah" }] };
var JokeService = (function () {
    function JokeService() {
    }
    JokeService.prototype.getRandomJokes = function (count) {
        var _this = this;
        return jokes.value.map(function (j) { return _this.clone(j); }).slice(0, count);
    };
    JokeService.prototype.clone = function (object) {
        // hack
        return JSON.parse(JSON.stringify(object));
    };
    JokeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JokeService);
    return JokeService;
}());
exports.JokeService = JokeService;
//# sourceMappingURL=joke.service.js.map