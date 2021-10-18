import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryRoutingModule } from './recovery-routing.module';
import { RecoveryComponent } from './recovery.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { CodeFormComponent } from './code-form/code-form.component';


@NgModule({
  declarations: [
    RecoveryComponent,
    EmailFormComponent,
    CodeFormComponent
  ],
  imports: [
    CommonModule,
    RecoveryRoutingModule
  ]
})
export class RecoveryModule { }
