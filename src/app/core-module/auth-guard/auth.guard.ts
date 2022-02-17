import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(
    private auth: AuthService,
    ){}
  
    message: string;

  canActivate():boolean {
    if(this.auth.isLoggedIn()){
      return true;
    }else{

      this.auth.getUserAuthenticated();
      return false;
      
    }
  }

}
