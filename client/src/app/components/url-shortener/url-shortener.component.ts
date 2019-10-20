import { Component, OnInit } from '@angular/core';
import { Url } from '../../models/url';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  timeoutNumbers: number[] = [];
  model = new Url();
  urlForm: FormGroup = new FormGroup({
    url: new FormControl('', Validators.pattern('.+\\..{2,}')),
    timeout: new FormControl(),
    message: new FormControl()
  });

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.timeoutNumbers.push(i);
    }
  }

  onSubmit() {

  }

}
