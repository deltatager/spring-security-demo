import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  timeout;
  private sub: Subject<string>;

  constructor() {
    this.sub = new Subject<string>();
  }

  public get getObservable() {
    return this.sub.asObservable();
  }

  pushNotification(content: string) {
    clearInterval(this.timeout);
    this.sub.next(content);
    this.timeout = setTimeout(() => this.sub.next(''), 3000);
  }

}
