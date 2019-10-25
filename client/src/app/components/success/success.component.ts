import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  id: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.id = this.dataService.id;
  }

  getShortUrl() {
    return `${window.location.host}/${this.id}`;
  }

  getProtocol() {
    return window.location.protocol;
  }

  onClick() {

  }

}
