//EJERCICIO 3

function Estudiante(nombre, curso, nota ) {
    this.nombre = nombre ;
    this.curso = curso ;
    this.nota = nota ;
    this.aprobado = aprobado ;

    this.aprobado = function () {
        return this.nota >=3 ;
    }

    this.mostrarResultado = function () {
        return  `Estudiante: ${this.nombre} | Curso: ${this.curso}° | Nota:  ${this.nota}/5 `;        
    }
    
}

const alumno1 = new Estudiante("Carol","11", 4.1 )

console.log(alumno1.mostrarResultado , "Aprobo curso:", alumno1.aprobado());

