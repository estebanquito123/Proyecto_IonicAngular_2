import { Component, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

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

  private authService = inject(AuthService);
  private alertController = inject(AlertController);

  async registrar() {
    try {
      // Llamamos a registrarNuevoUsuario y verificamos el retorno
      const resultado = await this.authService.registrarNuevoUsuario(this.nombreCompleto, this.email, this.password, this.rol);
      if (resultado) {
        // Muestra alerta de éxito solo si todo fue exitoso
        this.mostrarAlerta('Éxito', 'Usuario registrado exitosamente');
      }
    } catch (error) {
      // Muestra el mensaje de error capturado desde AuthService
      this.mostrarAlerta('Error', error.message);
    }
  }

  // Método para mostrar alertas
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}





