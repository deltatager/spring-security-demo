import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {AuthenticationService} from '../_services/authentication.service';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../_services/notification.service';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private authSvc: AuthenticationService, private notifSvc: NotificationService, private  router: Router,
              private route: ActivatedRoute) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 403) {
        if (!this.authSvc.currentTokenValue) {
          this.router.navigateByUrl('/login');
        } else {
          console.log('Route:');
          console.log(this.route.routeConfig);
          this.notifSvc.pushNotification('You do not have access to ');
          this.router.navigateByUrl('/public');
        }
      }
      return throwError(err);
    }));
  }
}
