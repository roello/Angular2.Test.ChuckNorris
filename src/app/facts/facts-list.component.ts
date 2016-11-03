import { Component, OnInit } from "@angular/core"
import { FactsService } from "./facts.service"
import { Fact } from "./fact"
import 'rxjs/add/operator/map'

@Component({
    moduleId: module.id,
    selector: "facts-list-component",
    templateUrl: "facts-list.component.html",
    providers: [FactsService] 
})
export class FactsListComponent implements OnInit {

    constructor(private jokeService: FactsService) { }
    jokes: Fact[];
    
    ngOnInit(): void {
        this.jokeService
            .getRandomJokes(10)
            .subscribe(r => this.jokes = r.value.map(decodeJoke));
    }    
}

function decodeJoke(fact: Fact): Fact {    
    return {
        id: fact.id,
        joke: fact.joke.replace(/&quot;/g, '\"')
    }      
}