import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri = 'http://localhost:8000/api/';

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

  getSongs(page): Observable<any> {
    const header = this.gethttpOptions();
    return this.http.get(`${this.uri}songs?perPage=5&page=${page}`, header);
  }

  getPlaylist(): Observable<any> {
    const header = this.gethttpOptions();
    return this.http.get(`${this.uri}playlist`, header);
  }

  addSong(data): Observable<any> {
    const header = this.gethttpOptions();
    return this.http.post(`${this.uri}/songs`, data, header);
  }
  searchSong(data): Observable <any> {
  const header = this.gethttpOptions();
  return this.http.post(`${this.uri}songs/search`, data, header);
  }
}
