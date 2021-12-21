import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthService } from './core-module/auth-service/auth.service';

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
    private router: Router,
    private _auth: AuthService,
    private toastrService: ToastrService
    ){}
  
    message: string;

  canActivate():boolean {
    if(this._auth.isLoggedIn()){
      return true;
    }else{

      this.message = 'Entre com as suas credenciais!';

      // this._auth.setAuthMessages(this.message);

      this.toastrService.error(this.message, 'Erro', {
        timeOut: 3000,
      });

      this.router.navigate(['/login'])
      return false;
    }
  }

}
