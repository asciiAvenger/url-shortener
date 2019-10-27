import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  id: number = 0;

  @ViewChild('urlInput', {static: false}) input: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.id = this.dataService.id;
  }

  getShortUrl() {
    return `${window.location.protocol}//${window.location.host}/${this.id}`;
  }

  onClick() {
    this.input.nativeElement.select();
    document.execCommand('copy');
  }

}
