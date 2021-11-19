
import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/core-module/auth-service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  // form: FormGroup;

  constructor(
    // private formbuilder: FormBuilder,
    // private _authService: AuthService
  ) { 
    // this.form = this.formbuilder.group({
    //   cred_user: ['', Validators.required],
    //   pass_user: ['', Validators.required]
    // });
  }

  // login(){
  //   const val = this.form.value

  //   if(val.email &&  val.password){
  //     this._authService.logIn(val.email).subscribe((response:any) => {
  //       console.log("User Logged IN with: " + response);
        
  //       // this.router.navigateByUrl('/admin/dashboard')
  //     })
  //   }
  // }

  ngOnInit(): void {
    // this.login();
  }

  // authform = new FormGroup({
  //   user_red: new FormControl(''),
  //   user_pass: new FormControl('')
  // });


  

}
