import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';  // debug
import { FactsResponse } from './factsResponse';
import { Fact } from './fact';
import { CategoryResponse } from './categoryResponse'

@Injectable()
export class FactsService {   

    private apiRandomJokesUrl = 'http://api.icndb.com/jokes/random/';  // URL to get number of random jokes
    private apiCategoriesUrl = 'http://api.icndb.com/categories';  // URL to get categories
    private categoryErrorResponse: CategoryResponse = { type: '', value: [''] };

    constructor(private http: Http) {};

    getRandomJokes_dep(count: number): Observable<FactsResponse> {
        let url = `${this.apiRandomJokesUrl}${count}`;
        console.log(url);

        let jResponse = this.http.get(url)
            .map(response => response.json());
            
        return jResponse; 
    }  

    getRandomJokes(count: number): Observable<Array<Fact>> {
        let url = `${this.apiRandomJokesUrl}${count}`;
        console.log(url);

        let jResponse = this.http.get(url)
            .map(this.mapFacts)
            .catch(this.handleError);

        return jResponse;
    }         

    getAllCategories(): Observable<Array<string>>{
        let jResponse = this.http.get(this.apiCategoriesUrl)
            .map(this.mapCategories)    
            .catch(this.handleError);        
                        
        return jResponse; 
    }

    getRandomFilteredJokes(count: number, category: string): Observable<Array<Fact>> {
        let url = `${this.apiRandomJokesUrl}${count}/?limitTo=${category}`;

        let jResponse = this.http.get(url)
            .map(this.mapFacts)
            .catch(this.handleError);
            
        return jResponse;      
    }

    private decodeJoke(fact: Fact): Fact {
        return {
            categories: fact.categories,
            id: fact.id,
            joke: fact.joke.replace(/&quot;/g, '\"')
        }
    }

    private mapFacts(response: Response): Fact[] {
        // The response of the API has a value
        // property with the actual results
        // We also could check the API:s 'type' property and throw an error if other than success.
        return response.json().value;
    }  

    private mapCategories(response: Response): string[] {
        // The response of the API has a value
        // property with the actual results
        // We also could check the API:s 'type' property and throw an error if other than success.
        return response.json().value;
    }  

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
} 