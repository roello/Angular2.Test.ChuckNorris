import { Component, Input, OnInit, SimpleChange, ChangeDetectionStrategy } from "@angular/core"
import { FactsService } from "./facts.service"
import { Fact } from "./fact"
import 'rxjs/add/operator/map'

@Component({
    moduleId: module.id,
    selector: "facts-list-component",
    template: `<blockquote *ngFor="let joke of jokes" style="list-style-type:none">{{joke.joke}}</blockquote>`,
    providers: [FactsService] 
})
export class FactsListComponent {
    @Input() selectedCategory: string;
    jokes: Fact[];

    constructor(private jokeService: FactsService) {
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