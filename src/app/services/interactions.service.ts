import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Interaction } from '../models/interaction';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  SERVER_URL = 'https://dsafe.eu-gb.cf.appdomain.cloud/interactions';
  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  public getInteractions(): Observable<Interaction[]> {
    return this.httpClient.get<Interaction[]>(this.SERVER_URL); 
  }

  private extractResponse(response: Response) {
    if (response.status < 200 || response.status >= 300) {
       throw new Error('Bad response status: ' + response.status);
    }
    let body = response.json(); // parse JSON string into JavaScript objects

    return body || { };
} 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`InteractionService: ${message}`);
  }
}
