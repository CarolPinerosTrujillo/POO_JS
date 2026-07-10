// EJERCICIO 5 REGISTRO INTERACTIVO - CONCESIONARIO VEHICULOS 
const prompt = require("prompt-sync")();
function Vehiculo(marca, modelo, color, transmision) {
    this.marca = marca;
    this.modelo = modelo
    this.color = color;
    this.transmision = transmision;
    this.velocidad = 0;

    this.acelerar = function () {
        this.velocidad += 30;
        console.log(`Vehiculo marca ${this.marca}, color ${this.color}, con tipo de transmisión ${transmision}, acelerando a ${this.velocidad}km/h`)
    }

    this.frenar = function () {
        this.velocidad = 0;
        console.log(`Vehiculo ${this.marca} ${this.modelo} Frenando, Velocidad: ${this.velocidad}km/h`)
    }

    this.luces = function () {
        console.log(`Vehiculo  ${this.marca} color ${this.color}, enciende luces!`)
    }

}

//PEDIR LOS DATOS 

let marca = prompt("Ingresa la marca del vehiculo: ")
let modelo = prompt("Ingresa el modelo del vehiculo: ")
let color = prompt("Ingresa el color del vehiculo: ")
let transmision = prompt("Ingresa el tipo de transmision (mecanica/automatica) de tu vehiculo: ")

let vehiculo = new Vehiculo(marca, modelo, color, transmision)

vehiculo.acelerar();
vehiculo.acelerar();
vehiculo.frenar();
vehiculo.luces();