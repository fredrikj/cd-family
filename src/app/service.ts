import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { timer, tap, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  public createSharedTimer(time: number): Observable<number> {
    return timer(time).pipe(tap(() => console.log('    service timer emits')));
  }

  constructor(private zone: NgZone) {}

  public createPrivateCD<T>(
    observable: Observable<T>,
    cdr: ChangeDetectorRef
  ): Observable<T> {
    const s = new Subject<T>();
    this.zone.runOutsideAngular(() =>
      observable.subscribe((x) => {
        s.next(x);
        cdr.detectChanges();
      })
    );
    return s.asObservable();
  }
}
