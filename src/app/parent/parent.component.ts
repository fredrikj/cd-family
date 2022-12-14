import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
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
  constructor(
    private zone: NgZone,
    public cdr: ChangeDetectorRef,
    public service: Service
  ) {}

  ngOnInit(): void {
    addEventListener('click', () =>
      console.log('----------Plainy default click CD----------')
    );
    this.zone.runOutsideAngular(() =>
      addEventListener('click', () => {
        console.log('----------Plainy private click CD----------');
        this.cdr.detectChanges();
      })
    );
    fromEvent(window, 'click').subscribe(() =>
      console.log('----------Plainy observable default click CD----------')
    );
    this.zone.runOutsideAngular(() =>
      fromEvent(window, 'click').subscribe(() => {
        console.log('----------Plainy observable private click CD----------');
        this.cdr.detectChanges();
      })
    );
  }
}
