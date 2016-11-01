import { Joke } from "./joke"

export class JokesResponse {
    type: string;
    value: Array<Joke>;    
}