import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './database/in-memory-data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // HttpClientModule,
  ]
})
export class CoreModuleModule { }
