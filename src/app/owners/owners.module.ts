import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { HeaderComponent } from './header/header.component';
import { OwnersTableComponent } from './owners-table/owners-table.component';


@NgModule({
  declarations: [
    OwnersComponent,
    HeaderComponent,
    OwnersTableComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule
  ]
})
export class OwnersModule { }
