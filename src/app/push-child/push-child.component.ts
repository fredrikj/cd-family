import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';
import { Service } from '../service';
import { Subject, tap } from 'rxjs';

@Component({
  selector: 'app-push-child',
  templateUrl: './push-child.component.html',
  styleUrls: ['./push-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushChildComponent implements OnInit {
  counter = 0;

  @Input()
  public parent: string = '';

  sharedSubject = new Subject<number>();

  nonSharedSubject = new Subject<number>();

  get name() {
    console.log(`${this.parent}'s pushy child CD ${(this.counter += 1)}`);
    return 'pushy child';
  }
  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private service: Service
  ) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() =>
      this.service.nonSharedObservable
        .pipe(
          tap(() =>
            console.log(
              '----------nonSharedServiceObservable in pushy child----------'
            )
          )
        )
        .subscribe((x) => {
          this.nonSharedSubject.next(x);
          this.cdr.detectChanges();
        })
    );
    this.zone.runOutsideAngular(() =>
      this.service.sharedObservable
        .pipe(
          tap(() =>
            console.log(
              '----------sharedServiceObservable in pushy child----------'
            )
          )
        )
        .subscribe((x) => {
          this.sharedSubject.next(x);
          this.cdr.detectChanges();
        })
    );
  }
}
