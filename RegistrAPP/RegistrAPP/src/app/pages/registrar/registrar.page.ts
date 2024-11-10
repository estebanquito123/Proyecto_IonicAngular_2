import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';  // Importa el servicio AlertController
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss']
})
export class RegistrarPage {
  email: string = '';
  password: string = '';
  nombreCompleto: string = '';
  rol: string = 'alumno';

  errorMessage: string = ''; // Para mostrar mensajes de error (si el usuario ya existe)
  successMessage: string = ''; // Para mostrar mensaje de éxito

  private authService = inject(AuthService);
  private alertController = inject(AlertController);  // Inyecta el AlertController
  private router= inject(Router)


  async registrar() {
    try {
      await this.authService.registrarNuevoUsuario(this.email, this.password, this.nombreCompleto, this.rol);
      this.successMessage = 'Usuario registrado exitosamente!';
      await this.mostrarAlerta('Éxito', this.successMessage);  // Muestra alerta de éxito
      this.router.navigate(['/login']);  // Redirige al login después del registro exitoso
    } catch (error) {
      this.errorMessage = 'Error al validar el usuario';
      await this.mostrarAlerta('Error', 'Error al validar el usuario. Inténtalo de nuevo.');
    }
  }
    // Método para mostrar alertas
    async mostrarAlerta(header: string, message: string) {
      const alert = await this.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });

      await alert.present();  // Muestra la alerta
    }
}




