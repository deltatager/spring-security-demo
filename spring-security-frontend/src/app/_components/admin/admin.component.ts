import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {NotificationService} from '../../_services/notification.service';
import {IdentityService} from "../../_services/identity.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message: string;
  user: string;
  notif: string;

  constructor(private http: HttpClient, private idSvc: IdentityService, private notifSvc: NotificationService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/private/admin')
      .pipe(catchError(() => EMPTY))
      .subscribe((data: any) => this.message = data.message);

    this.idSvc.getUsername().subscribe((name: string) => this.user = name);
  }

  sendNotif() {
    this.notifSvc.pushNotification(this.notif);
  }

}
