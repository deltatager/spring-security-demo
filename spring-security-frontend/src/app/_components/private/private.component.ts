import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {IdentityService} from "../../_services/identity.service";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  message: string;
  user: string;
  roles: Array<string>;

  constructor(private http: HttpClient, private idSvc: IdentityService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/private/hello')
      .pipe(catchError(() => EMPTY))
      .subscribe((data: any) => this.message = data.message);

    this.idSvc.getUsername().subscribe((name: string) => this.user = name);
    this.idSvc.getRoles().subscribe((array: Array<string>) => this.roles = array);
  }

}
