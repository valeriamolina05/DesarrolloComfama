// Clase?

class Perrito {
  constructor(nombre, edad, raza) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.energia = 100;
  }
  saltar() {
    this.energia = this.energia - 5;
    console.log(`El perrito: ${this.nombre} acaba de saltar`);
    console.log(
      `El perrito: ${this.nombre} tiene ahora ${this.energia} luego de saltar.`
    );
  }
  correr() {
    if (this.energia < 20) {
      alert(
        `El perrito ${this.nombre}, está muy cansado para correr :(, debes alimentarlo )`
      );
      return;
    }
    this.energia = this.energia - 20;
    console.log(`El perrito: ${this.nombre} acaba de correr`);
    console.log(
      `El perrito: ${this.nombre} tiene ahora ${this.energia} puntos de energía luego de correr.`
    );
  }
  alimentar(alimento) {
    if (this.energia + alimento.calorias > 100) {
      alert("Ups, el perrito no puede comer más, está lleno");
      return;
    }
    this.energia = this.energia + alimento.calorias;
    console.log(
      `El perrito ${this.nombre}, tiene ${this.energia} puntos de energía luego de comer ${alimento.nombre}.`
    );
  }
}

class Comida {
  constructor(nombre, calorias) {
    this.nombre = nombre;
    this.calorias = calorias;
  }
}

let perritoUno = new Perrito("Tequila", 2, "Pitbull");

let purina = new Comida("Purina", 15);

console.log(perritoUno);
console.log(purina);
