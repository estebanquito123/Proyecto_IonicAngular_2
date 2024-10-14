import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Asignatura, Usuario } from 'src/app/models/bd.models';
import { usuariosSimulados } from 'src/app/models/data.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario:string='';
  asignaturas: Asignatura[] = [];  // Asignaturas del usuario
  nombreUsuario: string = '';      // Nombre del usuario logueado
  rolUsuario: string = '';         // Rol del usuario logueado (docente/alumno)

  private router= inject(Router)

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    // Obtener el nombre del usuario autenticado
    this.authService.usuario$.subscribe(nombre => {
      this.nombreUsuario = nombre;

      // Obtener el rol del usuario autenticado
      this.authService.rol$.subscribe(rol => {
        this.rolUsuario = rol;

        // Buscar las asignaturas del usuario en función de su rol
        const usuario = usuariosSimulados.find(user => user.nombreCompleto === nombre && user.rol === rol);
        if (usuario) {
          this.asignaturas = usuario.asignaturas;
        }
      });
    });
  }

  verDetalles(asignatura: Asignatura) {
    this.router.navigate(['/detalles-asignatura/', asignatura.nombre]);
  }
}



