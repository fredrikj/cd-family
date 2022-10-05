import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  counter = 0;

  @Input()
  public parent: string = '';

  get name() {
    console.log(`${this.parent}'s child CD ${(this.counter += 1)}`);
    return 'child';
  }

  constructor() {}

  ngOnInit(): void {}
}
