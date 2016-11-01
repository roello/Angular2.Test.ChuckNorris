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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var JokeService = (function () {
    function JokeService(http) {
        this.http = http;
        this.apiRandomJokesUrl = 'http://api.icndb.com/jokes/random/'; // URL to get number of random jokes
        this.apiCategoriesUrl = 'http://api.icndb.com/categories'; // URL to get categories
    }
    JokeService.prototype.getRandomJokes = function (count) {
        var url = "" + this.apiRandomJokesUrl + count;
        console.log(url);
        var jResponse = this.http.get(url)
            .map(function (response) { return response.json(); });
        return jResponse;
    };
    JokeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JokeService);
    return JokeService;
}());
exports.JokeService = JokeService;
//# sourceMappingURL=joke.service.js.map