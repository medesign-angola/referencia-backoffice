import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
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
    FooterComponent
  ]
})
export class ShareModuleModule { }
