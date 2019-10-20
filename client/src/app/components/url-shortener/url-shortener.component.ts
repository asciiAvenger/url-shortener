import { Component, OnInit } from '@angular/core';
import { Url } from '../../models/url';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  timeoutNumbers: number[] = [];

  model = new Url();

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.timeoutNumbers.push(i);
    }
  }

  onSubmit() {

  }

}
