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

  isLoggedIn():boolean {
    return !!localStorage.getItem('token');
  }

  removeTokenAfterLogout(): boolean{

    if(this.isLoggedIn()){
      
      localStorage.removeItem('token')
      
      return true;

    }else{
      return false;
    }
    
  }
  
  login(user: any): Observable<UserModel>{
    let loginUrl = this.domain + "login";

    return this.http.post<UserModel>(loginUrl, user);
  }
  // protected headers = new HttpHeaders({
  //   'Authorization': `Bearer ${localStorage.getItem('token')}`
  // });

  getUserAuthenticated(){
    let  userAuthenticatdUrl = this.domain + "user?token=" + localStorage.getItem('token');

    return this.http.post<any>(userAuthenticatdUrl, {});
    
  }

  userLogout(){
    let userAuthenticationLogoutUrl = this.domain + "logout?token=" + localStorage.getItem('token');

    return this.http.post<any>(userAuthenticationLogoutUrl, {});
  }

  private subject = new Subject<string>();
  setAuthMessages(message: string){
    this.subject.next(message)
  }
  getAuthMessage(): Observable<string>{
    return this.subject.asObservable();
  }

}
