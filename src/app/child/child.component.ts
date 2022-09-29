import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  counter = 0;

  get name() {
    console.log(`child CD ${(this.counter += 1)}`);
    return 'child';
  }

  constructor() {}

  ngOnInit(): void {}
}
