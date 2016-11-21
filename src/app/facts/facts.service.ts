import { FactsModule } from './facts.module';
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

/**
 * Service class for retrieval of Chuck Norris facts from public API. Read more about it at: http://www.icndb.com/api/
 * 
 * @export
 * @class FactsService
 */
@Injectable()
export class FactsService {   

    private apiRandomJokesUrl = 'http://api.icndb.com/jokes/random/';  // URL to get number of random jokes
    private apiCategoriesUrl = 'http://api.icndb.com/categories';  // URL to get categories
    private categoryErrorResponse: CategoryResponse = { type: '', value: [''] };

    constructor(private http: Http) {};    
    
    /**
    * Get random jokes from API
    * 
    * @param {number} count The number of jokes to fetch
    * @returns {Observable<Array<Fact>>}
    * 
    * @memberOf FactsService
    */
    getRandomJokes(count: number): Observable<Array<Fact>> {
        let url = `${this.apiRandomJokesUrl}${count}`;
        console.log(url);

        let jResponse = this.http.get(url)
            .map(this.mapFacts)
            .catch(this.handleError);

        return jResponse;
    }  

    /**
    * Get all categories
    * 
    * @returns {Observable<Array<string>>}
    * 
    * @memberOf FactsService
    */
    getAllCategories(): Observable<Array<string>>{
        let jResponse = this.http.get(this.apiCategoriesUrl)
            .map(this.mapCategories)    
            .catch(this.handleError);        
                        
        return jResponse; 
    }

    /**
     * Get random jokes filtered on by category
     * 
     * @param {number} count The number of jokes to fetch
     * @param {string} category The category to filter on
     * @returns {Observable<Array<Fact>>}
     * 
     * @memberOf FactsService
     */
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