import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DocenteComponent } from './docente/docente.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    ResetPasswordComponent,
    DocenteComponent,
    AlumnoComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule, // Asegúrate de incluirlo aquí
  ]
})
export class PagesModule { }
