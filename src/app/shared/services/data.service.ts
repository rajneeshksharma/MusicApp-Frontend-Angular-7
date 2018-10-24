import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri = 'https://boiling-headland-59043.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  private subject = new BehaviorSubject<any>(0);
  public mysubject = this.subject.asObservable();
  getSongData(): Observable<any> {
    return this.subject.asObservable();
  }
  sendSongData(data) {
    this.subject.next(data);
  }

  gethttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return httpOptions;
  }

  getSongs(): Observable<any> {
    const header = this.gethttpOptions();
    return this.http.get(`${this.uri}songs`, header);
  }
  getPlaylist(): Observable<any> {
    const header = this.gethttpOptions();
    return this.http.get(`${this.uri}playlist`, header);
  }

}