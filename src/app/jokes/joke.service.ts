﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JokesResponse } from './JokesResponse';
import { Joke } from './Joke';

const jokes : JokesResponse = { type: "success", value: [{ id: "1", joke: "hahah" }, { id: "2", joke: "whohhah" }] } 

@Injectable()
export class JokeService {    

    getRandomJokes(count: number): Joke[] {
        return jokes.value.map(j => this.clone(j)).slice(0, count);
    }

    private clone(object: any) {
        // hack
        return JSON.parse(JSON.stringify(object));
    }
}