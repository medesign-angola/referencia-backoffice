

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/core-module/user-services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  form: FormGroup;
  incorrect = false;
  panelMessages = '';
  errors:any = '';

  constructor(
    private title: Title,
    private userService: UserService
  ) {
    this.title.setTitle("Entrar na minha Conta - Referência");
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    });
    
  }

  submit(): void{
    this.userService.login(this.form);
  }
}
