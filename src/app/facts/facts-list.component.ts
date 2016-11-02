import { Component, OnInit } from "@angular/core"
import { FactsService } from "./facts.service"
import { Fact } from "./fact"
import 'rxjs/add/operator/map'

@Component({
    selector: "joke-list-component",
    templateUrl: "jokes/facts-list.component.html",
    providers: [FactsService] 
})
export class FactsListComponent implements OnInit {

    constructor(private jokeService: FactsService) { }
    jokes: Fact[];

    ngOnInit(): void {
        this.jokeService
            .getRandomJokes(5)
            .subscribe(r => this.jokes = r.value);
    }
}