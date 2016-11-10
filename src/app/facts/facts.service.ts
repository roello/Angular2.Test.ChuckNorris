import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';  // debug
import { FactsResponse } from './factsResponse';
import { CategoryResponse } from './categoryResponse'

@Injectable()
export class FactsService {   

    private apiRandomJokesUrl = 'http://api.icndb.com/jokes/random/';  // URL to get number of random jokes
    private apiCategoriesUrl = 'http://api.icndb.com/categories';  // URL to get categories
    private errorResponse: CategoryResponse = { type: '', value: [''] };

    constructor(private http: Http) {};


    getRandomJokes(count: number): Observable<FactsResponse> {
        let url = `${this.apiRandomJokesUrl}${count}`;
        console.log(url);

        let jResponse = this.http.get(url)
            .map(response => response.json())
            .do(data => console.log('server data:', data));  // debug;
        return jResponse; 
    }    

    getAllCategories(): Observable <CategoryResponse>{
        let jResponse = this.http.get(this.apiCategoriesUrl)
            .map(response => response.json())
            .do(data => console.log('server data:', data));  // debug
                        
        return jResponse; 
    }
} 