import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { HeaderComponent } from './header/header.component';
import { RequestsTableComponent } from './requests-table/requests-table.component';


@NgModule({
  declarations: [
    RequestsComponent,
    HeaderComponent,
    RequestsTableComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
