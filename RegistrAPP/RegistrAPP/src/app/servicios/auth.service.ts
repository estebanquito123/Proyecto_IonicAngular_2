import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/bd.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  private usuarioCompletoSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Método de inicio de sesión usando email
  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(userCredential.user.email);

      // Obtenemos datos adicionales del usuario desde Firestore usando su UID
      const userDoc = await this.firestore.collection('usuarios').doc(userCredential.user.uid).get().toPromise();
      this.usuarioCompletoSubject.next(userDoc.data() as Usuario);
    } catch (error) {
      this.isAuthenticatedSubject.next(false);
      console.error("Error en el inicio de sesión:", error);
    }
  }

  logout(): void {
    this.afAuth.signOut();
    this.isAuthenticatedSubject.next(false);
    this.usuarioSubject.next('');
    this.usuarioCompletoSubject.next(null);
  }

  // Método de registro usando email y password
  async registrarNuevoUsuario(email: string, password: string, nombreCompleto: string, rol: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;

      const nuevoUsuario: Usuario = {
        uid,
        nombreCompleto,
        email,
        usuario: '',  // Este campo puede quedar vacío o eliminarse si no se utiliza
        password,
        rol
      };

      // Guarda el nuevo usuario en Firestore
      await this.firestore.collection('usuarios').doc(uid).set(nuevoUsuario);
      this.usuarioCompletoSubject.next(nuevoUsuario);
    } catch (error) {
      console.error("Error en el registro de usuario:", error);
    }
  }

  enviarRecuperacionContrasena(email: string): void {
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      console.log('Enlace de recuperación enviado a', email);
    }).catch(error => console.error('Error al enviar enlace de recuperación:', error));
  }
}
