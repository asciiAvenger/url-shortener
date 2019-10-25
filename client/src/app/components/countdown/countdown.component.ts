import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  progressBarPercent: number = 100;
  @Input() timeout: number;
  @Output() finished = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.countdown();
  }

  // count down by 1 every timout * 10 ms (timeout is given in seconds)
  countdown() {
    if (this.progressBarPercent <= 0) {
      this.countdownFinished();
    } else {
      setTimeout(() => {
        this.progressBarPercent--;
        this.countdown();
      }, this.timeout * 10);
    }
  }

  countdownFinished() {
    this.finished.emit();
  }

}
