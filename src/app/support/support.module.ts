import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { MessageListComponent } from './message-list/message-list.component';
import { SendMessageFormComponent } from './send-message-form/send-message-form.component';


@NgModule({
  declarations: [
    SupportComponent,
    MessageListComponent,
    SendMessageFormComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
