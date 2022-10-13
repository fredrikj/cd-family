import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { tap, timer } from 'rxjs';
import { Service } from '../service';

@Component({
  selector: 'app-push-parent',
  templateUrl: './push-parent.component.html',
  styleUrls: ['./push-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushParentComponent implements OnInit {
  counter = 0;

  templateSubject = this.service.createPrivateCD(
    this.service.createTimer('----------Pushy private CD----------', 8000),
    this.cdr
  );

  get name() {
    console.log(`Pushy CD ${(this.counter += 1)}`);
    return 'Pushy';
  }
  constructor(
    private zone: NgZone,
    private service: Service,
    private cdr: ChangeDetectorRef
  ) {}

  templateObservable = timer(3000).pipe(
    tap(() => console.log('----------templateObservable in Pushy----------'))
  );

  inZoneObservable = timer(4000).pipe(
    tap(() => console.log('----------inZoneObservable in Pushy----------'))
  );

  outsideZoneObservable = timer(4000).pipe(
    tap(() => console.log('----------outsideZoneObservable in Pushy----------'))
  );

  ngOnInit(): void {
    setTimeout(
      () => console.log('----------setTimeout in Pushy----------'),
      1000
    );
    this.zone.runOutsideAngular(() =>
      setTimeout(() => {
        console.log('----------detectChanges in Pushy----------');
        this.cdr.detectChanges();
      }, 2000)
    );
    this.inZoneObservable.subscribe();
    this.zone.runOutsideAngular(() => this.outsideZoneObservable.subscribe());
  }
}
