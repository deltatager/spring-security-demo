import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './_components/login/login.component';
import {PublicComponent} from './_components/public/public.component';
import {PrivateComponent} from './_components/private/private.component';
import {AdminComponent} from './_components/admin/admin.component';
import {RoleGuard} from "./_guards/role.guard";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'public', component: PublicComponent},
  {path: 'private', component: PrivateComponent, canActivate: [RoleGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [RoleGuard]},
  {path: 'admin2', component: AdminComponent, canActivate: [RoleGuard]},
  {path: '', redirectTo: 'public', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
