//EJERCICIO 4 CONTROL ESTADOS MODIFICABLES -BIBLIOTECA
function Libro(nombre, autor, paginas, editorial) {
    this.nombre = nombre;
    this.autor = autor;
    this.paginas = paginas
    this.editorial = editorial;
    this.esPrestado = false;

    this.prestar = function () {
        if (this.esPrestado===false) {
            this.esPrestado = true;
            console.log("libro prestado con exito");

        }
        else {
            console.log("Este libro ya se encuentra prestado, no disponible");

        }
    }
    this.devolver = function () {
        if (this.esPrestado) {
            this.esPrestado = false;
             console.log("libro ha sido devuelto");

        }
        else {
            console.log("Este libro ya fue devuelto!");
        }
    }

    //PDTE IMPRIMIR LIBRO CON METODO
}

let libro0 = new Libro("Los vagabundos de Dios","Mario Mendoza",392, "Planeta");


//prueba de metodos
libro0.devolver();
libro0.prestar();
libro0.prestar();
libro0.devolver();