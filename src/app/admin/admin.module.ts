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
import { ShareModuleModule } from '../share-module/share-module.module';
import { PropertiesModule } from '../properties/properties.module';
import { OwnersModule } from '../owners/owners.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModuleModule,
  ],
})
export class AdminModule { }
