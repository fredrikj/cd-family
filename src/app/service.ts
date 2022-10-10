import { Injectable } from '@angular/core';
import { timer, share, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  nonSharedObservable = timer(5000).pipe(
    tap(() => console.log('    nonSharedObservable emits'))
  );
  sharedObservable = timer(6000).pipe(
    tap(() => console.log('    sharedObservable emits')),
    share()
  );
}
