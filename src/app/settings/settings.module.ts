import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { BackroundComponent } from './backround/backround.component';
import { CustomizationPanelComponent } from './customization-panel/customization-panel.component';


@NgModule({
  declarations: [
    SettingsComponent,
    BackroundComponent,
    CustomizationPanelComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
