import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    private _auth: AuthService,
    private toastrService: ToastrService
    ) { }

  username = '';

  ngOnInit(): void {
    
  }

  

}
