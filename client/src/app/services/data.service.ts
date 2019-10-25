import { Injectable } from '@angular/core';
import { Url } from '../models/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id: number = 0;

  constructor(private http: HttpClient) { }

  // post new shortened url to api
  postShortUrl(url: Url): Observable<any> {
    return this.http.post('/api', url);
  }

  // get specified shortened url from api
  getUrl(id: number): Observable<Url> {
    return this.http.get<Url>(`/api/${id}`);
  }

}
