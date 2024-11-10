import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  loginFailed: boolean = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Redirige según el rol almacenado en usuarioCompletoSubject
        this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
          if (usuarioCompleto?.rol === "docente") {
            this.router.navigate(['/docente']);
          } else {
            this.router.navigate(['/alumno']);
          }
        });
      } else {
        this.loginFailed = true;
      }
    });
  }

  async login() {
    await this.authService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}


