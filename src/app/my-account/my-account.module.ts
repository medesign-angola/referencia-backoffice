import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareModuleModule } from '../share-module/share-module.module';


@NgModule({
  declarations: [
    MyAccountComponent,
    MyInfoComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    FontAwesomeModule,
    ShareModuleModule
  ]
})
export class MyAccountModule { }
