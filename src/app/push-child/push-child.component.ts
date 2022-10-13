import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-push-child',
  templateUrl: './push-child.component.html',
  styleUrls: ['./push-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushChildComponent implements OnInit {
  counter = 0;

  templateSubject = this.service.createPrivateCD(
    this.service.createTimer(
      '----------pushy child private CD----------',
      5000
    ),
    this.cdr
  );

  @Input()
  public parent: string = '';

  get name() {
    console.log(`${this.parent}'s pushy child CD ${(this.counter += 1)}`);
    return 'pushy child';
  }
  constructor(public cdr: ChangeDetectorRef, public service: Service) {}

  ngOnInit(): void {}
}
