class Bestia {
    constructor(public nombre: string) {}

    comer() {
        console.log(`${this.nombre} está comiendo...`)
    }
}

class Perro extends Bestia {
    ladrar(): void {
        console.log(`El perro está ladrando...`);
    }
}

class Gato extends Bestia {
    maullar(): void {
        console.log("El gato está maullando...");
    }
}

// Objeto Perro
const perro = new Perro("Max");
perro.comer();
perro.ladrar();

// Object Gato
const gato = new Gato("Lucky");
gato.comer();
gato.maullar();