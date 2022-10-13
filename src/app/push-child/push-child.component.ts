import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
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

  templateSubject = new Subject<number>();

  @Input()
  public parent: string = '';

  get name() {
    console.log(`${this.parent}'s pushy child CD ${(this.counter += 1)}`);
    return 'pushy child';
  }
  constructor(public cdr: ChangeDetectorRef, public service: Service) {}

  ngOnInit(): void {
    this.service.thePublicObservable
      .pipe(
        tap(() =>
          console.log('----------thePublicObservable in pushy child----------')
        )
      )
      .subscribe((x) => {
        this.templateSubject.next(x);
        this.cdr.detectChanges();
      });
  }
}
