import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

export class BaseService {
  protected prefix: string = '';

  constructor(private httpClient: HttpClient, prefix: string) {
    this.prefix = prefix;
  }

  public get(action: string): Observable<any> {
    return this.httpClient.get(`${this.prefix}/${action}`).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public getParameters(action: string, params: { [index: string]: any }): Observable<any> {
    let queryParams: HttpParams = new HttpParams();
    let key: string = '';
    for (key in params) {
      debugger;
      if (params.hasOwnProperty(key)) {
        queryParams.append(key, params[key]);
      }
    }
    return this.httpClient.get(action, {
      params: queryParams
    });
  }

  public post(action: string): Observable<any> {
    return this.httpClient.get(action);
  }

  public put(action: string): Observable<any> {
    return this.httpClient.get(action);
  }

  public patch(action: string): Observable<any> {
    return this.httpClient.get(action);
  }

  public delete(action: string): Observable<any> {
    return this.httpClient.get(action);
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
