import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {username: 'user', password: 'password'};

  constructor(private authSvc: AuthenticationService) {}

  ngOnInit() {
    this.authSvc.logout();
  }

  onSubmit() {
    this.authSvc.login(this.form.username, this.form.password);
  }

}
