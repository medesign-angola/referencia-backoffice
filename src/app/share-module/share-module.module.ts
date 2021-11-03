import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMyaccountHeaderComponent } from './user-myaccount-header/user-myaccount-header.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    UserMyaccountHeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuComponent,
    UserMyaccountHeaderComponent
  ]
})
export class ShareModuleModule { }
