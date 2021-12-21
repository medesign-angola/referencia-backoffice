import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { HeaderComponent } from './header/header.component';
import { RequestsTableComponent } from './requests-table/requests-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [
    RequestsComponent,
    HeaderComponent,
    RequestsTableComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    FontAwesomeModule
  ]
})
export class RequestsModule { 
  constructor(private title: Title){
    this.title.setTitle("Solicitações - Referência");
  }
 }
