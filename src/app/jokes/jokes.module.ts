import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { JokeListComponent } from "./joke-list.component";
import { JokeServiceSimple } from "./joke.service-simple";

@NgModule({
    imports: [BrowserModule],
    declarations: [JokeListComponent],
    bootstrap: [JokeListComponent],
    providers: [JokeServiceSimple]
})
export class JokesModule {

}