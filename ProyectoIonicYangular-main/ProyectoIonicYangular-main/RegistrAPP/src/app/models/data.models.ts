import { Usuario } from "./bd.models"; // Importar la interface de usuario

export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    nombreCompleto: "Esteban",
    usuario: "alumno",
    clave: "1234",
    rol: 'alumno',  // Juan Pérez es un alumno
    asignaturas: [
      {
        nombre: "Matemáticas",
        contenido: "Algebra y geometria",
        fecha: "2024-09-30",
        hora: "11:00"
      },
      {
        nombre: "Historia",
        contenido: "Revolucion Francesa",
        fecha: "2024-10-01",
        hora: "12:00"

      },
      {
        nombre: "Fisica",
        contenido: "Leyes de Newton",
        fecha: "2024-10-02",
        hora: "13:00"
      }
    ]
  },
  {
    id: 2,
    nombreCompleto: "Helton",
    usuario: "docente",
    clave: "1234",
    rol: 'docente',  // María González es docente
    asignaturas: [
      {
        nombre: "Ciencias",
        contenido: "Fisica y Quimica",
        fecha: "2024-09-29",
        hora: "10:00"
      },
      {
        nombre: "Literatura",
        contenido: "Realismo y Naturalismo",
        fecha: "2024-10-02",
        hora: "14:00"
      },
      {
        nombre: "Biologia",
        contenido: "Evolución y genética",
        fecha: "2024-10-03",
        hora: "15:00"
      }
    ]
  },
  {
    id: 3,
    nombreCompleto: "Carlos Ramirez",
    usuario: "cramirez",
    clave: "987654",
    rol: 'alumno',  // Carlos Ramírez es un alumno
    asignaturas: [
      {
        nombre: "Ingles",
        contenido: "Tiempos verbales y vocabulario",
        fecha: "2024-09-28T08:30:00",
        hora: "10:00"
      },
      {
        nombre: "Arte",
        contenido: "Historia del arte renacentista",
        fecha: "2024-09-29T15:00:00",
        hora: "12:00"
      },
      {
        nombre: "Matematicas",
        contenido: "Cálculo diferencial",
        fecha: "2024-10-04",
        hora: "14:00"
      }
    ]
  }
];
