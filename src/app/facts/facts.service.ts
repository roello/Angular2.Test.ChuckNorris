import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FactsResponse } from './factsResponse';

@Injectable()
export class FactsService {   

    private apiRandomJokesUrl = 'http://api.icndb.com/jokes/random/';  // URL to get number of random jokes
    private apiCategoriesUrl = 'http://api.icndb.com/categories';  // URL to get categories

    constructor(private http: Http) { }

    getRandomJokes(count: number): Observable<FactsResponse> {
        let url = `${this.apiRandomJokesUrl}${count}`;
        console.log(url);
        let jResponse = this.http.get(url)
            .map(response => response.json());
        return jResponse; 
    }    
} 