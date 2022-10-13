import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { timer, share, tap, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  public thePublicObservable: Observable<number> = timer(5000).pipe(
    tap(() => console.log('    service timer emits')),
    share()
  );

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
