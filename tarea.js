class Coche {
    constructor(marca, color) {
      this.marca = marca;
      this.color = color;
      this.encendido = false;
      this.velocidad = 0;
      this.velocidadMaxima = 80; 
    }
  
    encender() {
      this.encendido = true;
      console.log(`El coche ${this.marca} ${this.color} está encendido`);
    }
  
    apagar() {
      this.encendido = false;
      console.log(`El coche ${this.marca} ${this.color} está apagado.`);
    }
  
    acelerar() {
      if (this.encendido) {
        if (this.velocidad < this.velocidadMaxima) { // Verificar si la velocidad actual es menor que la velocidad máxima permitida
          this.velocidad += 10;
          console.log(`El coche ${this.marca} ${this.color} está acelerando. Velocidad actual: ${this.velocidad} km/h.`);
        } else {
          alert(`El coche ${this.marca} ${this.color} llegó a la velocidad máxima permitida.`);
          this.velocidad = this.velocidadMaxima; // Establecer la velocidad actual en la velocidad máxima permitida
        }
      } else {
        console.log('El coche está apagado.');
      }
    }

  
    frenar() {
      if (this.velocidad > 0) {
        this.velocidad -= 10;
        console.log(`El coche ${this.marca} ${this.color} está frenando. Velocidad actual: ${this.velocidad} km/h.`);
      } else {
        console.log('El coche ya está detenido.');
      }
    }
  }
  
  let miCoche = new Coche('Toyota', 'rojo');
  


  
  