import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { MyInfoComponent } from './my-info/my-info.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    MyInfoComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
