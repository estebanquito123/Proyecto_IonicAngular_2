import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'alumno', component: AlumnoComponent},
  {path: 'docente', component: DocenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
