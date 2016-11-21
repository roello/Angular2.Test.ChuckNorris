import { NgModule, Input, Output, EventEmitter } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { FactsListComponent } from "./facts-list.component"
import { FactsComponent } from "./facts.component"
import { CategorySelectionComponent } from "./category-selection.component"
import { FactsService } from "./facts.service"
import { Capitalize } from "../shared/capitalization.pipe"

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [FactsComponent, FactsListComponent, CategorySelectionComponent, Capitalize],
    bootstrap: [FactsComponent],
    providers: [FactsService]
})
export class FactsModule {

}