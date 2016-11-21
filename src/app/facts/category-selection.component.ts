import { Component, Output, Input, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FactsService } from './facts.service';

@Component({
    moduleId: module.id,
    selector: "category-selection",
    template: `<div class="btn-group">
                    <button *ngFor="let cat of categories" value="{{cat}}" type="button" class="{{cat === selectedCategory ? 'btn btn-primary':'btn btn-default' }}" (click)="selectCategory(cat)">{{cat | capitalize}}</button>
               </div>`,
    providers: [FactsService]
})
export class CategorySelectionComponent implements OnInit, OnDestroy  {
    @Output("onChange") public onChange = new EventEmitter();    
    categories: Array<string>;
    initialCategory = 'all' 
    selectedCategory: string = this.initialCategory;        

    constructor(private factsService: FactsService) { }

    ngOnInit(): void {

        console.log('ngOnInit');
        this.categories = new Array<string>();

        this.categories.push(this.initialCategory);
        this.factsService
            .getAllCategories()
            .subscribe(r => this.categories = this.categories.concat(r.value));

        this.onChange.emit({
            value: this.initialCategory
        });
    }

    ngOnDestroy() { console.log('ngOnDestroy'); }

    selectCategory(category: string) {
        this.selectedCategory = category;
        this.onChange.emit({
            value: category
        });
    }    
}