import { Component, OnInit } from '@angular/core';
import { Url } from '../../models/url';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  timeoutNumbers: number[] = [];
  urlForm: FormGroup = new FormGroup({
    url: new FormControl('', Validators.pattern('.+\\..{2,}')),
    timeout: new FormControl(),
    message: new FormControl()
  });

  constructor(private dataService: DataService) { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.timeoutNumbers.push(i);
    }
  }

  onSubmit() {
    let url = new Url(this.urlForm.value.url, Number(this.urlForm.value.timeout), this.urlForm.value.message);
    this.dataService.createShortUrl(url);
  }

}
