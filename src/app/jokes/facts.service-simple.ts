import { Injectable } from '@angular/core';
import { JokesResponse } from './factsResponse';
import { Joke } from './fact';

const jokes : JokesResponse = { type: "success", value: [{ id: "1", joke: "hahah" }, { id: "2", joke: "whohhah" }] } 

@Injectable()
export class JokeServiceSimple {    

    getRandomJokes(count: number): Joke[] {
        return jokes.value.map(j => this.clone(j)).slice(0, count);
    }

    private clone(object: any) {       
        return JSON.parse(JSON.stringify(object));
    }
}