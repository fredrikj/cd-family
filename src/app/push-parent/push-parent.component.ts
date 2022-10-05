import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-push-parent',
  templateUrl: './push-parent.component.html',
  styleUrls: ['./push-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushParentComponent implements OnInit {
  counter = 0;

  get name() {
    console.log(`Pushy CD ${(this.counter += 1)}`);
    return 'Pushy';
  }
  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

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
  }
}
