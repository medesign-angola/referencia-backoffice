import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core-module/user-services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  public users: any;

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    let interval = setInterval(() => {
      this.users = this.userService.getAllUsers();

      if(this.users === undefined){

        console.log(this.users);
        clearInterval(interval);
        
      }else{
        // console.log("Nada!");
      }

    }, 2000);
  }

}
