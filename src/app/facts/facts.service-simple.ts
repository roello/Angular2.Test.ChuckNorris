import { Injectable } from '@angular/core';
import { FactsResponse } from './factsResponse';
import { Fact } from './fact';

const jokes: FactsResponse = { type: "success", value: [{ id: "1", joke: "hahah" }, { id: "2", joke: "whohhah" }] } 

@Injectable()
export class JokeServiceSimple {    

    getRandomJokes(count: number): Fact[] {
        return jokes.value.map(j => this.clone(j)).slice(0, count);
    }

    private clone(object: any) {       
        return JSON.parse(JSON.stringify(object));
    }
}