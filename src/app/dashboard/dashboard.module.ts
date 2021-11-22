import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BlocksComponent } from './blocks/blocks.component';
import { RecentRequestsComponent } from './recent-requests/recent-requests.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { SalesPerProvinceComponent } from './sales-per-province/sales-per-province.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    BlocksComponent,
    RecentRequestsComponent,
    UserStatusComponent,
    SalesPerProvinceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
