import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:8000/api/';
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
  forPass(user): Observable<any> {
    return this.http.post(`${this.uri}users/forpass`, user, httpOptions);
  }
  testAuth(user): Observable<any> {
    return this.http.post(`${this.uri}users/forpasskey`, user, httpOptions);
  }
  newPass(user): Observable<any> {
    console.log(user, 'ffffffffffffffffff');
    return this.http.post(`${this.uri}users/newpass`, user , httpOptions);
  }
}
