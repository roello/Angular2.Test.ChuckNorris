import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JokeListComponent } from "./joke-list.component";
import { JokeService } from "./joke.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [JokeListComponent],
    bootstrap: [JokeListComponent],
    providers: [JokeService]
})
export class JokesModule {

}