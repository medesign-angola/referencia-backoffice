import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountRoutingModule } from './edit-account-routing.module';
import { EditAccountComponent } from './edit-account.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    EditAccountComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    EditAccountRoutingModule
  ]
})
export class EditAccountModule { }
