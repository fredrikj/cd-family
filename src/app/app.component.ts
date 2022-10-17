import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 0;
  docheckTime = 0;
  viewcheckcounter = 0;
  get name() {
    console.log(`root CD ${(this.counter += 1)}`);
    return 'root';
  }
  ngDoCheck() {
    this.docheckTime = performance.now();
    console.log(`root docheck`);
  }
  ngAfterViewChecked() {
    console.log(
      `root viewchecked ${(this.viewcheckcounter += 1)} ${(
        performance.now() - this.docheckTime
      ).toFixed(1)}`
    );
  }
}
