import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { FactsService } from './facts.service';

@Component({
    moduleId: module.id,
    selector: "category-selection",
    templateUrl: "category-selection.component.html",
    //template: `<button type="button" class="btn btn-primary"[ngClass] = "selectedCategory === 'nerdy' ? 'btn btn-primary' : 'btn btn-default'" * ngFor="let cat of categories" value= "{{cat}}" > {{cat }}</button><button type="button" class="btn btn-primary" [ngClass]="selectedCategory === 'nerdy' ? 'btn btn-primary' : 'btn btn-default'" *ngFor="let cat of categories" value="{{cat}}">{{cat}}</button>`,
    providers: [FactsService] 
})
export class CategorySelectionComponent implements OnInit{
    
    categories: Array<string>;
    selectedCategory: string;

    constructor(private factsService: FactsService) {  }
    
    ngOnInit(): void {
        this.categories = new Array<string>();

        this.categories.push('all');
        this.factsService
            .getAllCategories()
            .subscribe(r => this.categories = this.categories.concat(r.value));
        
        this.selectedCategory = "all";        
    }   
} 

//Use this in the view somehow, with directive ?
function toTitleCase(str: string): string {
    let upperCased = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    return upperCased;
}