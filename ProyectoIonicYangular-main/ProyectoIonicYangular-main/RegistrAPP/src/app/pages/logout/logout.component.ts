import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent  implements OnInit {

  private authService = inject(AuthService);
  private router= inject(Router)  // Inyecta el servicio de autenticación

  constructor() {}

  ngOnInit(): void {
    this.authService.logout();  // Cierra la sesión
    this.router.navigate(['/']); // Redirige al usuario a la página de login
  }

}



