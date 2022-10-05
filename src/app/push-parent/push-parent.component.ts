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
    console.log(`Pushy CD ${(this.counter += 1)}`);
    return 'Pushy';
  }
  constructor() {}

  ngOnInit(): void {}
}
