class Niño {
    constructor(nombre, edad, altura) {
      this.nombre = nombre;
      this.edad = edad;
      this.altura = altura;
      this.energia = 100;
    }
  
    saltar() {
      if (this.energia < 20) {
        console.log(`El niño ${this.nombre} está muy cansado para saltar, ¡debe descansar!`);
        return;
      }
      this.energia -= 20;
      console.log(`El niño ${this.nombre} está saltando y su energía es ahora de ${this.energia}.`);
    }
  
    correr() {
      if (this.energia < 30) {
        console.log(`El niño ${this.nombre} está muy cansado para correr, ¡debe descansar!`);
        return;
      }
      this.energia -= 30;
      console.log(`El niño ${this.nombre} está corriendo y su energía es ahora de ${this.energia}.`);
    }
  
    dormir() {
      this.energia = 100;
      console.log(`El niño ${this.nombre} se ha dormido y su energía se ha restablecido a ${this.energia}.`);
    }
  }
  
  let miNiño = new Niño("Pedro", 8, 120);

  