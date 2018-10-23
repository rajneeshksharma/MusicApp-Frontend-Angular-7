import { Injectable } from '@angular/core';
import { Observable, pipe, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  uri = 'https://boiling-headland-59043.herokuapp.com/api/';
  token: any;
  constructor(private http: HttpClient) { }

signUp(user): Observable<any> {
  console.log(user);
return this.http.post(`${this.uri}users/signup`, user, httpOptions);
}
logIn(user): Observable<any> {
return this.http.post(`${this.uri}users/login`, user, httpOptions);
}
isAuthenticated() {
  this.token = window.localStorage.getItem('token');
  return this.token != null;
}

}
