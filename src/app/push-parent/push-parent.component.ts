import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-parent',
  templateUrl: './push-parent.component.html',
  styleUrls: ['./push-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushParentComponent implements OnInit {
  counter = 0;

  get name() {
    console.log(`push-parent CD ${(this.counter += 1)}`);
    return 'push-parent';
  }
  constructor() {}

  ngOnInit(): void {}
}
