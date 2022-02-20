import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserModel } from 'src/app/core-module/models/user/user';
import { UserService } from 'src/app/core-module/user-services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnChanges {

  constructor(
    private userService: UserService
  ) { }

  userObject: UserModel = {
    userId: 0,
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhone: '',
    userAgency: '',
    userLocation: '',
    userCategory: ''
  };

  ngOnInit(): void {
    this.getUserAuthenticated();
    this.verifyIsTokenExpired()
    this.verifyUserToken();
  }

  ngOnChanges(userObject): void {
    this.getUserAuthenticated();
    // this.verifyIsTokenExpired()
  }

  
  getUserAuthenticated(){

    this.userService.userAuthenticated();

    let interval = setInterval(() => {
      if(this.userService.userId === undefined && this.userService.userFirstName === undefined && this.userService.userLastName === undefined ){
        // console.log("Estão undefind!");
      }else{

        this.userObject = {
          userId: this.userService.userId,
          userFirstName: this.userService.userFirstName,
          userLastName: this.userService.userLastName,
          userEmail: this.userService.userEmail,
          userPhone: this.userService.userPhone,
          userAgency: this.userService.userAgency,
          userLocation: this.userService.userLocalization,
          userCategory: this.userService.userCategory
        };

        clearInterval(interval);
      }
    }, 2000);
  }

  verifyIsTokenExpired(){
    let interval = setInterval(() => {
      if(!this.userService.isTokenExpired()){
        // console.log("Ainda não expirou!");
      }else{}
    }, 20000);
  }

  verifyUserToken(){
    
    console.log(this.userService.tokenExpirateTime());

    let intervalToVerifyStatusToken = setInterval(() => {
      // console.log(this.userService.isTokenExpired());
    }, 5000);

  }
}
