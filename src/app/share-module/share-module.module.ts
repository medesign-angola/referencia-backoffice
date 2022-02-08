import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserMyaccountHeaderComponent } from './user-myaccount-header/user-myaccount-header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    UserMyaccountHeaderComponent,
    MenuComponent,
    SettingsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ToastrModule,
    // BrowserAnimationsModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    UserMyaccountHeaderComponent
  ]
})
export class ShareModuleModule { }
