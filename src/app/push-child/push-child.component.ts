import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

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

  get name() {
    console.log(`${this.parent}'s pushy child CD ${(this.counter += 1)}`);
    return 'pushy child';
  }
  constructor() {}

  ngOnInit(): void {}
}
