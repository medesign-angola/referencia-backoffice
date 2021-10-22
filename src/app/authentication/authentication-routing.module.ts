import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { CodeFormComponent } from './code-form/code-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // { path: '', component: AuthenticationComponent },
  { path: 'login', component: SignInComponent },
  { path: 'recover', component: EmailFormComponent },
  { path: 'verification', component: EmailVerificationComponent },
  { path: 'code', component: CodeFormComponent }
  // { path: 'register', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }