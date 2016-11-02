import { Component, OnInit } from "@angular/core"
import { JokeService } from "./facts.service"
import { Joke } from "./fact"
import 'rxjs/add/operator/map'

@Component({
    selector: "joke-list-component",
    templateUrl: "jokes/facts-list.component.html",
    providers: [JokeService] 
})
export class JokeListComponent implements OnInit {

    constructor(private jokeService: JokeService) { }
    jokes: Joke[];

    ngOnInit(): void {
        this.jokeService
            .getRandomJokes(5)
            .subscribe(r => this.jokes = r.value);
    }
}