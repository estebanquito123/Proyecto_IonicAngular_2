import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DetallesAsignaturaComponent } from './detalles-asignatura/detalles-asignatura.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'detalles-asignatura/:nombre', component: DetallesAsignaturaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
