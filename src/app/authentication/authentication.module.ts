import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { RouterModule } from '@angular/router';
import { CodeFormComponent } from './code-form/code-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
    EmailVerificationComponent,
    CodeFormComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule,
    // ToastrModule.forRoot(),
  ],
  exports: [
    SignInComponent,
    EmailVerificationComponent,
    CodeFormComponent,
    EmailFormComponent
  ]
})
export class AuthenticationModule { 
  constructor(private title: Title){
  }
 }
