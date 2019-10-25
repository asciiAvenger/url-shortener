import { Injectable } from '@angular/core';
import { Url } from '../models/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // post new row to api
  createShortUrl(url: Url) {
    let id: number;
    return this.http.post('/api', url);
  }

  // get row from api
  getUrl(id: number) {
    return this.http.get<Url>(`/api/${id}`);
  }

}
