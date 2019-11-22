import {Component, OnInit} from '@angular/core';
import {NotificationService} from './_services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  notif: string;

  constructor(private notifSvc: NotificationService) {}

  ngOnInit(): void {
    this.notifSvc.getObservable.subscribe((content: string) => this.notif = content);
  }
}

