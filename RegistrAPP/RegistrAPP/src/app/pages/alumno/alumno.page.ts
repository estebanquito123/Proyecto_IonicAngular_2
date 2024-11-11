// alumno.page.ts
import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/bd.models';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss']
})
export class AlumnoPage implements OnInit, OnDestroy {
  private authService = inject(AuthService); // Obtener el servicio de autenticación
  usuario: string; // Campo para almacenar el nombre del usuario
  mensajeQR: string = '';

  subscriptionAuthService: Subscription; // Subscripción para el observable del estado de autenticación

  asignaturas = [
    { nombre: 'Programación de algoritmos', id: 'INF101' },
    { nombre: 'Consultas de base de datos', id: 'INF102' },
    { nombre: 'Diseño de prototipos', id: 'INF103' },
  ];

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario
      console.log('Alumno:', usuario);
    }); // Obtiene el nombre del usuario logueado
  }

  ngOnDestroy() {
    this.subscriptionAuthService?.unsubscribe(); // Desuscribirse del observable del estado de autenticación
  }

  EscanearQR(id: string) {
    this.mensajeQR = 'Escaneando QR...'; // Actualizar el mensaje cuando se haga clic
    console.log(`Escaneando QR de la asignatura con ID: ${id}`);
  }

}
