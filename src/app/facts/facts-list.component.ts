import { Component, Input, OnInit, SimpleChange, ChangeDetectionStrategy } from "@angular/core"
import { FactsService } from "./facts.service"
import { FactsResponse } from "./factsResponse"
import { Fact } from "./fact"
import 'rxjs/add/operator/map'

@Component({
    moduleId: module.id,
    selector: "facts-list-component",
    template: `<div>
                    <div *ngIf="errorMsg" class="alert alert-danger">  
                        {{ errorMsg }}
                    </div>  
                    <p *ngIf="!jokes && !errorMsg"><em>Loading...</em></p>
                    <blockquote *ngFor="let joke of jokes" style="list-style-type:none">{{joke.joke}}</blockquote>
                </div>`,
    providers: [FactsService] 
})
export class FactsListComponent {
    @Input() selectedCategory: string;    
    errorMsg: any;
    jokes: Fact[];

    constructor(private jokeService: FactsService) {
        
    }    

    ngOnChanges(changes: SimpleChange) {
        console.log(SimpleChange);
        switch (this.selectedCategory) {
            case 'all':
                {
                    this.jokeService
                        .getRandomJokes(5)
                        .subscribe(
                            r => this.jokes = r.map(this.decodeJoke),
                            error => this.errorMsg = <any>error
                    );
                }
                break;
            default:
                {
                    this.jokeService
                        .getRandomFilteredJokes(5, this.selectedCategory)
                        .subscribe(
                            r => this.jokes = r.map(this.decodeJoke),
                            error => this.errorMsg = <any>error);                    
                }
        }        
    }

    private decodeJoke(fact: Fact): Fact {
        return {
            categories: fact.categories,
            id: fact.id,
            joke: fact.joke.replace(/&quot;/g, '\"')
        }
    }
}