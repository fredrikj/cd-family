import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  counter = 0;

  templateSubject = this.service.createPrivateCD(
    this.service.createTimer('----------Plainy private CD----------', 7000),
    this.cdr
  );

  get name() {
    console.log(`Plainy CD ${(this.counter += 1)}`);
    return 'Plainy';
  }
  constructor(public cdr: ChangeDetectorRef, public service: Service) {}

  ngOnInit(): void {}
}
