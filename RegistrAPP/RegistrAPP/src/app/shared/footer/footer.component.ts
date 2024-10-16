import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router para la navegación
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  usuario: any; // Objeto que contendrá los datos del usuario, incluido el rol
  private authService = inject(AuthService); // Inyecta el servicio de autenticación
  private router = inject(Router); // Inyecta el router para la navegación

  constructor() { }

  ngOnInit() {
    // Suscribirse al observable para obtener los datos del usuario (incluyendo rol)
    this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  redirigirHome() {
    // Verifica el rol del usuario y redirige a la página correspondiente
    if (this.usuario?.rol === 'docente') {
      this.router.navigate(['/docente']);
    } else if (this.usuario?.rol === 'alumno') {
      this.router.navigate(['/alumno']);
    }
  }

}

