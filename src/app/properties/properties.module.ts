import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { HeaderComponent } from './header/header.component';
import { PropertiesTableComponent } from './properties-table/properties-table.component';
import { ShareModuleModule } from '../share-module/share-module.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PropertiesComponent,
    HeaderComponent,
    PropertiesTableComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    FontAwesomeModule
  ]
})
export class PropertiesModule { 
  constructor(private title: Title){
    this.title.setTitle("Imóveis - Referência");
  }
 }
