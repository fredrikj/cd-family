import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-child',
  templateUrl: './push-child.component.html',
  styleUrls: ['./push-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushChildComponent implements OnInit {
  counter = 0;

  get name() {
    console.log(`push-child CD ${(this.counter += 1)}`);
    return 'push-child';
  }
  constructor() {}

  ngOnInit(): void {}
}
