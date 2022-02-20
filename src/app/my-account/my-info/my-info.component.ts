import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/core-module/models/user/user';
import { UserService } from 'src/app/core-module/user-services/user.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit, OnChanges {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  
  userId: number
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhone: string;
  userAgency: string;
  userLocation: string;
  userCategory: string;

  ngOnInit(): void {
    this.getUserData()
  }
  ngOnChanges(): void {
    this.getUserData()
  }

  faEditIcon = faPencilAlt;

  edit(): void{
    this.router.navigate(['/admin/editar-conta']);
  }

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

    }, 3000);
  }

}
