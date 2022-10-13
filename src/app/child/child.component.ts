import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Service } from '../service';

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

  templateSubject = this.service.createPrivateCD(
    this.service.createSharedTimer(6000),
    this.cdr
  );

  constructor(public cdr: ChangeDetectorRef, public service: Service) {}

  ngOnInit(): void {}
}
