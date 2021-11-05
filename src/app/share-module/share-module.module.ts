import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMyaccountHeaderComponent } from './user-myaccount-header/user-myaccount-header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserMyaccountHeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    UserMyaccountHeaderComponent
  ]
})
export class ShareModuleModule { }
