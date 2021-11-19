import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMyaccountHeaderComponent } from './user-myaccount-header/user-myaccount-header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    UserMyaccountHeaderComponent,
    MenuComponent,
    SettingsComponent
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
