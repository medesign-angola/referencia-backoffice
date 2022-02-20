import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { UtilsService } from 'src/app/share-module/service/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private utilsService: UtilsService
  ) { }

  // private userUrl = 'api/users';

  private domain = environment.apiUrl;

  isLoggedIn():boolean {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeTokenAfterLogout(): boolean{

    if(this.isLoggedIn()){
      
      localStorage.removeItem('token')
      
      return true;

    }else{
      return false;
    }
    
  }

  authenticateUser(token: string){

    localStorage.setItem('token', token)
    this.router.navigate(['/admin']);
    
  }
  
  login(user: any): Observable<UserModel>{
    let loginUrl = this.domain + "login";

    return this.http.post<UserModel>(loginUrl, user);
  }

  getUserAuthenticated(){

    let token = this.getToken();

    if(!this.isTokenExpired(token)){

      let  userAuthenticatdUrl = this.domain + "user?token=" + token;

      return this.http.post<any>(userAuthenticatdUrl, {});

    }else{
      this.removeTokenAfterExpired();
    }
    
  }

  isTokenExpired(token: string): any{
    const helper = new JwtHelperService();

    const decodeToken = helper.decodeToken(token);
    // const expir = helper.getTokenExpirationDate(token);
    const isexp = helper.isTokenExpired(token);

    if(isexp){
      this.removeTokenAfterExpired();
    }else{
      return false;
    }

  }

  tokenExpirateTime(token: string): any{
    const helper = new JwtHelperService();

    const decodeToken = helper.decodeToken(token);
    const expir = helper.getTokenExpirationDate(token);
    // const isexp = helper.isTokenExpired(token);

    return expir;
  }

  removeTokenAfterExpired(){

    if(this.isLoggedIn()){

      localStorage.removeItem('token');
      this.router.navigate(['/login']);

      let oneMinuteInMiliSeconds = 60000;
      let minutesWanted = 5;
      let totalMinutes = oneMinuteInMiliSeconds * minutesWanted
      
      this.utilsService.getToasterErrorAlerts('A sua conexão expirou!', 'Falha de conexão', totalMinutes, undefined, true, true, false);

    }

  }

  userLogout(){
    let userAuthenticationLogoutUrl = this.domain + "logout?token=" + localStorage.getItem('token');

    return this.http.post<any>(userAuthenticationLogoutUrl, {});
  }

}