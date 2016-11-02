import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FactsListComponent } from "./facts-list.component";
import { FactsService } from "./facts.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [FactsListComponent],
    bootstrap: [FactsListComponent],
    providers: [FactsService]
})
export class FactsModule {

}