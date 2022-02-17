import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountRoutingModule } from './edit-account-routing.module';
import { EditAccountComponent } from './edit-account.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareModuleModule } from '../share-module/share-module.module';


@NgModule({
  declarations: [
    EditAccountComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    EditAccountRoutingModule,
    FontAwesomeModule,
    ShareModuleModule
  ]
})
export class EditAccountModule { }
