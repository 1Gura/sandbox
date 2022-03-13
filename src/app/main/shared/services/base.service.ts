import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export class BaseService {
  protected prefix: string = '';
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient, prefix: string) {
    this.prefix = prefix;
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH');
    this.headers = this.headers.append('Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers,' +
      ' Origin,Accept, X-Requested-With,' +
      ' Content-Type, Access-Control-Request-Method,' +
      ' Access-Control-Request-Headers');
  }

  public get(action: string): Observable<any> {
    return this.httpClient.get(`${this.prefix}/${action}`).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public getParameters(action: string, params: { [index: string]: any }): Observable<any> {
    let queryParams: HttpParams = new HttpParams();
    let key: string = '';
    for (key in params) {
      if (params.hasOwnProperty(key)) {
        queryParams = queryParams.append(key, params[key]);
      }
    }
    return this.httpClient.get(`${this.prefix}/${action}`, {
      params: queryParams
    }).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public post(action: string, body: Object): Observable<any> {
    debugger
    return this.httpClient.post(`${this.prefix}/${action}`, body, {headers: this.headers})
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public put(action: string): Observable<any> {
    return this.httpClient.get(action)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));

  }

  public patch(action: string, body: Object): Observable<any> {
    return this.httpClient.patch(`${this.prefix}/${action}`, body, {headers: this.headers})
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public delete(action: string): Observable<any> {
    return this.httpClient.delete(`${this.prefix}/${action}`, {headers: this.headers})
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));

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
