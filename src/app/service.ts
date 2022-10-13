import { Injectable, NgZone } from '@angular/core';
import { timer, tap, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private theSubject = new Subject<number>();

  public thePublicObservable = this.theSubject.asObservable();

  constructor(private zone: NgZone) {
    const obs = timer(5000).pipe(
      tap(() => console.log('    service timer emits'))
    );
    this.zone.runOutsideAngular(() => obs.subscribe(this.theSubject));
  }
}
