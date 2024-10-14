export interface Asignatura {
  nombre: string;
  contenido: string;
  fecha: string;  // Podrías usar Date para manejar fecha y hora
  hora: string;
}

export interface Usuario {
  id: number;
  nombreCompleto: string;
  usuario: string;
  clave:string;
  rol: string;
  asignaturas: Asignatura[];  // Un array de asignaturas
}
