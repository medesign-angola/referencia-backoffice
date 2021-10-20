import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthenticationComponent,
    SignUpComponent,
    SignInComponent,
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule
  ],
  exports: [
    SignUpComponent,
    SignInComponent,
    EmailVerificationComponent
  ]
})
export class AuthenticationModule { }
