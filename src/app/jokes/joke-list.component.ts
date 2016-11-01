import { Component, OnInit } from "@angular/core"
import { JokeServiceSimple } from "./joke.service-simple"
import { Joke } from "./joke"

@Component({
    selector: "joke-list-component",
    templateUrl: "jokes/joke-list.component.html",
    providers: [JokeServiceSimple] 
})
export class JokeListComponent implements OnInit {

    constructor(private jokeService: JokeServiceSimple) { }
    jokes: Joke[];

    ngOnInit(): void {
        this.jokes = this.jokeService.getRandomJokes(2);
    }
}