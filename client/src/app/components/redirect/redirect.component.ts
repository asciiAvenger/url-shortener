import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Url } from 'src/app/models/url';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  shortenedUrl: Url = new Url();

  progressBarPercent: number = 100;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // get the /:id and load the respective model
    const id = this.route.snapshot.params.id;
    this.dataService.getUrl(id).subscribe(url => this.shortenedUrl = url);
  }

  onCountdownFinished() {
    // window.location.href = this.shortenedUrl.url;
  }

}
