import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'suporte', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: 'editarConta', loadChildren: () => import('./edit-account/edit-account.module').then(m => m.EditAccountModule) },
  { path: 'minhaConta', loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: 'definicoes', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'usuarios', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'solicitacoes', loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule) },
  { path: 'proprietarios', loadChildren: () => import('./owners/owners.module').then(m => m.OwnersModule) },
  { path: 'definicoes', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'imoveis', loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
