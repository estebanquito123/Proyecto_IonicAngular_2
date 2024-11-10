import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss']
})
export class ResetPasswordPage {
  correo: string = ''; // Campo para el correo
  mensaje: string = ''; // Mensaje para mostrar al usuario
  private router= inject(Router)

  constructor() {}

  enviarEnlace(): void {
    if (!this.correo) {
      this.mensaje = 'Por favor, ingresa tu correo electrónico.'; // Mensaje de error
    } else {
      this.mensaje = 'Enlace de recuperación de contraseña enviado a su correo.'; // Mensaje de éxito
      this.correo = ''; // Limpiar el campo de correo
    }
  }
}
