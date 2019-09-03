import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type':  'application/json',
    'Authorization': 'Bearer 7a8c535be2824353b40c549e903748ae'
  })
};

const httpOptionsFile = {
  headers: new HttpHeaders({
    // 'Content-Type':  'multipart/form-data',
    // 'Accept': 'multipart/form-data'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiCoreService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.url}${path}`, httpOptions )
      // .pipe(catchError(this.handleErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.url}${path}`,
      JSON.stringify(body),
      httpOptions
    )
    // .pipe(catchError(this.handleErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.url}${path}`,
      JSON.stringify(body),
      httpOptions
    )
    // .pipe(catchError(this.handleErrors));
  }

  postWithImage(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.url}${path}`,
      body,
      httpOptionsFile
    )
    // .pipe(catchError(this.handleErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.url}${path}`,
      httpOptions
    )
    // .pipe(catchError(this.handleErrors));
  }

}