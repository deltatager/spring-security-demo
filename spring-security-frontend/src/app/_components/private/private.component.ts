import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../_services/authentication.service';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  message: string;
  user: string;

  constructor(private http: HttpClient, private authSvc: AuthenticationService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/private/hello')
      .pipe(catchError(() => EMPTY))
      .subscribe((data: any) => this.message = data.message);
    this.user = this.authSvc.currentUserValue;
  }

}
