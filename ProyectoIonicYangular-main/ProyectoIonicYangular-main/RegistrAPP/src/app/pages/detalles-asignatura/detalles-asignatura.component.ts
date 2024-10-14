import { Asignatura } from 'src/app/models/bd.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { usuariosSimulados } from 'src/app/models/data.models';


@Component({
  selector: 'app-detalles-asignatura',
  templateUrl: './detalles-asignatura.component.html',
  styleUrls: ['./detalles-asignatura.component.scss']
})
export class DetallesAsignaturaComponent implements OnInit {
  asignatura: Asignatura | undefined;
  rolUsuario: string = '';  // Rol del usuario autenticado
  codigoQRGenerado: boolean = false;  // Para saber si el docente ha generado el QR
  codigoQREscaneado: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    // Obtener el rol del usuario autenticado
    this.authService.rol$.subscribe(rol => {
      this.rolUsuario = rol;

      // Obtener el nombre de la asignatura de la URL
      const nombreAsignatura = this.route.snapshot.paramMap.get('nombre');

      // Buscar las asignaturas del usuario autenticado
      this.authService.usuario$.subscribe(nombreUsuario => {
        const usuario = usuariosSimulados.find(user => user.nombreCompleto === nombreUsuario);
        if (usuario && nombreAsignatura) {
          this.asignatura = usuario.asignaturas.find(a => a.nombre === nombreAsignatura);
        }
      });
    });
  }

  generarCodigoQR() {
    console.log('Generar código QR para la asistencia');
    this.codigoQRGenerado = true;  // Indicar que el QR ha sido generado
  }

  escanearCodigoQR() {
    console.log('Escanear código QR para registrar asistencia');
    this.codigoQREscaneado = true;
  }
}

