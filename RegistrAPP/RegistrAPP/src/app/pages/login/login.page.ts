//login.page.ts
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private authService = inject(AuthService);
  private alertController = inject(AlertController);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  private authSubscription: Subscription; // Suscripción para escuchar el estado de autenticación

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Escuchar el estado de autenticación para limpiar el formulario cuando se cierra sesión
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.loginForm.reset(); // Resetea el formulario si no hay una sesión activa
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe(); // Desuscribirse para evitar fugas de memoria
  }

  async login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      const usuarioData = await this.authService.login(email, password);
      if (usuarioData) {
        if (usuarioData.rol === 'docente') {
          this.router.navigate(['/docente']);
        } else if (usuarioData.rol === 'alumno') {
          this.router.navigate(['/alumno']);
        }
      }
    } catch (error) {
      this.mostrarAlerta('Error', error.message);
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}




