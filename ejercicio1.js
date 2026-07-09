// console.log("Hola Mundo POO");

// function Heroe(nombre, clase) {
//      this.nombre = nombre ;
//      this.clase = clase ;
//      this. saludar = function () {
//         return `Saludos ${this.nombre} el ${this.clase}`;
//      };

// }

// const guerrero = new Heroe("Carol", "Guerrero")
// console.log(guerrero.saludar());


//EJERCICIO 1 MOLDEADO INVENTARIO - TIENDA DE TECNOLOGIA DEFINIR FUNCION CONSTRUCTURA

function Computador(marca, procesador, ram, precio) { //ram en GB

    this.marca =marca ;
    this.procesador = procesador ;
    this.ram = ram ;
    this.precio = precio ;

    this.ficha =function () {
        return `Computador nuevo marca: ${this.marca} | Procesador : ${this.procesador} | RAM : ${this.ram} | Precio: ${this.precio}` ;
    }
}

const portatil = new Computador("Asus", "Intell", "8 GB", "2'500.000")
const portatil2 = new Computador("Apple", "Intell", "8 GB", "4'500.000")
const portatil3 = new Computador("Lenovo", "Intell", "16 GB", "4'800.000")

console.log("COMPUTADORES");
console.log("================================");

console.log(portatil.ficha());
console.log(portatil2.ficha());
console.log(portatil3.ficha());

//intento sin metodos
console.log( Computador("Asus", "Intell", "8 GB", "2'500.000"));


