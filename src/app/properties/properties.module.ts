import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { HeaderComponent } from './header/header.component';
import { PropertiesTableComponent } from './properties-table/properties-table.component';


@NgModule({
  declarations: [
    PropertiesComponent,
    HeaderComponent,
    PropertiesTableComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
