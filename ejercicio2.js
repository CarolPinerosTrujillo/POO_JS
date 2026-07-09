//EJERCICIO 2 ENCAPSULAMIENTO DE COMPORTAMIENTO SISTEMA VETERINARIA

function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre ;
    this.especie = especie ;
    this.edad = edad ;
    this.peso = peso ;

    this.presentacion = function () {
        return  `Saludos  soy ${this.nombre}, soy de especie ${this.especie}, tengo ${this.edad} años, y mi peso es ${this.peso} kg`;
        
    }
    
}

const mascota1 = new Mascota("Bombom", "perro pincher", "11", "3")
const mascota2 = new Mascota("Maggie", "perro pincher", "10", "3")
const mascota3 = new Mascota("Romeo", "gato hermosho", "5", "4")

console.log("MIS MASCOTAS");
console.log("================================");

console.log(mascota1.presentacion());
console.log(mascota2.presentacion());
console.log(mascota3.presentacion());