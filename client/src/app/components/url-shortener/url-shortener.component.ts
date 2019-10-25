import { Component, OnInit } from '@angular/core';
import { Url } from '../../models/url';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  timeoutNumbers: number[] = [];
  urlForm: FormGroup = new FormGroup({
    url: new FormControl('', Validators.pattern('https?://.+\\..{2,}')),
    timeout: new FormControl(),
    message: new FormControl()
  });

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.timeoutNumbers.push(i);
    }
  }

  onSubmit() {
    let url = new Url(this.urlForm.value.url, Number(this.urlForm.value.timeout), this.urlForm.value.message);
    this.dataService.postShortUrl(url).subscribe(data => {
      if (data.success) {
        this.dataService.id = data.id;
        this.router.navigateByUrl('/success');
      }
    });
  }

}
