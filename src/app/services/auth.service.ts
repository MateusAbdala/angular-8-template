import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateUser(data): Observable<User> {
    return this.http.post<User>('/api/Usertracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }  

  // GET
  GetIssue(id): Observable<User> {
    return this.http.get<User>('/api/Usertracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // GET
  GetIssues(): Observable<User> {
    return this.http.get<User>('/api/Usertracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // PUT
  UpdateUser(id, data): Observable<User> {
    return this.http.put<User>('/api/Usertracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // DELETE
  DeleteUser(id){
    return this.http.delete<User>('/api/Usertracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  // Error handling
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.error(errorMessage);
     return throwError(errorMessage);
  }
}
