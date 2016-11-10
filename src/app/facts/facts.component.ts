import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Fact } from "./fact"
import { FactsListComponent } from "./facts-list.component"
import { CategorySelectionComponent } from "./category-selection.component"

@Component({
    moduleId: module.id,
    selector: "facts-component",
    template: `<div class="row">
                    <div class="col-md-12">
                        <category-selection (onChange)="handleChange($event)"></category-selection>
                        <hr />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10"> 
                        <facts-list-component [selectedCategory]="selectedCategory"></facts-list-component>
                    </div>
                </div>`
            
})
export class FactsComponent  {
    selectedCategory: string;  

    handleChange(data) : void{
        console.log('event', data);
        this.selectedCategory = data.value;
    }
}

