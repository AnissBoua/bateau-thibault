import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastOpenSource = new Subject<boolean>();
  toastOpen$ = this.toastOpenSource.asObservable();

  constructor() {}
  updateToastOpen(value: boolean) {
    this.toastOpenSource.next(value);
  }
}
