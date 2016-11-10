import { Component, Input, OnInit, SimpleChange, ChangeDetectionStrategy } from "@angular/core"
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
    @Input() selectedCategory: string;

    constructor(private jokeService: FactsService) { }
    jokes: Fact[];
    
    ngOnInit(): void {
        this.jokeService
            .getRandomJokes(5)
            .subscribe(r => this.jokes = r.value.map(decodeJoke));
    }    

    ngOnChanges(changes: SimpleChange) {
        console.log(SimpleChange);
        switch (this.selectedCategory) {
            case 'all':
                {
                    this.jokeService
                        .getRandomJokes(5)
                        .subscribe(r => this.jokes = r.value.map(decodeJoke));
                }
                break;
            default:
                {
                    this.jokeService
                        .getRandomFilteredJokes(5, this.selectedCategory)
                        .subscribe(r => this.jokes = r.value.map(decodeJoke));                    
                }
        }        
    }
}

function decodeJoke(fact: Fact): Fact {    
    return {
        id: fact.id,
        joke: fact.joke.replace(/&quot;/g, '\"')
    }      
}