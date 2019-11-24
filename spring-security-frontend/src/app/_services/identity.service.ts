import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable, pipe} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http: HttpClient) { }

  getUsername(): Observable<string> {
    return this.http.get('http://localhost:8080/user/name', {responseType: 'text'});
  }

  getRoles(): Observable<Array<string>> {
    return this.http.get<Array<GrantedAuthority>>('http://localhost:8080/user/roles')
      .pipe(map((org: Array<GrantedAuthority>) => {
        let array: Array<string> = [];
        org.forEach((value) => array.push(value.authority));
        return array;
        }));
  }

  getAuthenticationContext() {
    return this.http.get('http://localhost:8080/user');
  }


}
