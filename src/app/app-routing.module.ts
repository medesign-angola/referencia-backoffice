import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeFormComponent } from './authentication/code-form/code-form.component';
import { EmailFormComponent } from './authentication/email-form/email-form.component';
import { EmailVerificationComponent } from './authentication/email-verification/email-verification.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';

const routes: Routes = [
  { 
    path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule), 
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }
  // { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }