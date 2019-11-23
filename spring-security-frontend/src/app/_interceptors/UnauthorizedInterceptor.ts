import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {AuthenticationService} from '../_services/authentication.service';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import {NotificationService} from '../_services/notification.service';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private authSvc: AuthenticationService, private notifSvc: NotificationService, private  router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 403) {
        if (!this.authSvc.currentTokenValue) {
          this.router.navigateByUrl('/login');
        } else {
          this.notifSvc.pushNotification('You do not have access to ' + this.router.routerState.snapshot.url);
          this.router.navigateByUrl('/public');
        }
      }
      return throwError(err);
    }));
  }
}
