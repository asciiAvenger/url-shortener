import { Injectable } from '@angular/core';
import { Url } from '../models/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createShortUrl(url: Url) {
    this.http.post('/api', url).subscribe(res => console.log(res));
  }

}
