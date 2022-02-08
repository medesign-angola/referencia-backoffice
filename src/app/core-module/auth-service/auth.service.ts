import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  // private userUrl = 'api/users';

  private domain = environment.apiUrl;

  // private domain = "https://api-referencia.medesign-angola.com/api/";

  private loginUrl = this.domain + "login";
  // private loginUrl = "https://api-referencia.medesign-angola.com/api/login";
  // private userAuthenticatdUrl = "https://api-referencia.medesign-angola.com/api/user";
  private userLogoutUrl = this.domain + "logout";
  private userAuthenticatdUrl = this.domain + "user";

  isLoggedIn():boolean {
    return !!localStorage.getItem('token');
  }
  
  login(user: any): Observable<UserModel>{
    return this.http.post<UserModel>(this.loginUrl, user);
  }

  // protected headers = new HttpHeaders({
  //   'Authorization': `Bearer ${localStorage.getItem('token')}`
  // });

  protected headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  getUserAuthenticated(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<any>(this.userAuthenticatdUrl, {headers: headers});
  }

  userLogout(){
    // let header = new HttpHeaders({
    //   'Auth6orization': `Bearer ${localStorage.getItem('token')}`
    // });
    return this.http.post(this.userLogoutUrl, {headers: this.headers});
  }

  private subject = new Subject<string>();
  setAuthMessages(message: string){
    this.subject.next(message)
  }
  getAuthMessage(): Observable<string>{
    return this.subject.asObservable();
  }

}
