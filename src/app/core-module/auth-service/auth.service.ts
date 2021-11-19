import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private userUrl = 'api/login';

  isLoggedIn():boolean {
    return !!localStorage.getItem('token');
  }
  

  credentials = [
    {
      id: 1,
      email: 'pati@gmail.com',
      password: 'pati',
      username: 'Isaquias Marques'
    },
    {
      id: 2,
      email: 'isaquias@gmail.com',
      password: 'isaquias',
      username: 'Pati Marques'
    }
  ];

  user = [];

  check(email: string){
    if(email === "pati@gmail.com"){

      return email === "pati@gmail.com";

    }else if(email === "isaquias@gmail.com"){

      return email === "isaquias@gmail.com";

    }else{
      return "Invalid Credentials!";
    }
  }

  logIn(username: string){

    
    this.user = this.credentials.filter(x => x.email === "pati@gmail")

    return this.user['email'];
    

    // credentials.filter()

    // const url = `${this.userUrl}/`;
    // return ;
  }

}
