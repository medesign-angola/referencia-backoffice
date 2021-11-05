import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { CodeFormComponent } from './code-form/code-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { 
    path: '', component: AuthenticationComponent,
    children: [
      { path: 'login', component: SignInComponent },
      { path: 'recover', component: EmailFormComponent },
      { path: 'verification', component: EmailVerificationComponent },
      { path: 'code', component: CodeFormComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }