import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserModel } from 'src/app/core-module/models/user/user';
import { UserService } from 'src/app/core-module/user-services/user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit, OnChanges {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }
  ngOnChanges(): void {
    // this.getUserData()
  }

  userId: number
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhone: string;
  userAgency: string;
  userLocation: string;
  userCategory: string;

  getUserData(){

    let interval = setTimeout(() => {
      this.userId = this.userService.userId
      this.userFirstName = this.userService.userFirstName
      this.userLastName = this.userService.userLastName
      this.userEmail = this.userService.userEmail
      this.userPhone = this.userService.userPhone
      this.userAgency = this.userService.userAgency
      this.userLocation = this.userService.userLocalization
      this.userCategory = this.userService.userCategory
    
      // console.log(this.userService.userId);
    }, 3000);


  }


}
