//EJERCICIO 3

function Estudiante(nombre, curso, nota ) {
    this.nombre = nombre ;
    this.curso = curso ;
    this.nota = nota ;
    

    this.aprobado = function () {
        return this.nota >=3 ;
    }

    this.mostrarResultado = function () {
        return  `Estudiante: ${this.nombre} | Curso: ${this.curso}° | Nota:  ${this.nota}/5 `;        
    }
    
}

const alumno1 = new Estudiante("Carol","11", 4.1 )
const alumno2 = new Estudiante("Julian","11", 2.1 )
const alumno3 = new Estudiante("Paola","11", 3.1 )
const alumno3 = new Estudiante("Nicol","11", -1.1 )

console.log(alumno1.mostrarResultado() ,"Aprobo curso:", alumno1.aprobado());

//"