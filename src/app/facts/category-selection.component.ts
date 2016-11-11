import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { FactsService } from './facts.service';

@Component({
    moduleId: module.id,
    selector: "category-selection",
    template: `<div class="btn-group">
                    <button *ngFor="let cat of categories" value="{{cat}}" type="button" class="{{cat === selectedCategory ? 'btn btn-primary':'btn btn-default' }}" (click)="selectCategory(cat)">{{cat | capitalize}}</button>
               </div>`,
    providers: [FactsService]
})
export class CategorySelectionComponent implements OnInit {
    @Output("onChange") public onChange = new EventEmitter();
    
    categories: Array<string>;
    selectedCategory: string = "all";    

    constructor(private factsService: FactsService) { }

    ngOnInit(): void {
        this.categories = new Array<string>();

        this.categories.push('all');
        this.factsService
            .getAllCategories()
            .subscribe(r => this.categories = this.categories.concat(r.value));
    }

    selectCategory(category: string) {
        this.selectedCategory = category;
        this.onChange.emit({
            value: category
        });
    }    
}