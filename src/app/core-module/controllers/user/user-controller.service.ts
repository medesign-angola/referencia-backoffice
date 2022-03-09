import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

    private token = this.authService.getToken();
    private domain = this.authService.mainDomain;

    getAllUsers(){

      let getUsersUrl = this.domain + "users?token=" + this.token;

      return this.http.post<any>(getUsersUrl, {});

    }


}
