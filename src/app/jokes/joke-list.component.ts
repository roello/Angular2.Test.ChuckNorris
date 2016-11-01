import { Component, OnInit } from "@angular/core"
import { JokeService } from "./joke.service"
import { Joke } from "./joke"
import 'rxjs/add/operator/map'; 

@Component({
    selector: "joke-list-component",
    templateUrl: "jokes/joke-list.component.html",
    providers: [JokeService] 
})
export class JokeListComponent implements OnInit {

    constructor(private jokeService: JokeService) { }
    jokes: Joke[];

    ngOnInit(): void {
        this.jokeService
            .getRandomJokes(2)
            .subscribe(r => this.jokes = r.value);
    }
}