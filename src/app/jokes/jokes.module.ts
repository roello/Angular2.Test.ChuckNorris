import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { JokeListComponent } from "./joke-list.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [JokeListComponent],
    bootstrap: [JokeListComponent]
})
export class JokesModule {

}