import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentTokenSubject: BehaviorSubject<string>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentTokenSubject = new BehaviorSubject<string>(sessionStorage.getItem('currentToken'));
  }

  public get currentTokenValue(): string {
    return this.currentTokenSubject.value;
  }

  login(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<any>(`http://localhost:8080/api/authenticate`, body.toString(),
      {
        observe: 'response',
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      })
      .subscribe((response: HttpResponse<any>) => {
        this.currentTokenSubject.next(response.headers.get('Authorization').replace('Bearer ', ''));
        sessionStorage.setItem('currentToken', this.currentTokenValue);
      }, () => {
      }, () => this.router.navigateByUrl('/private'));
  }

  logout() {
    sessionStorage.removeItem('currentToken');
    this.currentTokenSubject.next(null);
  }
}
