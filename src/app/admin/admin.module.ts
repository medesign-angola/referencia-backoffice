import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SupportComponent } from '../support/support.component';
import { SettingsComponent } from '../settings/settings.component';
import { EditAccountComponent } from '../edit-account/edit-account.component';
import { MyAccountComponent } from '../my-account/my-account.component';
import { PropertiesComponent } from '../properties/properties.component';
import { OwnersComponent } from '../owners/owners.component';
import { RequestsComponent } from '../requests/requests.component';
import { UsersComponent } from '../users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    // DashboardComponent,
    // SupportComponent,
    // SettingsComponent,
    // EditAccountComponent,
    // MyAccountComponent,
    // PropertiesComponent,
    // OwnersComponent,
    // RequestsComponent,
    // UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  // exports: [
  //   AdminComponent,
  //   DashboardComponent,
  //   SupportComponent,
  //   SettingsComponent,
  //   EditAccountComponent,
  //   MyAccountComponent,
  //   PropertiesComponent,
  //   OwnersComponent,
  //   RequestsComponent,
  //   UsersComponent
  // ]
})
export class AdminModule { }
