// docente.component.ts
import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import QRious from 'qrious';
import { Subscription } from 'rxjs';
import { UsuarioAPI } from 'src/app/models/bd.models';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService); // Obtener el servicio de autenticación
  usuario: string; // Campo para almacenar el nombre del usuario

  subscriptionAuthService: Subscription; // Subscripción para el observable del estado de autenticación

  asignaturas = [
    { nombre: 'Programación en Python', id: 'INF101' },
    { nombre: 'Bases de Datos', id: 'INF102' },
    { nombre: 'Algoritmos y Estructuras de Datos', id: 'INF103' },
  ];

  qrData: string = ''; // Almacena los datos del QR
  showQRCode: boolean = false; // Controla la visibilidad del código QR

  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>; // Referencia al canvas

  generarQR(asignaturaId: string) { // Generar la QR
    const fechaActual = new Date();
    // Formatear la fecha con guiones
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11, por eso sumamos 1
    const día = String(fechaActual.getDate()).padStart(2, '0');
    // Formatear la hora con :
    const horas = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

    // Concatenar la fecha y hora con el formato deseado
    const fechaHora = `${año}-${mes}-${día},${horas}:${minutos}:${segundos}`;
    this.qrData = `http://localhost:8100/asistencia/${asignaturaId}/${this.usuario}/${fechaHora}`;

    this.showQRCode = true; // Muestra el código QR
    this.createQR(); // Genera el código QR
  }

  createQR() {
    const qr = new QRious({
      element: this.qrCanvas.nativeElement,
      value: this.qrData,
      size: 256, // Tamaño del QR
      level: 'M' // Nivel de corrección de errores
    });
  }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario
      console.log('Docente:', usuario);
    }); // Obtiene el nombre del usuario logueado
  }

  ngOnDestroy() {
    this.subscriptionAuthService?.unsubscribe(); // Desuscribirse del observable del estado de autenticación
  }

}
