 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditAccountComponent } from '../edit-account/edit-account.component';
import { MyAccountComponent } from '../my-account/my-account.component';
import { OwnersComponent } from '../owners/owners.component';
import { PropertiesComponent } from '../properties/properties.component';
import { RequestsComponent } from '../requests/requests.component';
import { SettingsComponent } from '../settings/settings.component';
import { SupportComponent } from '../support/support.component';
import { UsersComponent } from '../users/users.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { 
    path: '', component: AdminComponent,
    children: [
      { 
        path: 'suporte', loadChildren: () => import('../support/support.module').then(m => m.SupportModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'editarConta', loadChildren: () => import('../edit-account/edit-account.module').then(m => m.EditAccountModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'minhaConta', loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'definicoes', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'usuarios', loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'solicitacoes', loadChildren: () => import('../requests/requests.module').then(m => m.RequestsModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'proprietarios', loadChildren: () => import('../owners/owners.module').then(m => m.OwnersModule),
        canActivate: [AuthGuard]
      },
      // { path: 'definicoes', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
      { 
        path: 'imoveis', loadChildren: () => import('../properties/properties.module').then(m => m.PropertiesModule),
        canActivate: [AuthGuard]
      },
      { 
        path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
    ],
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
