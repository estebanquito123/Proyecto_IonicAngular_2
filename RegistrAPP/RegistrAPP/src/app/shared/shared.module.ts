import { CustomInputComponent } from './custom-input/custom-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from '../pages/login/login-routing.module';
import { CustomSelectComponent } from './custom-select/custom-select.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CustomInputComponent,
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CustomInputComponent,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    CustomSelectComponent
  ]
})
export class SharedModule { }
