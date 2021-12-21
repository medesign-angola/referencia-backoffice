import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HeaderComponent } from './header/header.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [
    UsersComponent,
    HeaderComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { 
  constructor(private title: Title){
    this.title.setTitle("Usuários - Referência");
  }
 }
